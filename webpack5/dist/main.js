(() => { // webpackBootstrap
	var __webpack_modules__ = ([
/* 0 */
((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _c_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _c_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_c_md__WEBPACK_IMPORTED_MODULE_1__);

// import pkg from '../package.json';
// import pkg2 from '../package/sub/path';
// console.log('pkg',pkg);
// console.log('pkg2',pkg2);

const banner = new URL(/* asset import */ __webpack_require__(3), __webpack_require__.b)
console.log(banner)
console.log('index')
console.log((0,_a__WEBPACK_IMPORTED_MODULE_0__.default)(1,2))
console.log((_c_md__WEBPACK_IMPORTED_MODULE_1___default()))


}),
/* 1 */
((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ A
/* harmony export */ });
function A(x, y) {
  return x + y
}

}),
/* 2 */
((module) => {

// Module
var code = "\"<h3 id=\\\"标题\\\">标题</h3>\\n\" htmlStr: \"<h3 id=\\\"标题\\\">标题</h3>\\n\"\nloader source=====> ### 标题";
// Exports
module.exports = code;

}),
/* 3 */
((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0156960873b775578b5.jpg";

})
	]);
	// The module cache
	var __webpack_module_cache__ = {};
	
	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		if(__webpack_module_cache__[moduleId]) {
			return __webpack_module_cache__[moduleId].exports;
		}
		// Create a new module (and put it into the cache)
		var module = __webpack_module_cache__[moduleId] = {
			// no module.id needed
			// no module.loaded needed
			exports: {}
		};
	
		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	
		// Return the exports of the module
		return module.exports;
	}
	
	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = __webpack_modules__;
	
	/* webpack/runtime/compat get default export */
	(() => {
		// getDefaultExport function for compatibility with non-harmony modules
		__webpack_require__.n = (module) => {
			var getter = module && module.__esModule ?
				() => module['default'] :
				() => module;
			__webpack_require__.d(getter, { a: getter });
			return getter;
		};
	})();
	
	/* webpack/runtime/define property getters */
	(() => {
		// define getter functions for harmony exports
		__webpack_require__.d = (exports, definition) => {
			for(var key in definition) {
				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
				}
			}
		};
	})();
	
	/* webpack/runtime/global */
	(() => {
		__webpack_require__.g = (function() {
			if (typeof globalThis === 'object') return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if (typeof window === 'object') return window;
			}
		})();
	})();
	
	/* webpack/runtime/hasOwnProperty shorthand */
	(() => {
		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
	})();
	
	/* webpack/runtime/make namespace object */
	(() => {
		// define __esModule on exports
		__webpack_require__.r = (exports) => {
			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();
	
	/* webpack/runtime/sharing */
	(() => {
		__webpack_require__.S = {};
		var initPromises = {};
		var initTokens = {};
		__webpack_require__.I = (name, initScope) => {
			if(!initScope) initScope = [];
			// handling circular init calls
			var initToken = initTokens[name];
			if(!initToken) initToken = initTokens[name] = {};
			if(initScope.indexOf(initToken) >= 0) return;
			initScope.push(initToken);
			// only runs once
			if(initPromises[name]) return initPromises[name];
			// creates a new share scope if needed
			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
			// runs all init snippets from all modules reachable
			var scope = __webpack_require__.S[name];
			var warn = (msg) => typeof console !== "undefined" && console.warn && console.warn(msg);;
			var uniqueName = "@lihaixing/webpack5";
			var register = (name, version, factory) => {
				var versions = scope[name] = scope[name] || {};
				var activeVersion = versions[version];
				if(!activeVersion || !activeVersion.loaded && uniqueName > activeVersion.from) versions[version] = { get: factory, from: uniqueName };
			};
			var initExternal = (id) => {
				var handleError = (err) => warn("Initialization of sharing external failed: " + err);
				try {
					var module = __webpack_require__(id);
					if(!module) return;
					var initFn = (module) => module && module.init && module.init(__webpack_require__.S[name], initScope)
					if(module.then) return promises.push(module.then(initFn, handleError));
					var initResult = initFn(module);
					if(initResult && initResult.then) return promises.push(initResult.catch(handleError));
				} catch(err) { handleError(err); }
			}
			var promises = [];
			switch(name) {
			}
			if(!promises.length) return initPromises[name] = 1;
			return initPromises[name] = Promise.all(promises).then(() => initPromises[name] = 1);
		};
	})();
	
	/* webpack/runtime/publicPath */
	(() => {
		var scriptUrl;
		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
		var document = __webpack_require__.g.document;
		if (!scriptUrl && document) {
			if (document.currentScript)
				scriptUrl = document.currentScript.src
			if (!scriptUrl) {
				var scripts = document.getElementsByTagName("script");
				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
			}
		}
		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
		__webpack_require__.p = scriptUrl;
	})();
	
	/* webpack/runtime/jsonp chunk loading */
	(() => {
		__webpack_require__.b = document.baseURI || self.location.href;
		
		// object to store loaded and loading chunks
		// undefined = chunk not loaded, null = chunk preloaded/prefetched
		// Promise = chunk loading, 0 = chunk loaded
		var installedChunks = {
			0: 0
		};
		
		
		// no chunk on demand loading
		
		// no prefetching
		
		// no preloaded
		
		// no HMR
		
		// no HMR manifest
		
		// no deferred startup
		
		// no jsonp function
	})();
	
	// startup
	// Load entry module
	__webpack_require__(0);
	// This entry module used 'exports' so it can't be inlined
})()
;