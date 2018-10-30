import {Module} from 'react-redux-modules';
import {find, flow, set} from 'lodash/fp';
import Homepage from './Homepage';

export default new Module('Homepage', {
  component: Homepage, //import('./Homepage'),
  path: '/',
  initialState: {
    books: [],
    loading: false
  },
  selectors: {
    getBook: ({localState}, bookId) => find({cnx_id: bookId}, localState.books)
  },
  reducers: {
    requestBooks: ({localState}) => set('loading', true, localState),
    receiveBooks: ({localState, payload}) => flow(
      set('books', payload),
      set('loading', false),
    )(localState),
  },
  effects: {
    receiveNavigation: async ({actions, localState: {books}, services}) => {
      if (books.length > 0) {
        return;
      }

      actions.requestBooks();

      const {items} = await services.loadCmsBooks();

      const queries = [];

      for (const book of items) {
        queries.push(services.loadArchive(`${book.cnx_id}.json`));
      }

      Promise.all(queries).then(data => {
        const findData = id => find({id}, data);
        const bakedBooks = items.filter(book => {
          const data = findData(book.cnx_id);
          return data && data.collated;
        });
        
        actions.receiveBooks(bakedBooks);
      });
    },
  },
});
