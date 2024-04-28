const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
     title: 'ALTTP Randomizer Community Tracker - Launcher',
     inject: 'head',
     template: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'ALTTP Randomizer Community Tracker - Launcher',
      filename: 'tracker.html',
      template: 'tracker.html',
     }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'lib',
  },
};