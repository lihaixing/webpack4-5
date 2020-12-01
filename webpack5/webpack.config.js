const RemoveCommentsPlugin = require('./removeCommentPlugin.js')
console.log(RemoveCommentsPlugin)
module.exports = {
  entry: "./src/index.js",
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          './markdown-loader.js',
        ]
      }
    ]
  },
  plugins: [
    new RemoveCommentsPlugin()
  ]
}