import {Module} from 'react-redux-modules';
import {first, flatten, map, set, flow, get} from 'lodash/fp';
import BookContent from './BookContent';
import app from '../../module';

const ARCHIVE_URL = 'https://archive.cnx.org';

const cleanContent = content => {
  return content
    .replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/g, '')
    .replace(/<div data-type="document-title">[\s\S]*?<\/div>/g, '')
    .replace(/<cnx-pi.*>[\s\S]*<\/cnx-pi>/g, '')
    .replace(/"\/resources/g, `${ARCHIVE_URL}/resources`);
};

const getSections = contents => {
  return flatten(contents.map(section => flatten(section.contents ? getSections(section.contents) : [section])));
};

const getFirstSection = tree => {
  return first(getSections(tree));
};

const getNextSection = (tree, sectionId) => {
  const sections = getSections(tree);
  const sectionIds = map(flow(get('id'), id => id.split('@')[0]), sections);
  const index = sectionIds.indexOf(sectionId);
  return get(index + 1, sections);
};

const getPreviousSection = (tree, sectionId) => {
  const sections = getSections(tree);
  const sectionIds = map(flow(get('id'), id => id.split('@')[0]), sections);
  const index = sectionIds.indexOf(sectionId);
  return get(index - 1, sections);
};

export default new Module('BookContent', {
  component: BookContent, //import('./BookContent'),
  path: '/book-content/:bookId/:sectionId?',
  initialState: {
    tocOpen: false,
    book: {
      id: null,
      shortId: null,
      tree: {
        contents: []
      },
    },
    section: {
      content: ''
    },
  },
  selectors: {
    paramsNeedNormalizing: ({selectors}, params) => {
      const normalized = selectors.getNormalizedParms();
      return (
          params.bookId !== normalized.bookId
          || params.sectionId !== normalized.sectionId
        )
        && normalized.bookId
        && normalized.sectionId;
    },
    getNormalizedParms: ({localState, selectors, module}) => {
      const sectionId = localState.section.shortId
        ? `${localState.section.shortId}@${localState.section.version}`
        : selectors.getFirstSection().shortId

      return {
        bookId: `${localState.book.shortId}@${localState.book.version}`,
        sectionId
      }
    },
    getSectionLink: ({localState, module}, section) => module.makePath({
      bookId: `${localState.book.shortId}@${localState.book.version}`,
      sectionId: section.shortId,
    }),
    shouldFetchBook: ({localState}, bookId) => {
      const [id, version] = bookId.split('@');
      const loading = get('book.loading', localState);
      return loading !== bookId && (
        (localState.book.id !== id && localState.book.shortId !== id)
        || (localState.book.version !== version)
      );
    },
    shouldFetchSection: ({localState}, sectionId) => {
      const [id, version] = sectionId.split('@');
      const loading = get('section.loading', localState);
      return loading !== sectionId && (
        (localState.section.id !== id && localState.section.shortId !== id)
        || (localState.section.version !== version)
      );
    },
    getContent: ({localState}) => flow(get('section.content'), cleanContent)(localState),
    getFirstSection: ({localState}) => getFirstSection(localState.book.tree.contents),
    getNextSection: ({localState}) => getNextSection(localState.book.tree.contents, localState.section.id),
    getPreviousSection: ({localState}) => getPreviousSection(localState.book.tree.contents, localState.section.id),
  },
  reducers: {
    openToc: ({localState}) => set('tocOpen', true, localState),
    closeToc: ({localState}) => set('tocOpen', false, localState),
    requestBook: ({localState, payload}) => set('book.loading', payload, localState),
    requestSection: ({localState, payload}) => set('section.loading', payload, localState),
    receiveSection: ({localState, payload}) => set('section', payload, localState),
    receiveBook: ({localState, payload}) => set('book', payload, localState),
  },
  effects: {
    receiveNavigation: async ({payload, actions, selectors, module, getLocalState, services, dispatch}) => {
      const {bookId, sectionId} = payload;
      const {navigate, requestBook, requestSection, receiveSection, receiveBook} = actions;
      const {shouldFetchBook, shouldFetchSection, getNormalizedParms, paramsNeedNormalizing} = selectors;
      const queries = [null, null];

      if (shouldFetchBook(bookId)) {
        requestBook(bookId);
        queries[0] = services.loadArchive(`${bookId}.json`)
          .then(response => response.json());
      }

      if (sectionId && shouldFetchSection(sectionId)) {
        requestSection(sectionId);
        queries[1] = services.loadArchive(`${bookId}:${sectionId}.json`)
          .then(response => response.json());
      }

      const [book, section] = await Promise.all(queries);

      if (book && getLocalState().book.loading === bookId) {
        receiveBook(book);
      }
      if (section && getLocalState().section.loading === sectionId) {
        receiveSection(section);

        typeof window !== 'undefined' && window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      if (paramsNeedNormalizing(payload)) {
        navigate(getNormalizedParms(), 'replace');
      } else {
        dispatch(app.actions.receiveMeta({
          title: `${getLocalState().book.title} / ${getLocalState().section.title}`,
        }));
      }
    },
  },
});
