const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
     path: path.join(__dirname, '/dist'),
     filename: 'bundle.min.js'
  },
  module: {
    rules: [
      { 
        test: /\.(ts|tsx)?$/,
        loader: "awesome-typescript-loader"
      },
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader?cacheDirectory=true',
          ]
      },
      {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}