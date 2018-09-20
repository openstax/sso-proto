const PANELS = {
  'top-navbar': () => import('./navbar'),
  'highlighting': () => import('./highlighting'),
  'book-toc-menu': () => import('./book-toc-menu'),
}

function datasetToObject(elem){
  var data = {};
  [].forEach.call(elem.attributes, function(attr) {
    if (/^data-/.test(attr.name)) {
      var camelCaseName = attr.name.substr(5).replace(/-(.)/g, function ($0, $1) {
        return $1.toUpperCase();
      });
      data[camelCaseName] = attr.value;
    }
  });
  return data;
}

const renderPanels = ({ React, ReactDOM }) => {
  document.querySelectorAll('[data-react-panel]').forEach(root => {
    if (!root.hasAttribute('data-turbolinks-permanent')) {
      console.warn(`#${id} is missing 'data-turbolinks-permanent' attribute!`)
    }
    const props = datasetToObject(root);
    PANELS[props.reactPanel]().then( Component => {
      ReactDOM.render(<Component.default {...props} />, root);
    });
  });
}

export default function attachPanels(document) {
  const imports = [
    import('../vendor'),
    import('../model/user'),
  ];

  return Promise.all(imports).then(([{React, ReactDOM},{ User }]) => {
    User.initialize();
    renderPanels({ React, ReactDOM });
    document.addEventListener("turbolinks:load", ({ data: { url } }) => {
      renderPanels({ React, ReactDOM });
    })

  })
}
