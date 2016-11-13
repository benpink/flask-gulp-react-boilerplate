const path = require('path');

module.exports = {

  devtool: 'source-map',

  entry: [
    './src/js'
  ],

  output: {
    path: path.join(__dirname, 'static/js'),
    filename: 'app.js',
    publicPath: '/static/js/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src', 'js')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
