(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "J6RI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{\n  background: rgb(119, 0, 255);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "OMi8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LboF");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("J6RI");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "dSPy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
function printMe() {
  console.log('I get called from print.js!');
}

/***/ }),

/***/ "tjUo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dSPy");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OMi8");

// import { cube } from './math.js';


Object(_print_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

// 其它 webpackPreload/webpackPrefetch
__webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, "RNo3", 7));
if (true) {
  console.log('Looks like we are in development mode!');
}

async function getComponent() {
  // 异步加载  还需要 Babel 这样的预处理器和 Syntax Dynamic Import Babel Plugin。
  // https://babel.docschina.org/docs/en/babel-plugin-syntax-dynamic-import/#installation
  // default 原因 从 webpack v4 开始，在 import CommonJS 模块时，不会再将导入模块解析为 module.exports 的值，而是为 CommonJS 模块创建一个 artificial namespace object(人工命名空
  var element = document.createElement('div');
  const { default: _ } = await __webpack_require__.e(/* import() | lodash */ 2).then(__webpack_require__.t.bind(null, "LvDl", 7));
  console.log('await')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})

/***/ })

},[["tjUo",0,2]],[3]]);