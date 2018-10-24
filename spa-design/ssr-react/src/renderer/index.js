import path from 'path';
require('dotenv').config({path: path.resolve(process.cwd(), '.env.server')})

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

const ASSET_DIR = path.resolve(__dirname, process.env.ASSET_DIR || '../build');
const loader = unicornLoader(ASSET_DIR);

async function go() {
  await loader(`/`, {processAuthentication: false});

  const books = await getBooks();

  for (const book of books) {
    console.log('Discovered book:', book.title);

    await loader(`/book-content/${book.cnx_id}`, {processAuthentication: false});

    await archiveLoader(book.cnx_id)
      .then(response => response.json())
      .then(async response => {
        const bookId = `${response.shortId}@${response.version}`;
        console.log('Book has short id', bookId);
        const sections = getSections(response.tree.contents);

        for (const section of sections) {
          const sectionId = section.shortId;
          await loader(`/book-content/${bookId}/${sectionId}`, {processAuthentication: false});
        }
      });
  }
}

go();
