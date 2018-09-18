import path from 'path';
import fs from 'fs';
import {pick} from 'lodash/fp';

const stateCacheWhitelist = [
  'Unicorn.Homepage',
  'Unicorn.BookContent',
  'Navigation'
];

const makeDirectories = filepath => {
  const dirname = path.dirname(filepath);
  console.log('making directory', dirname);
  if (fs.existsSync(dirname)) {
    return true;
  }
  makeDirectories(dirname);
  fs.mkdirSync(dirname);
};

const writeFile = (file, contents) => {
  const filepath = path.join(__dirname, 'cache', decodeURIComponent(file));
  makeDirectories(filepath);
  fs.writeFile(filepath, contents, e => e && console.log(e));
};

const readFile = filename => {
  return fs.readFileSync(path.join(__dirname, 'cache', decodeURIComponent(filename)));
};

const getState = (url) => {
  try {
    return JSON.parse(readFile(`json/${url === '/' ? 'index' : url}.json`));
  } catch(e) {
    return undefined;
  }
}

const putState = (url, state) => {
  writeFile(`json/${url === '/' ? 'index' : url}.json`, JSON.stringify(pick(stateCacheWhitelist, state)));
};

const getHtml = (url) => {
  try {
    return readFile(`html/${url === '/' ? 'index' : url}.html`);
  } catch(e) {
    return undefined;
  }
}

const putHtml = (url, html) => {
  writeFile(`html/${url === '/' ? 'index' : url}.html`, html);
};

export default {
  getState,
  putState,
  getHtml,
  putHtml,
}
