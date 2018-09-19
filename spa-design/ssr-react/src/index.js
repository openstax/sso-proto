import react from 'react';
import {render, hydrate} from 'react-dom';
import Loadable from 'react-loadable';
import {createAppContainer} from 'react-redux-modules';
import app from './module';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';

const root = document.querySelector('#root');

const {Container} = createAppContainer(app, {
  services: {
    fetch: (...args) => fetch(...args),
    loadArchive: id => fetch(process.env.REACT_APP_ARCHIVE_URL + id)
      .catch(e => fetch(process.env.REACT_APP_ARCHIVE_FALLBACK_URL + id)),
  },
  initialState: window.__PRELOADED_STATE__,
  enableDevtools: process.env.NODE_ENV === 'development'
});

delete window.__PRELOADED_STATE__;

if (process.env.NODE_ENV === 'production') {
  Loadable.preloadReady().then(() => {
    hydrate(react.createElement(Container), root);
  });
} else {
  render(react.createElement(Container), root);
}
//registerServiceWorker();
