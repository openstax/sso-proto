import fetch from 'node-fetch';
import {memoize} from 'lodash/fp';

const ARCHIVE_URL = process.env.ARCHIVE_URL;

export const archiveLoader = memoize(id => {
  const start = (new Date()).getTime();

  return fetch(ARCHIVE_URL + id)
    .then(response => response.status === 200 ? response : Promise.reject(response))
    .then(response => {
      const end = (new Date()).getTime();
      console.log(`fetched ${id} from archive in ${end - start}ms`);
      return response;
    });
});
