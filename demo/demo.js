/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/dist/esm/pixi.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  const app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application({\n    width: 640,\n    height: 600,\n    backgroundColor: 0x666666\n  });\n  document.body.appendChild(app.view);\n  const g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics();\n  g.beginFill(0xff0000).drawRect(0, 0, 32, 32).endFill();\n  g.hitArea = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Rectangle(0, 0, 32, 32);\n  g.position.set(32);\n  g.interactive = true;\n  app.stage.addChild(g);\n  const canvas = document.createElement(\"canvas\");\n  canvas.width = 800;\n  canvas.height = 600;\n  document.body.appendChild(canvas);\n  const transmitter = new _lib__WEBPACK_IMPORTED_MODULE_1__.MouseEventTransmitter({\n    transmitTarget: canvas,\n    app: app\n  });\n  canvas.addEventListener(\"mousedown\", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener(\"mouseup\", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener(\"mousemove\", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener(\"wheel\", e => {\n    console.log(e.type);\n  });\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack://pixijs-mouse-event-transmitter/./demoSrc/demo.js?");

/***/ }),

/***/ "./lib/MouseEventTransmitter.js":
/*!**************************************!*\
  !*** ./lib/MouseEventTransmitter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MouseEventTransmitter = void 0;\n\nvar pixi_js_1 = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/dist/esm/pixi.js\");\n\nvar MouseEventTransmitter =\n/** @class */\nfunction () {\n  function MouseEventTransmitter(option) {\n    var _this = this;\n    /**\n     * 透過元のエレメントをドラッグ中か否か。\n     * @private\n     */\n\n\n    this.isDragging = false;\n    this.hasStartedDraggingFromTransmitTarget = false;\n    this.isThrottling = false;\n    /**\n     * このフレーム数毎にmouseMoveのヒット処理が行われる。\n     * 例えば2を指定した場合は、1フレームスキップ、1フレーム処理...の順になる。\n     * 1を指定した場合は毎フレーム処理が行われる。\n     * 1以上の整数であること。\n     */\n\n    this.skipMouseMovePerFrame = 2;\n    this.mouseMoveCounter = 0;\n    /**\n     * mousemoveイベントを透過する。\n     * stage上からドラッグが開始された場合、イベントは伝播されない。\n     * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。\n     * @param e\n     */\n\n    this.onMouseMove = function (e) {\n      //連続実行の絞り込み中は処理を中断。\n      if (_this.isThrottling) {\n        return;\n      }\n\n      if (_this.isDragging && !_this.hasStartedDraggingFromTransmitTarget) {\n        return;\n      }\n\n      _this.isThrottling = true;\n\n      if (_this.hasStartedDraggingFromTransmitTarget) {\n        _this.dispatchClone(e);\n\n        return;\n      } //ドラッグ中でない場合は、間引き処理をしながらイベントを上げる\n\n\n      _this.onMouseMoveNonDragging(e);\n    };\n    /**\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n\n\n    this.onMouseDown = function (e) {\n      var isHit = _this.hitTestStage(e);\n\n      _this.isDragging = true;\n      _this.hasStartedDraggingFromTransmitTarget = !isHit; //カンバスにヒットしなければ伝播。\n\n      if (isHit) return;\n\n      _this.dispatchClone(e);\n    };\n    /**\n     * mouseupおよびmouseleaveイベントを透過する。\n     * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。\n     * @param e\n     */\n\n\n    this.onMouseUpLeave = function (e) {\n      _this.dispatchClone(e);\n\n      _this.isDragging = false;\n      _this.hasStartedDraggingFromTransmitTarget = false;\n    };\n    /**\n     * wheelイベントを透過する。\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n\n\n    this.onWheelEvent = function (e) {\n      if (_this.hitTestStage(e)) return;\n\n      _this.dispatchClone(e);\n    };\n\n    this.transmitTarget = option.transmitTarget;\n    this.interactionManager = option.app.renderer.plugins.interaction;\n    this.canvas = option.app.view;\n    this.start();\n    pixi_js_1.Ticker.shared.add(function () {\n      _this.mouseMoveCounter++;\n      _this.mouseMoveCounter %= _this.skipMouseMovePerFrame;\n      _this.isThrottling = false;\n    });\n  }\n\n  MouseEventTransmitter.prototype.start = function () {\n    if (this.isListen) return;\n    this.canvas.addEventListener(\"mousemove\", this.onMouseMove, false);\n    this.canvas.addEventListener(\"mousedown\", this.onMouseDown, false);\n    this.canvas.addEventListener(\"mouseup\", this.onMouseUpLeave, false);\n    this.canvas.addEventListener(\"mouseleave\", this.onMouseUpLeave, false);\n    this.canvas.addEventListener(\"wheel\", this.onWheelEvent, false);\n    this.isListen = true;\n  };\n\n  MouseEventTransmitter.prototype.stop = function () {\n    if (!this.isListen) return;\n    this.canvas.removeEventListener(\"mousemove\", this.onMouseMove);\n    this.canvas.removeEventListener(\"mousedown\", this.onMouseDown);\n    this.canvas.removeEventListener(\"mouseup\", this.onMouseUpLeave);\n    this.canvas.removeEventListener(\"mouseleave\", this.onMouseUpLeave);\n    this.canvas.removeEventListener(\"wheel\", this.onWheelEvent);\n    this.isListen = false;\n  };\n\n  MouseEventTransmitter.prototype.onMouseMoveNonDragging = function (e) {\n    if (this.mouseMoveCounter !== 0) {\n      return;\n    }\n\n    if (this.hitTestStage(e)) return;\n    this.dispatchClone(e);\n  };\n\n  MouseEventTransmitter.prototype.dispatchClone = function (e) {\n    var clone = new e.constructor(e.type, e);\n    this.transmitTarget.dispatchEvent(clone);\n  };\n  /**\n   * ステージに対する当たり判定を行う。\n   * @param e\n   */\n\n\n  MouseEventTransmitter.prototype.hitTestStage = function (e) {\n    return !!this.interactionManager.hitTest(new pixi_js_1.Point(e.offsetX, e.offsetY));\n  };\n\n  return MouseEventTransmitter;\n}();\n\nexports.MouseEventTransmitter = MouseEventTransmitter;\n\n//# sourceURL=webpack://pixijs-mouse-event-transmitter/./lib/MouseEventTransmitter.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./MouseEventTransmitter */ \"./lib/MouseEventTransmitter.js\"), exports);\n\n//# sourceURL=webpack://pixijs-mouse-event-transmitter/./lib/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpixijs_mouse_event_transmitter"] = self["webpackChunkpixijs_mouse_event_transmitter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./demoSrc/demo.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;