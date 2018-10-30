import fetch from 'node-fetch';
import {memoize} from 'lodash/fp';

const ARCHIVE_URL = process.env.ARCHIVE_URL;

export const archiveLoader = memoize(id => {
  return fetch(ARCHIVE_URL + id)
    .then(response => response.status === 200 ? response : Promise.reject(response))
    .then(response => response.json())
  ;
});
