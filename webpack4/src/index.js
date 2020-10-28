import printMe from './print.js';
// import { cube } from './math.js';
import './style.css'

printMe()

// 其它 webpackPreload/webpackPrefetch
import(/* webpackPrefetch: true */ './loadPrefetchModule');
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

async function getComponent() {
  // 异步加载  还需要 Babel 这样的预处理器和 Syntax Dynamic Import Babel Plugin。
  // https://babel.docschina.org/docs/en/babel-plugin-syntax-dynamic-import/#installation
  // default 原因 从 webpack v4 开始，在 import CommonJS 模块时，不会再将导入模块解析为 module.exports 的值，而是为 CommonJS 模块创建一个 artificial namespace object(人工命名空
  var element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  console.log('await')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})