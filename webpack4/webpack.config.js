const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
module.exports = {
  // 启用 minification(代码压缩) 和 tree shaking
  // 自动指定DefinePlugin：process.env.NODE_ENV === 'production'
  mode: 'none', // 
  // devtool: 'source-map', // 鼓励生成环境用这个
  optimization: {
    // usedExports: true  // 不需要了，有了production
    splitChunks: {
      chunks: 'all', // 提取公共模块 loadash
      // 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法
      // 利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致。
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single' // 提取引导模板 将 runtime 代码拆分为一个单独的 chunk
  },
  entry: {
    app: './src/index.js',
    // another: './src/another-module.js'
  },
  output: {
    filename: '[name].[contenthash].js', // content hash 内容变化才会变化
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin() // 不会因模块增加和减少导致的模块内容变化，增加长缓存命中机制
    // new BundleAnalyzerPlugin()
  ],
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};