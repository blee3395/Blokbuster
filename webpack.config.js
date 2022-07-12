const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '/index.html'),
    filename: 'index.html'
  })],
  devtool: 'inline-source-map',
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    proxy: {
      '/imdb': 'http://localhost:3000'
    },
    compress: true,
    port: 8080,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },  

  module: {
    rules: [
      { 
        test: /\.jsx?/, 
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}