const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: [
    './src/js'
  ],

  output: {
    path: path.join(__dirname, 'static/js'),
    filename: 'app.js',
    publicPath: '/static/js/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
