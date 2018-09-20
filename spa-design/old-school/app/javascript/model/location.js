import { observable, computed } from '../vendor';


const Location = observable({

  pathname: window.location.pathname,

  get parts() {
    return this.pathname.replace(/^\//,'').split('/')
  },

  get isBook() {
    return this.parts[0] === 'book';
  },

});

// Listen for changes to the current location.
document.addEventListener('turbolinks:render', () => {
  Location.pathname = window.location.pathname;
});

export default Location;
