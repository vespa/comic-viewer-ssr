const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const baseConfig = require('./webpack.config.base').config;

cssLoaders = [...cssLoaders, {
  loader: 'postcss-loader',
  options: {
    // the autoprefixer adds the vendor prefixes to css (ex: webkit, ms)
    plugins: () => [
      autoprefixer({
        browsers: ['last 2 versions', 'ie > 8'],
      }),
    ],
  },
}];


const config = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          use: ['style-loader'],
        }),
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
    }),
  ],
});

module.exports = config;
