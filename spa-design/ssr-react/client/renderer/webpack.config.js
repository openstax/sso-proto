const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  target: "node",
  externals: [
    nodeExternals()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
  },
  plugins: [
    new Dotenv({
      path: path.resolve(process.cwd(), '.env.renderer'),
      safe: path.resolve(process.cwd(), '.env.renderer.example'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-runtime'
          ]
        }
      },
      /*
       * file loader config copied from react-scripts with the
       * addition of `emitFile: false`, the client will take care
       * of collecting files, we just have to reference them
       * with the right name
       */
      {
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          emitFile: false,
          name: '/static/media/[name].[hash:8].[ext]',
        },
      }
    ]
  }
};
