const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {HashedModuleIdsPlugin} = require('webpack');

const {ModuleFederationPlugin} = require('webpack').container;

const config = {
  // 启用 minification(代码压缩) 和 tree shaking
  // 自动指定DefinePlugin：process.env.NODE_ENV === 'production'
  mode: 'none', // none production development
  // 鼓励生成环境用 source-map
  // inline-source-map 因为tsconfig.json中配置了 "sourceMap": true, 告诉 webpack 提取这些 source map，并内联到最终的 bundle 中
  // devtool: 'none',
  optimization: {
    // minimize:true,
    // moduleIds: 'hashed',
    // moduleIds: 'deterministic',
    // usedExports: true  // 不需要了，有了production
    splitChunks: {
      chunks: 'all', // 提取公共模块 loadash
      name: false,
      // 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法
      // 利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致。
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    // runtimeChunk: 'single' // 提取引导模板 将 runtime 代码拆分为一个单独的 chunk
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    }
  },
  entry: {
    print: './src/print.js',
    // 入口文件描述符 webpack5新增
    app: {
      import: './src/index.tsx',
      // app入口依赖shared入口
      dependOn: 'shared',
    },
    shared: ['react', 'react-dom'] // shared相当于我们之前的dll功能
  },
  output: {
    filename: '[name].[contenthash].js', // content hash 内容变化才会变化
    // filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
    // 暴露 library 这是库名称 import from 'webpackNumbers'
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin({}),
    // new BundleAnalyzerPlugin()
    // 模块联邦 引入wepback5库 同时再html文件中也要引入wepback5库打包生成的remoteEntry.js
    new ModuleFederationPlugin({
      name: 'webpack4to5',
      library: {type: 'var', name: 'webpack4to5'},
      remotes: {
        webpack5: 'webpack5'
      },
      shared: ['react', 'react-dom']
    })
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
        // webpack5新增资源引用方式 不需再使用loader
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'src@': path.resolve(__dirname, './src')
    },
    // 按顺序解析，碰到这些后缀名，可以不写
    extensions: ['.tsx', '.ts', '.js']
  },
  // target:['web','es2020'],  // webpack5可以指定版本号
  externals: {
    // 外部化 lodash
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  // 持久缓存，存到了文件系统中，不容易失效，二次构建速度明显提升
  cache: {
    type: 'filesystem',
    // cacheDirectory 默认路径是 node_modules/.cache/webpack
    cacheDirectory: path.resolve(__dirname, '.temp_cache')
  }
};

module.exports = config;