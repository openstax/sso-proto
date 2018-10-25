import fetch from 'node-fetch';

const ARCHIVE_URL = process.env.ARCHIVE_URL;

export const archiveLoader = id => {
  return fetch(ARCHIVE_URL + id)
    .then(response => response.status === 200 ? response : Promise.reject(response));
};
