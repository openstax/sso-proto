const md5File = require('md5-file');
const path = require('path');

const ignoreStyles = require('ignore-styles');
const register = ignoreStyles.default;

require('dotenv').config();

const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
  if (!extensions.find(f => filename.endsWith(f))) {
    return ignoreStyles.noOp();
  } else {
    const hash = md5File.sync(filename).slice(0, 8);
    const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);

    mod.exports = `/static/media/${bn}`;
  }
});


require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: [
    require('babel-preset-env'),
    require('babel-preset-react-app')
  ],
  plugins: [
    require('babel-plugin-syntax-dynamic-import'),
    require('babel-plugin-dynamic-import-node'),
    require('react-loadable/babel')
  ]
});

const script = process.argv[2] || 'server';
require('./' + script);
