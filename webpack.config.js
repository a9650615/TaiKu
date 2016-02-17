var fs = require('fs');
var path = require('path');
var webpack = require("webpack");
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return [
      '.bin',
      'bootstrap',
      'jquery'/*,
      'bootstrap-notify',
      'bootbox'*/
    ].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: './build/TaiKu.bundled.js'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ]
};

config.target = webpackTargetElectronRenderer(config);
module.exports = config;