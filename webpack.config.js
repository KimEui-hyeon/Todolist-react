const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { react_app : './src/index.js' },
  output: {
    path: path.resolve(__dirname , './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx','.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true
  }
};