const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
});
