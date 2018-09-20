const COMPONENTS = {
  'top-navbar': () => import('./navbar'),
  'book-toc-menu': () => import('./book-toc-menu'),
}

const IDS = Object.keys(COMPONENTS);

export default function attachReactComponents(document) {
  const imports = [
    import('../vendor'),
    import('../model/user'),
  ];

  IDS.forEach((elId) => {
    imports.push(COMPONENTS[elId]())
  });

  return Promise.all(imports).then(([
    {React, ReactDOM},
    { User },
    ...components]
  ) => {
    User.initialize();
    components.forEach((Component, index) => {
      const id = IDS[index];
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
