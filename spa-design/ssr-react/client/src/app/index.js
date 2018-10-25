import {createAppContainer} from 'react-redux-modules';
import app from './module';

export default (...args) => createAppContainer(app, ...args);
