import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './index.html'
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }]
  },
  plugins: [htmlWebpackPlugin, new OfflinePlugin(), new CopyWebpackPlugin([{ from: 'src/' }])]
};

export default config;
