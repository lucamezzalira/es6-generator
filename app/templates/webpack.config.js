const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
      }),
      new UglifyJSPlugin({
          comments: false
      }),
      new CopyWebpackPlugin([
        { from: './index.html', to: './dist' }
      ])
  ]
}