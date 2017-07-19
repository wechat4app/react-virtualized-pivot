var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: false, //just run once by default
    frameworks: [ 'mocha', 'chai' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react', 'stage-2']} },
          {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
            exclude: ['node_modules'],
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader?importLoaders=1'],
            exclude: ['node_modules'],
          },
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};