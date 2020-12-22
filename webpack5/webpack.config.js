const RemoveCommentsPlugin = require('./removeCommentPlugin.js');
const { ModuleFederationPlugin } = require("webpack").container;

console.log(RemoveCommentsPlugin)

module.exports = {
  entry: "./src/index.js",
    mode: 'none',
    // target: "node10",
    // target: ["web", "es2020"],
    output:{
    },
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
    new RemoveCommentsPlugin(),
    // 模块联邦 导出一个包含a模块的库wepback5
    new ModuleFederationPlugin({
      name: 'webpack5',
      library: {type: 'var', name: 'webpack5'},
      filename: 'remoteEntry.js',
      exposes: {
        './a': './src/a'
      },
      shared: []
    })
  ]
}