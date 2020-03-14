const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './assets/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader', options: { sourceMap: true } },
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    }
  ]
}



