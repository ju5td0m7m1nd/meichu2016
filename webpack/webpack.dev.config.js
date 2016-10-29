'use strict';
/**
 * Created by Frank Tsai on 2016/5/18.
 */
import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/index',
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "Hammer": "hammerjs/hammer",
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        //loader: 'babel?compact=false',
        loader: 'babel-loader',
        query: {
          plugins: ["transform-class-properties"],
          presets:[ 'es2015', 'react', 'stage-2' ],
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader'},
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream",
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file",
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
      },
    ]
  },
  "resolve": {
    "extensions": [
      "",
      ".js",
      ".jsx",
    ],
  },
};
