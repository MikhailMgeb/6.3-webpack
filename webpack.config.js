const PugPlugin = require('pug-plugin');
const path = require('path');

module.exports = {
  entry: './src/pug/index.pug',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.pug$/,
        loader: PugPlugin.loader,
      },
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
        test: /\.svg$/,
        type: 'asset/resource',
        loader: 'svgo-loader',
      },
      {
        test:/\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options:{
          name: '/images/[sha512:hash:base64:7].[ext]',
          outputPath :  '/images/',
        }
      }
    ],
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      js: {
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],
};