import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import Loadable from 'react-loadable';
import cookieParser from 'cookie-parser';
import makeLoader from './loader';

const app = express();
const PORT = process.env.PORT || 3012;
const ASSET_DIR = path.resolve(__dirname, process.env.ASSET_DIR || '../build');
const loader = makeLoader(ASSET_DIR);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/', express.static(ASSET_DIR, {index: false}));
app.use(loader);

Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});

app.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
