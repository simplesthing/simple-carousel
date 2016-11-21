const path = require('path')
const webpack = require('webpack')
const projectRoot = path.join(__dirname)
const assetPath = path.join(projectRoot, 'dist')

module.exports = {
	context: projectRoot,
	entry: './src/index.js',
	output: {
    path: assetPath,
    filename: 'carousel.js',
    publicPath: '/dist'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
