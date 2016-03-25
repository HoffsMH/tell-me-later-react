const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js')
    // test: "./app/assets/index.js"
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "./react-assets/javascripts/[name]-bundle.min.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['react', 'es2015']}  },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /.(woff|woff2)$/, loader: "file-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {test: /\.png$/,  loader: "url?limit=10000&mimetype=image/png" },
    ]
  },
  plugins: [
        new ExtractTextPlugin("./react-assets/stylesheets/[name]-bundle.min.css")
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.scss', 'css']
  }
};
