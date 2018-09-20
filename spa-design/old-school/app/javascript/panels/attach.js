const PANELS = {
  'top-navbar': () => import('./navbar'),
  'highlighting': () => import('./highlighting'),
  'book-toc-menu': () => import('./book-toc-menu'),
}

const IDS = Object.keys(PANELS);

const renderPanels = ({ React, ReactDOM, components }) => {
  components.forEach((Component, index) => {
    const id = IDS[index];
    const root = document.getElementById(id)
    if (root){
      if (!root.hasAttribute('data-turbolinks-permanent')) {
        console.warn(`#${id} is missing 'data-turbolinks-permanent' attribute!`)
      }
      ReactDOM.render(<Component.default {...datasetToObject(root)} />, root);
    } else {
      console.log(`Unable to find elememnt with id ${id}`);
    }
  })
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

export default function attachPanels(document) {
  const imports = [
    import('../vendor'),
    import('../model/user'),
  ];

  IDS.forEach((elId) => {
    imports.push(PANELS[elId]())
  });

  return Promise.all(imports).then(([
    {React, ReactDOM},
    { User },
    ...components]
  ) => {
    User.initialize();
    renderPanels({ React, ReactDOM, components });
    document.addEventListener("turbolinks:load", ({ data: { url } }) => {
      renderPanels({ React, ReactDOM, components });
    })

  })
}
