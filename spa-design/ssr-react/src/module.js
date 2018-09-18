import {Module} from 'react-redux-modules';
import {flow, get, set} from 'lodash/fp';
import BookContent from './modules/book-content/module';
import Homepage from './modules/homepage/module';
import Notebook from './modules/notebook/module';
import NotFound from './modules/not-found/module';
import Wrapper from './Wrapper';

export default new Module('Unicorn', {
  root: true,
  navigable: false,
  component: Wrapper,//import('./Wrapper'),
  submodules: [BookContent, Homepage, Notebook, NotFound],
  initialState: {
    notAllowed: false,
    userPromise: null,
    userStateEstablished: false,
    user: null
  },
  selectors: {
    user: ({localState}) => get('user', localState),
    userLoaded: ({localState}) => get('userPromise', localState),
    location: ({state: {Navigation: {location: {pathname, search, hash}}}}) => `${process.env.REACT_APP_BASE_URL}${pathname}${search}${hash}`,
  },
  reducers: {
    blockAccess: ({localState}) => set('notAllowed', true, localState),
    receiveNavigation: ({localState}) => set('notAllowed', false, localState),
    receiveUserPromise: ({localState, payload}) => set('userPromise', payload, localState),
    receiveUser: ({localState, payload}) => flow(
      set('user', payload),
      set('userStateEstablished', true)
    )(localState),
  },
  effects: {
    receiveNavigation: async ({actions, localState: {userPromise}}) => {
      // TODO remove the window check when auth works on the server
      if (typeof(window) !== 'undefined' && !userPromise) {
        actions.requestUser();
      }
    },
    requestUser: ({actions, services}) => {
      const promise = new Promise(async resolve => {
        try {
          const user = await services.fetch('https://accounts.rdls.org/api/user', {credentials: 'include'})
            .then(response => response.json())
            .then(response => response.error_id === undefined ? response : Promise.reject(response));

          actions.receiveUser(user);
        } catch (e) {
          actions.receiveUser(null);
        }

        resolve();
      });

      actions.receiveUserPromise(promise);

      return promise;
    }
  }
});
