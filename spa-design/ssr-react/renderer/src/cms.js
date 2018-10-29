import fetch from 'node-fetch';
import {memoize, once} from 'lodash/fp';

const CMS_URL = process.env.REACT_APP_BOOK_CMS_QUERY;

export const loadCmsBook = memoize(id => {
  return fetch(`${CMS_URL}&cnx_id=${id}`)
    .then(response => response.status === 200 ? response : Promise.reject(response))
    .then(response => response.json())
  ;
});

export const loadCmsBooks = once(() => {
  return fetch(CMS_URL)
    .then(response => response.status === 200 ? response : Promise.reject(response))
    .then(response => response.json())
  ;
});
