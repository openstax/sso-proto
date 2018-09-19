import fetch, {Response} from 'node-fetch';
import cache from './cache';

const ARCHIVE_URL = 'https://archive.cnx.org/contents/';

export const archiveLoader = id => {
  const cacheKey = `archive/${id}`;
  const cached = cache.getRequest(cacheKey);

  if (cached) {
    return Promise.resolve(new Response(cached));
  }

  return fetch(ARCHIVE_URL + id)
    .then(response => {
      response.clone().text().then(text => cache.putRequest(cacheKey, text));
      return response;
    });
};

const matchArchiveUrl = /^\/archive\/(.*)/;
export default (req, res, next) => {
  const match = matchArchiveUrl.exec(req.url);
  const id = match ? match[1] : null;

  if (!id) {
    return next();
  }

  const json = archiveLoader(id)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(e => console.log(e))
  ;
};
