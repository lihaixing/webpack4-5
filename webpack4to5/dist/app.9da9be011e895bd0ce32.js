(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(self, function() {
return (self["webpackChunkwebpackNumbers"] = self["webpackChunkwebpackNumbers"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var src_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var webpack5_a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var webpack5_a__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack5_a__WEBPACK_IMPORTED_MODULE_1__);




// const banner:any = new URL('./banner.jpg',import.meta.url);
console.log(src_banner_jpg__WEBPACK_IMPORTED_MODULE_2__);
console.log('style', src_style_scss__WEBPACK_IMPORTED_MODULE_3__.default);
var IndexView = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('你好好'), txt = _a[0], setText = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setText('hello world');
        console.log('add===>', webpack5_a__WEBPACK_IMPORTED_MODULE_1___default()(1, 3));
        // a b
        var b = 1;
        console.log(b);
    }, []);
    var onTouchPic = function (e) {
        e.preventDefault();
        if ([1, 2, 3].includes(3)) {
            console.log(145);
        }
        console.log(Array.from(new Set([1, 2, 4, 5])));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'loading' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, txt),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: src_banner_jpg__WEBPACK_IMPORTED_MODULE_2__, alt: "", onClick: onTouchPic })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexView);


/***/ }),
/* 8 */,
/* 9 */
/***/ ((module) => {

"use strict";
module.exports = webpack5;

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0156960873b775578b5.jpg";

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 12 */,
/* 13 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loading {\n  background: red;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
],
0,[[7,5,3,4]]]);
});