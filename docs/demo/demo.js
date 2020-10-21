/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demo": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demoSrc/demo.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  const app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Application\"]({\n    width: 640,\n    height: 600,\n    backgroundColor: 0x666666\n  });\n  document.body.appendChild(app.view);\n  const g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n  g.beginFill(0xff0000).drawRect(0, 0, 32, 32).endFill();\n  g.hitArea = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"](0, 0, 32, 32);\n  g.position.set(32);\n  g.interactive = true;\n  app.stage.addChild(g);\n  const canvas = document.createElement(\"canvas\");\n  canvas.width = 800;\n  canvas.height = 600;\n  document.body.appendChild(canvas);\n  const transmitter = new _lib__WEBPACK_IMPORTED_MODULE_1__[\"MouseEventTransmitter\"]({\n    transmitTarget: canvas,\n    app: app\n  });\n  canvas.addEventListener(\"mousedown\", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener(\"mouseup\", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener(\"mousemove\", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener(\"wheel\", e => {\n    console.log(e.type);\n  });\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack:///./demoSrc/demo.js?");

/***/ }),

/***/ "./lib/MouseEventTransmitter.js":
/*!**************************************!*\
  !*** ./lib/MouseEventTransmitter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MouseEventTransmitter = void 0;\n\nvar pixi_js_1 = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\nvar MouseEventTransmitter =\n/** @class */\nfunction () {\n  function MouseEventTransmitter(option) {\n    var _this = this;\n    /**\n     * 透過元のエレメントをドラッグ中か否か。\n     * @private\n     */\n\n\n    this.isDragging = false;\n    this.hasStartedDraggingFromTransmitTarget = false;\n    this.isThrottling = false;\n    /**\n     * このフレーム数毎にmouseMoveのヒット処理が行われる。\n     * 例えば2を指定した場合は、1フレームスキップ、1フレーム処理...の順になる。\n     * 1を指定した場合は毎フレーム処理が行われる。\n     * 1以上の整数であること。\n     */\n\n    this.skipMouseMovePerFrame = 2;\n    this.mouseMoveCounter = 0;\n    /**\n     * mousemoveイベントを透過する。\n     * stage上からドラッグが開始された場合、イベントは伝播されない。\n     * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。\n     * @param e\n     */\n\n    this.onMouseMove = function (e) {\n      //連続実行の絞り込み中は処理を中断。\n      if (_this.isThrottling) {\n        return;\n      }\n\n      if (_this.isDragging && !_this.hasStartedDraggingFromTransmitTarget) {\n        return;\n      }\n\n      _this.isThrottling = true;\n\n      if (_this.hasStartedDraggingFromTransmitTarget) {\n        _this.dispatchClone(e);\n\n        return;\n      } //ドラッグ中でない場合は、間引き処理をしながらイベントを上げる\n\n\n      _this.onMouseMoveNonDragging(e);\n    };\n    /**\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n\n\n    this.onMouseDown = function (e) {\n      var isHit = _this.hitTestStage(e);\n\n      _this.isDragging = true;\n      _this.hasStartedDraggingFromTransmitTarget = !isHit; //カンバスにヒットしなければ伝播。\n\n      if (isHit) return;\n\n      _this.dispatchClone(e);\n    };\n    /**\n     * mouseupおよびmouseleaveイベントを透過する。\n     * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。\n     * @param e\n     */\n\n\n    this.onMouseUpLeave = function (e) {\n      _this.dispatchClone(e);\n\n      _this.isDragging = false;\n      _this.hasStartedDraggingFromTransmitTarget = false;\n    };\n    /**\n     * wheelイベントを透過する。\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n\n\n    this.onWheelEvent = function (e) {\n      if (_this.hitTestStage(e)) return;\n\n      _this.dispatchClone(e);\n    };\n\n    this.transmitTarget = option.transmitTarget;\n    this.interactionManager = option.app.renderer.plugins.interaction;\n    this.canvas = option.app.view;\n    this.start();\n    pixi_js_1.Ticker.shared.add(function () {\n      _this.mouseMoveCounter++;\n      _this.mouseMoveCounter %= _this.skipMouseMovePerFrame;\n      _this.isThrottling = false;\n    });\n  }\n\n  MouseEventTransmitter.prototype.start = function () {\n    if (this.isListen) return;\n    this.canvas.addEventListener(\"mousemove\", this.onMouseMove, false);\n    this.canvas.addEventListener(\"mousedown\", this.onMouseDown, false);\n    this.canvas.addEventListener(\"mouseup\", this.onMouseUpLeave, false);\n    this.canvas.addEventListener(\"mouseleave\", this.onMouseUpLeave, false);\n    this.canvas.addEventListener(\"wheel\", this.onWheelEvent, false);\n    this.isListen = true;\n  };\n\n  MouseEventTransmitter.prototype.stop = function () {\n    if (!this.isListen) return;\n    this.canvas.removeEventListener(\"mousemove\", this.onMouseMove);\n    this.canvas.removeEventListener(\"mousedown\", this.onMouseDown);\n    this.canvas.removeEventListener(\"mouseup\", this.onMouseUpLeave);\n    this.canvas.removeEventListener(\"mouseleave\", this.onMouseUpLeave);\n    this.canvas.removeEventListener(\"wheel\", this.onWheelEvent);\n    this.isListen = false;\n  };\n\n  MouseEventTransmitter.prototype.onMouseMoveNonDragging = function (e) {\n    if (this.mouseMoveCounter !== 0) {\n      return;\n    }\n\n    if (this.hitTestStage(e)) return;\n    this.dispatchClone(e);\n  };\n\n  MouseEventTransmitter.prototype.dispatchClone = function (e) {\n    var clone = new e.constructor(e.type, e);\n    this.transmitTarget.dispatchEvent(clone);\n  };\n  /**\n   * ステージに対する当たり判定を行う。\n   * @param e\n   */\n\n\n  MouseEventTransmitter.prototype.hitTestStage = function (e) {\n    return !!this.interactionManager.hitTest(new pixi_js_1.Point(e.offsetX, e.offsetY));\n  };\n\n  return MouseEventTransmitter;\n}();\n\nexports.MouseEventTransmitter = MouseEventTransmitter;\n\n//# sourceURL=webpack:///./lib/MouseEventTransmitter.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__exportStar(__webpack_require__(/*! ./MouseEventTransmitter */ \"./lib/MouseEventTransmitter.js\"), exports);\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ })

/******/ });