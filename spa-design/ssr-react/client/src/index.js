import react from 'react';
import {render, hydrate} from 'react-dom';
import app from 'app';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';

const root = document.querySelector('#root');

const {Container} = app({
  services: {
    processAuthentication: true,
    fetch: (...args) => fetch(...args),
    loadCmsBook: id => fetch(`${process.env.REACT_APP_BOOK_CMS_QUERY}&cnx_id=${id}`)
      .catch(e => fetch(`${process.env.REACT_APP_BOOK_CMS_QUERY_FALLBACK}&cnx_id=${id}`)),
    loadCmsBooks: () => fetch(process.env.REACT_APP_BOOK_CMS_QUERY)
      .catch(e => fetch(process.env.REACT_APP_BOOK_CMS_QUERY_FALLBACK)),
    loadArchive: id => fetch(process.env.REACT_APP_ARCHIVE_URL + id)
      .catch(e => fetch(process.env.REACT_APP_ARCHIVE_FALLBACK_URL + id)),
  },
  initialState: window.__PRELOADED_STATE__,
  enableDevtools: process.env.NODE_ENV === 'development'
});

delete window.__PRELOADED_STATE__;

if (process.env.NODE_ENV === 'production') {
  hydrate(react.createElement(Container), root);
} else {
  render(react.createElement(Container), root);
}
//registerServiceWorker();
