const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
//
const { baseConfig, cssLoaders } = require('./webpack.config.base');

const config = merge(baseConfig, {
  watch: true,
  // the devtool enable us to see the original file when we debug a line and not the bundle.js
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['less-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = config;
