const ELEMENTS = {
  'top-navbar': () => import('./navbar'),
}

const ELEMENT_IDS = Object.keys(ELEMENTS);

export function bootStaticElements(document) {
  const imports = [
    import('../helpers/react'),
  ];

  ELEMENT_IDS.forEach((elId) => {
    imports.push(ELEMENTS[elId]())
  });

  return Promise.all(imports).then(([{React, ReactDOM}, ...components]) => {
    components.forEach((Component, index) => {
      const id = ELEMENT_IDS[index];
      const root = document.getElementById(id)
      if (root){
        if (!root.hasAttribute('data-turbolinks-permanent')) {
          console.warn(`#${id} is missing 'data-turbolinks-permanent' attribute!`)
        }
        ReactDOM.render(<Component.default />, root);
      } else {
        console.log(`Unable to find elememnt with id ${id}`);
      }

    })
  })
}
