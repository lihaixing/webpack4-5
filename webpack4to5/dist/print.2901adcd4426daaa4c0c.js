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
return (self["webpackChunkwebpackNumbers"] = self["webpackChunkwebpackNumbers"] || []).push([[1],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _math2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=> {
    console.log('I get called from print.js');
});
// hello world
console.log((0,_math__WEBPACK_IMPORTED_MODULE_0__.square)(3));
console.log(_math__WEBPACK_IMPORTED_MODULE_0__.a);

console.log((0,_math2__WEBPACK_IMPORTED_MODULE_1__.square2)(2));
console.log(_math2__WEBPACK_IMPORTED_MODULE_1__.a2);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "square": () => /* binding */ square,
/* harmony export */   "cube": () => /* binding */ cube,
/* harmony export */   "a": () => /* binding */ a,
/* harmony export */   "b": () => /* binding */ b,
/* harmony export */   "square2": () => /* reexport safe */ _math2__WEBPACK_IMPORTED_MODULE_0__.square2,
/* harmony export */   "a2": () => /* reexport safe */ _math2__WEBPACK_IMPORTED_MODULE_0__.a2
/* harmony export */ });
/* harmony import */ var _math2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

const a=1;
const b=2;




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "square2": () => /* binding */ square2,
/* harmony export */   "cube2": () => /* binding */ cube2,
/* harmony export */   "a2": () => /* binding */ a2,
/* harmony export */   "b2": () => /* binding */ b2
/* harmony export */ });
function square2(x) {
    return x * x;
}

function cube2(x) {
    return x * x * x;
}
console.log(cube2(8))

const a2=1;
const b2=2;

/***/ })
],
0,[[0,2]]]);
});