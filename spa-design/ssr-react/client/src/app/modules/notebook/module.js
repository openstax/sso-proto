import {Module} from 'react-redux-modules';
import Notebook from './Notebook';
import app from '../../module'; 

export default new Module('Notebook', {
  component: Notebook,
  path: '/notebook',
  effects: {
    receiveNavigation: async ({getState, dispatch}) => {
      await app.selectors.userLoaded(getState());
      const user = app.selectors.user(getState());

      if (user) {
        // load notes
      } else {
        dispatch(app.actions.blockAccess());
      }
    },
  },
});
