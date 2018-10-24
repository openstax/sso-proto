let app;

if (process.env.REACT_APP_ENTRY === 'renderer') {
  app = require('./renderer');
} else {
  app = require('./client');
}

export default app;
