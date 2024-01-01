// const HtmlWebpackPlugin = require('html-webpack-plugin');

const PugPlugin = require('pug-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/pug/index.pug',
    // 'route/to/page': './src/pug/index.pug',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         implementation: require('sass'),
      //       },
      //     },

      //   ],
      // },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'ie 9' }],
            ],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        loader: 'svgo-loader',
      },
      {
        test: /.pug$/,
        loader: PugPlugin.loader,
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.squooshMinify,
  //       },
  //     }),
  //   ],
  // },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    // }),
    new PugPlugin(),
    // new MiniCssExtractPlugin(),
  ],
};