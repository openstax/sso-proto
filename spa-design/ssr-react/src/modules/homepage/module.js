import {Module} from 'react-redux-modules';
import {flow, set} from 'lodash/fp';
import Homepage from './Homepage';

export default new Module('Homepage', {
  component: Homepage, //import('./Homepage'),
  path: '/',
  initialState: {
    books: [],
    loading: false
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

      const {items} = await services.fetch(process.env.REACT_APP_BOOK_CMS_QUERY)
        .then(response => response.json());

      actions.receiveBooks(items);
    },
  },
});
