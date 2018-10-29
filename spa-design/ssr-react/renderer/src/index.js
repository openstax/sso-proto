import path from 'path';
import fs from 'fs';

const fetch = require('node-fetch');
const {get, flatten} = require('lodash/fp');
const {archiveLoader} = require('./archive');
const {unicornLoader} = require('./loader');

const getSections = contents => {
  return flatten(contents.map(section => flatten(section.contents ? getSections(section.contents) : [section])));
};

function getBooks() {
  return Object.entries(JSON.parse(process.env.BOOK_VERSIONS)).map(([id, version]) => `${id}@${version}`);
}

const ASSET_DIR = path.resolve(process.cwd(), process.env.ASSET_DIR || 'build');

const loader = unicornLoader(ASSET_DIR);

async function go() {
  for (const bookId of getBooks()) {
    await archiveLoader(`${bookId}.json`)
      .then(response => response.json())
      .then(response => renderBook(response));
  }
}

go();

const renderSection = basePath => async section => {
  const id = `${section.shortId}@${section.version}`;
  const sectionPath = `${basePath}/${id}`;

  const {html, status} = await loader(sectionPath);

  if (status === 200) {
    writeFile(sectionPath, html);
  }
};

async function renderBook(book) {
  const id = `${book.shortId}@${book.version}`;
  const bookPath = `/book-content/${id}`;

  // TODO - this will return a redirect, need to
  // figure out how to handle that
  //await loader(`/book-content/${book.cnx_id}`);

  for (const section of getSections(book.tree.contents)) {
    await archiveLoader(`${id}:${section.shortId}.json`)
      .then(response => response.json())
      .then(renderSection(bookPath))
      .catch(logError);
  }
}

function makeDirectories(filepath) {
  const dirname = path.dirname(filepath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  makeDirectories(dirname);
  fs.mkdirSync(dirname);
}

function writeFile(tail, contents) {
  const filepath = path.join(ASSET_DIR, tail);
  makeDirectories(filepath);
  fs.writeFile(filepath, contents, e => e && console.log(e));
}

function logError(e) {
  if (e.status === 404) {
    console.error(`404 no response from ${e.url}`)
  } else {
    throw e;
  }
}
