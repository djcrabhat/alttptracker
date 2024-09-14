const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: "./js/index.js",
    tracker: {
      dependOn: 'index',
      import: "./js/tracker.js"
    }
  },
  // entry: "./js/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "ALTTP Randomizer Community Tracker - Launcher",
      filename: "index.html",
      template: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "ALTTP Randomizer Community Tracker - Tracker",
      filename: "tracker.html",
      template: "tracker.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    library: "[name]",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    port: 9000,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
