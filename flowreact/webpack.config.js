const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
  entry: {
    app: [__dirname, 'src/index.jsx'].join('/')
  },
  output: {
    path: __dirname,
    filename: 'bundeFile.js'
  },
  resolve: {
    extensions: ['root', '.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
};
