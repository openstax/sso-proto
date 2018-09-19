import {Module} from 'react-redux-modules';
import {uniqBy, flow, get, set} from 'lodash/fp';
import BookContent from './modules/book-content/module';
import Homepage from './modules/homepage/module';
import Notebook from './modules/notebook/module';
import NotFound from './modules/not-found/module';
import Wrapper from './Wrapper';
import logo from './assets/unicorn.jpg';

export default new Module('Unicorn', {
  root: true,
  navigable: false,
  component: Wrapper,//import('./Wrapper'),
  submodules: [BookContent, Homepage, Notebook, NotFound],
  initialState: {
    title: 'Unicorn',
    meta: [
      {property: "og:title", content: "Unicorn"},
      {property: "og:type", content: "website"},
      {property: "og:url", content: ""},
      {property: "og:image", content: logo}
    ],
    notAllowed: false,
    userPromise: null,
    userStateEstablished: false,
    user: null
  },
  selectors: {
    user: ({localState}) => get('user', localState),
    userLoaded: ({localState}) => get('userPromise', localState),
    location: ({state: {Navigation: {location: {pathname, search, hash}}}}) => typeof(window) === 'undefined'
      ? `${process.env.REACT_APP_BASE_URL}${pathname}${search}${hash}`
      : window.location,
  },
  actions: {
    receiveMeta: (payload) => ({
      title: payload.title,
      meta: payload.meta || []
    })
  },
  reducers: {
    receiveMeta: ({module, localState, payload}) => flow(
      set('title', `${module.initialState.title}${payload.title ? ` - ${payload.title}` : ''}`),
      localState => set('meta', uniqBy('property', [...payload.meta, ...localState.meta]), localState),
      localState => set('meta', localState.meta.map(meta => {
        switch(meta.property) {
          case 'og:title':
            return set('content', localState.title, meta);
          default:
            return meta;
        }
      }), localState)
    )(localState),
    resetMeta: ({module, localState, payload}) => flow(
      set('title', `${module.initialState.title}${payload.title ? ` - ${payload.title}` : ''}`),
      localState => set('meta', module.initialState.meta.map(meta => {
        switch(meta.property) {
          case 'og:url':
            return set('content', payload.url, meta);
          case 'og:title':
            return set('content', localState.title, meta);
          default:
            return meta;
        }
      }), localState)
    )(localState),
    blockAccess: ({localState}) => set('notAllowed', true, localState),
    receiveNavigation: ({localState}) => set('notAllowed', false, localState),
    receiveUserPromise: ({localState, payload}) => set('userPromise', payload, localState),
    receiveUser: ({localState, payload}) => flow(
      set('user', payload),
      set('userStateEstablished', true)
    )(localState),
  },
  effects: {
    receiveNavigation: async ({actions, selectors, services, localState: {userPromise}}) => {
      actions.resetMeta({
        url: selectors.location(),
      });

      if (services.processAuthentication) {
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
