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
  return fetch(process.env.REACT_APP_BOOK_CMS_QUERY)
    .then(response => response.json())
    .then(get('items'));
}

const ASSET_DIR = path.resolve(process.cwd(), process.env.ASSET_DIR || 'build');

const loader = unicornLoader(ASSET_DIR);

async function go() {
  await loader(`/`, {processAuthentication: false});

  const books = await getBooks();

  for (const book of books) {
    console.log('Discovered book:', book.title);

    const skipBook = () => {
      console.log(`skipping ${book.title} because it is not baked`);
    };

    await archiveLoader(book.cnx_id)
      .then(response => response.json())
      .then(response => response.collated ? renderBook(response) : skipBook());
  }
}

go();

const renderSection = basePath => async section => {
  const id = `${section.shortId}@${section.version}`;
  const sectionPath = `${basePath}/${id}`;

  const {html, status} = await loader(sectionPath);

  if (status === 200) {
    writeFile(`${sectionPath}.html`, html);
  }
};

async function renderBook(book) {
  const id = `${book.shortId}@${book.version}`;
  const bookPath = `/book-content/${id}`;

  // TODO - this will return a redirect, need to
  // figure out how to handle that
  //await loader(`/book-content/${book.cnx_id}`);

  for (const section of getSections(book.tree.contents)) {
    await archiveLoader(section.shortId)
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
