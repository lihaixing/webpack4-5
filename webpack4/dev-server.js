const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

config.devtool = 'inline-source-map';
config.mode = 'development';
config.plugins.push(new HtmlWebpackPlugin({
  title: '管理输出'
}));

const options = {
  // webpack-dev-server does not work with webpack-cli v4
  // webpack-cli v4 with webpack serve
  contentBase: './dist',
  open: true,
  hot: true, // 模块热更新 loader会自动处理热更新，官网配置比较多，也说明了这一点
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8080, 'localhost', () => {
  console.log('dev server listening on port 5000');
});