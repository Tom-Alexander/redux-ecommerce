var webpack = require('webpack');

var config = {
  entry: {
    standalone: "./lib/index.js"
  },
  output: {
    path: 'dist',
    filename: "app.compiled.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {optional: 'es7.decorators,es7.objectRestSpread'}
      }
    ]
  }
};

module.exports = config;
