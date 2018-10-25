import fetch from 'node-fetch';

const ARCHIVE_URL = process.env.ARCHIVE_URL;

export const archiveLoader = id => {
  return fetch(ARCHIVE_URL + id);
};
