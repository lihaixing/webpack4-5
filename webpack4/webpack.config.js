const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { HashedModuleIdsPlugin } = require('webpack');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const config = {
  // 启用 minification(代码压缩) 和 tree shaking
  // 自动指定DefinePlugin：process.env.NODE_ENV === 'production'
  mode: 'production', // none production development
  // 鼓励生成环境用 source-map 
  // inline-source-map 因为tsconfig.json中配置了 "sourceMap": true, 告诉 webpack 提取这些 source map，并内联到最终的 bundle 中
  // devtool: 'inline-source-map', 
  optimization: {
    // usedExports: true,
    // concatenateModules: true,
    // sideEffects:true, // 开启副作用  意思是如果没有引用到某个模块就把他删掉
    // minimize:true,
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
    // app: './src/index.tsx',
    print: './src/print.js',
    // another: './src/another-module.js'
  },
  output: {
    filename: '[name].[contenthash].js', // content hash 内容变化才会变化
    // filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[contenthash].js',
    // 暴露 library 这是库名称 import from 'webpackNumbers'
    library: 'webpackNumbers', 
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HashedModuleIdsPlugin() // 不会因模块增加和减少导致的模块内容变化，增加长缓存命中机制
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
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
      },
      {
        test: /\.tsx?$/,
          use: [
              {
                  loader: 'ts-loader',
                  // options: {
                  //     transpileOnly: true
                  // }
              }
          ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
        'src@': path.resolve(__dirname, './src'),
    },
    // 按顺序解析，碰到这些后缀名，可以不写
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  cache:{},
  externals: {
    // 外部化 lodash
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  // target:'node'
  // 对于想要实现从一个依赖中调用多个文件的那些 library：
  //  externals: [
  //   'library/one',
  //   'library/two',
  //   // 匹配以 "library/" 开始的所有依赖
  //   /^library\/.+$/
  // ]
};

module.exports = config;
// module.exports = smp.wrap(config);