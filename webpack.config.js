/*
 * @file: file description
 * @author: your name
 * @Date: 2021-12-26 17:30:50
 * @LastEditors: your name
 * @LastEditTime: 2021-12-28 18:38:31
 */

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/},
    ]
},
};