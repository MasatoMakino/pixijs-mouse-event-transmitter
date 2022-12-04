(()=>{"use strict";var __webpack_modules__={4167:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9535);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  const app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__/* .Application */ .MxU({\n    width: 640,\n    height: 600,\n    backgroundColor: 0x666666\n  });\n  document.body.appendChild(app.view);\n  const g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__/* .Graphics */ .TCu();\n  g.beginFill(0xff0000).drawRect(0, 0, 32, 32).endFill();\n  g.hitArea = new pixi_js__WEBPACK_IMPORTED_MODULE_0__/* .Rectangle */ .AeJ(0, 0, 32, 32);\n  g.position.set(32);\n  g.interactive = true;\n  app.stage.addChild(g);\n  const canvas = document.createElement("canvas");\n  canvas.width = 800;\n  canvas.height = 600;\n  document.body.appendChild(canvas);\n  const transmitter = new _lib__WEBPACK_IMPORTED_MODULE_1__.MouseEventTransmitter({\n    transmitTarget: canvas,\n    app: app\n  });\n  canvas.addEventListener("mousedown", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener("mouseup", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener("mousemove", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener("wheel", e => {\n    console.log(e.type);\n  });\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== "loading") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDE2Ny5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUksbUJBQW1CLEdBQUcsTUFBTTtFQUNoQyxNQUFNQyxHQUFHLEdBQUcsSUFBSUwsMkRBQUosQ0FBZ0I7SUFDMUJNLEtBQUssRUFBRSxHQURtQjtJQUUxQkMsTUFBTSxFQUFFLEdBRmtCO0lBRzFCQyxlQUFlLEVBQUU7RUFIUyxDQUFoQixDQUFaO0VBS0FDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCTixHQUFHLENBQUNPLElBQTlCO0VBQ0EsTUFBTUMsQ0FBQyxHQUFHLElBQUlaLHdEQUFKLEVBQVY7RUFDQVksQ0FBQyxDQUFDQyxTQUFGLENBQVksUUFBWixFQUFzQkMsUUFBdEIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsRUFBckMsRUFBeUMsRUFBekMsRUFBNkNDLE9BQTdDO0VBQ0FILENBQUMsQ0FBQ0ksT0FBRixHQUFZLElBQUlmLHlEQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixFQUFwQixFQUF3QixFQUF4QixDQUFaO0VBQ0FXLENBQUMsQ0FBQ0ssUUFBRixDQUFXQyxHQUFYLENBQWUsRUFBZjtFQUNBTixDQUFDLENBQUNPLFdBQUYsR0FBZ0IsSUFBaEI7RUFFQWYsR0FBRyxDQUFDZ0IsS0FBSixDQUFVQyxRQUFWLENBQW1CVCxDQUFuQjtFQUVBLE1BQU1VLE1BQU0sR0FBR2QsUUFBUSxDQUFDZSxhQUFULENBQXVCLFFBQXZCLENBQWY7RUFDQUQsTUFBTSxDQUFDakIsS0FBUCxHQUFlLEdBQWY7RUFDQWlCLE1BQU0sQ0FBQ2hCLE1BQVAsR0FBZ0IsR0FBaEI7RUFDQUUsUUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEJZLE1BQTFCO0VBRUEsTUFBTUUsV0FBVyxHQUFHLElBQUl0Qix1REFBSixDQUEwQjtJQUM1Q3VCLGNBQWMsRUFBRUgsTUFENEI7SUFFNUNsQixHQUFHLEVBQUVBO0VBRnVDLENBQTFCLENBQXBCO0VBS0FrQixNQUFNLENBQUNJLGdCQUFQLENBQXdCLFdBQXhCLEVBQXNDQyxDQUFELElBQU87SUFDMUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLElBQWQ7RUFDRCxDQUZEO0VBR0FSLE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBb0NDLENBQUQsSUFBTztJQUN4Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0csSUFBZDtFQUNELENBRkQ7RUFHQVIsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixXQUF4QixFQUFzQ0MsQ0FBRCxJQUFPO0lBQzFDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxJQUFkO0VBQ0QsQ0FGRDtFQUdBUixNQUFNLENBQUNJLGdCQUFQLENBQXdCLE9BQXhCLEVBQWtDQyxDQUFELElBQU87SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLElBQWQ7RUFDRCxDQUZEO0FBR0QsQ0FyQ0Q7QUF1Q0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFJdEIsUUFBUSxDQUFDdUIsVUFBVCxLQUF3QixTQUE1QixFQUF1QztFQUNyQzVCLG1CQUFtQjtBQUNwQixDQUZELE1BRU87RUFDTEssUUFBUSxDQUFDa0IsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDdkIsbUJBQTlDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1tb3VzZS1ldmVudC10cmFuc21pdHRlci8uL2RlbW9TcmMvZGVtb19ldmVudC5qcz81ZWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uLCBHcmFwaGljcywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnRUcmFuc21pdHRlciB9IGZyb20gXCIuLi9saWJcIjtcbi8qKlxuICogRE9NQ29udGVudExvYWRlZOW+jOOBruWIneacn+WMluWHpueQhuOAglxuICog44OH44Oi44Gr5b+F6KaB44Gq44OR44O844OE44KS5LiA5byP5Yid5pyf5YyW44GZ44KL44CCXG4gKi9cbmNvbnN0IG9uRG9tQ29udGVudHNMb2FkZWQgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbih7XG4gICAgd2lkdGg6IDY0MCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4NjY2NjY2LFxuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XG4gIGNvbnN0IGcgPSBuZXcgR3JhcGhpY3MoKTtcbiAgZy5iZWdpbkZpbGwoMHhmZjAwMDApLmRyYXdSZWN0KDAsIDAsIDMyLCAzMikuZW5kRmlsbCgpO1xuICBnLmhpdEFyZWEgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIDMyLCAzMik7XG4gIGcucG9zaXRpb24uc2V0KDMyKTtcbiAgZy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cbiAgYXBwLnN0YWdlLmFkZENoaWxkKGcpO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgY2FudmFzLmhlaWdodCA9IDYwMDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIGNvbnN0IHRyYW5zbWl0dGVyID0gbmV3IE1vdXNlRXZlbnRUcmFuc21pdHRlcih7XG4gICAgdHJhbnNtaXRUYXJnZXQ6IGNhbnZhcyxcbiAgICBhcHA6IGFwcCxcbiAgfSk7XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xuICB9KTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50eXBlKTtcbiAgfSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50eXBlKTtcbiAgfSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRE9NQ29udGVudExvYWRlZOS7pemZjeOBq+WIneacn+WMluWHpueQhuOCkuWun+ihjOOBmeOCi1xuICovXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgb25Eb21Db250ZW50c0xvYWRlZCgpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgb25Eb21Db250ZW50c0xvYWRlZCk7XG59XG4iXSwibmFtZXMiOlsiQXBwbGljYXRpb24iLCJHcmFwaGljcyIsIlJlY3RhbmdsZSIsIk1vdXNlRXZlbnRUcmFuc21pdHRlciIsIm9uRG9tQ29udGVudHNMb2FkZWQiLCJhcHAiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsImciLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsImVuZEZpbGwiLCJoaXRBcmVhIiwicG9zaXRpb24iLCJzZXQiLCJpbnRlcmFjdGl2ZSIsInN0YWdlIiwiYWRkQ2hpbGQiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNtaXR0ZXIiLCJ0cmFuc21pdFRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4167\n')},5921:(__unused_webpack_module,exports,__webpack_require__)=>{eval('\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports.MouseEventTransmitter = void 0;\n\nvar pixi_js_1 = __webpack_require__(3157);\n\nvar MouseEventTransmitter =\n/** @class */\nfunction () {\n  function MouseEventTransmitter(option) {\n    var _this = this;\n    /**\n     * 透過元のエレメントをドラッグ中か否か。\n     * @private\n     */\n\n\n    this.isDragging = false;\n    this.hasStartedDraggingFromTransmitTarget = false;\n    this.isThrottling = false;\n    /**\n     * このフレーム数毎にmouseMoveのヒット処理が行われる。\n     * 例えば2を指定した場合は、1フレームスキップ、1フレーム処理...の順になる。\n     * 1を指定した場合は毎フレーム処理が行われる。\n     * 1以上の整数であること。\n     */\n\n    this.skipMouseMovePerFrame = 2;\n    this.mouseMoveCounter = 0;\n    /**\n     * mousemoveイベントを透過する。\n     * stage上からドラッグが開始された場合、イベントは伝播されない。\n     * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。\n     * @param e\n     */\n\n    this.onMouseMove = function (e) {\n      //連続実行の絞り込み中は処理を中断。\n      if (_this.isThrottling) {\n        return;\n      }\n\n      if (_this.isDragging && !_this.hasStartedDraggingFromTransmitTarget) {\n        return;\n      }\n\n      _this.isThrottling = true;\n\n      if (_this.hasStartedDraggingFromTransmitTarget) {\n        _this.dispatchClone(e);\n\n        return;\n      } //ドラッグ中でない場合は、間引き処理をしながらイベントを上げる\n\n\n      _this.onMouseMoveNonDragging(e);\n    };\n    /**\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n\n\n    this.onMouseDown = function (e) {\n      var isHit = _this.hitTestStage(e);\n\n      _this.isDragging = true;\n      _this.hasStartedDraggingFromTransmitTarget = !isHit; //カンバスにヒットしなければ伝播。\n\n      if (isHit) return;\n\n      _this.dispatchClone(e);\n    };\n    /**\n     * mouseupおよびmouseleaveイベントを透過する。\n     * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。\n     * @param e\n     */\n\n\n    this.onMouseUpLeave = function (e) {\n      _this.dispatchClone(e);\n\n      _this.isDragging = false;\n      _this.hasStartedDraggingFromTransmitTarget = false;\n    };\n    /**\n     * wheelイベントを透過する。\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n\n\n    this.onWheelEvent = function (e) {\n      if (_this.hitTestStage(e)) return;\n\n      _this.dispatchClone(e);\n    };\n\n    this.transmitTarget = option.transmitTarget;\n    this.rootBoundary = option.app.renderer.events.rootBoundary;\n    this.canvas = option.app.view;\n    this.start();\n    pixi_js_1.Ticker.shared.add(function () {\n      _this.mouseMoveCounter++;\n      _this.mouseMoveCounter %= _this.skipMouseMovePerFrame;\n      _this.isThrottling = false;\n    });\n  }\n\n  MouseEventTransmitter.prototype.start = function () {\n    if (this.isListen) return;\n    this.canvas.addEventListener("mousemove", this.onMouseMove, false);\n    this.canvas.addEventListener("mousedown", this.onMouseDown, false);\n    this.canvas.addEventListener("mouseup", this.onMouseUpLeave, false);\n    this.canvas.addEventListener("mouseleave", this.onMouseUpLeave, false);\n    this.canvas.addEventListener("wheel", this.onWheelEvent, false);\n    this.isListen = true;\n  };\n\n  MouseEventTransmitter.prototype.stop = function () {\n    if (!this.isListen) return;\n    this.canvas.removeEventListener("mousemove", this.onMouseMove);\n    this.canvas.removeEventListener("mousedown", this.onMouseDown);\n    this.canvas.removeEventListener("mouseup", this.onMouseUpLeave);\n    this.canvas.removeEventListener("mouseleave", this.onMouseUpLeave);\n    this.canvas.removeEventListener("wheel", this.onWheelEvent);\n    this.isListen = false;\n  };\n\n  MouseEventTransmitter.prototype.onMouseMoveNonDragging = function (e) {\n    if (this.mouseMoveCounter !== 0) {\n      return;\n    }\n\n    if (this.hitTestStage(e)) return;\n    this.dispatchClone(e);\n  };\n\n  MouseEventTransmitter.prototype.dispatchClone = function (e) {\n    var clone = new e.constructor(e.type, e);\n    this.transmitTarget.dispatchEvent(clone);\n  };\n  /**\n   * ステージに対する当たり判定を行う。\n   * @param e\n   */\n\n\n  MouseEventTransmitter.prototype.hitTestStage = function (e) {\n    return !!this.rootBoundary.hitTest(e.offsetX, e.offsetY);\n  };\n\n  return MouseEventTransmitter;\n}();\n\nexports.MouseEventTransmitter = MouseEventTransmitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztFQVVBL0IscUJBQXFCLENBQUM4QixTQUF0QixDQUFnQ2pCLHNCQUFoQyxHQUF5RCxVQUFVRixDQUFWLEVBQWE7SUFDbEUsSUFBSSxLQUFLRixnQkFBTCxLQUEwQixDQUE5QixFQUFpQztNQUM3QjtJQUNIOztJQUNELElBQUksS0FBS08sWUFBTCxDQUFrQkwsQ0FBbEIsQ0FBSixFQUNJO0lBQ0osS0FBS0MsYUFBTCxDQUFtQkQsQ0FBbkI7RUFDSCxDQVBEOztFQVFBWCxxQkFBcUIsQ0FBQzhCLFNBQXRCLENBQWdDbEIsYUFBaEMsR0FBZ0QsVUFBVUQsQ0FBVixFQUFhO0lBQ3pELElBQUl3QixLQUFLLEdBQUcsSUFBSXhCLENBQUMsQ0FBQ3lCLFdBQU4sQ0FBa0J6QixDQUFDLENBQUMwQixJQUFwQixFQUEwQjFCLENBQTFCLENBQVo7SUFDQSxLQUFLUSxjQUFMLENBQW9CbUIsYUFBcEIsQ0FBa0NILEtBQWxDO0VBQ0gsQ0FIRDtFQUlBO0FBQ0o7QUFDQTtBQUNBOzs7RUFDSW5DLHFCQUFxQixDQUFDOEIsU0FBdEIsQ0FBZ0NkLFlBQWhDLEdBQStDLFVBQVVMLENBQVYsRUFBYTtJQUN4RCxPQUFPLENBQUMsQ0FBQyxLQUFLUyxZQUFMLENBQWtCbUIsT0FBbEIsQ0FBMEI1QixDQUFDLENBQUM2QixPQUE1QixFQUFxQzdCLENBQUMsQ0FBQzhCLE9BQXZDLENBQVQ7RUFDSCxDQUZEOztFQUdBLE9BQU96QyxxQkFBUDtBQUNILENBM0gwQyxFQUEzQzs7QUE0SEFGLDZCQUFBLEdBQWdDRSxxQkFBaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1tb3VzZS1ldmVudC10cmFuc21pdHRlci8uL2xpYi9Nb3VzZUV2ZW50VHJhbnNtaXR0ZXIuanM/MmZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTW91c2VFdmVudFRyYW5zbWl0dGVyID0gdm9pZCAwO1xudmFyIHBpeGlfanNfMSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xudmFyIE1vdXNlRXZlbnRUcmFuc21pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb3VzZUV2ZW50VHJhbnNtaXR0ZXIob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpgI/pgY7lhYPjga7jgqjjg6zjg6Hjg7Pjg4jjgpLjg4njg6njg4PjgrDkuK3jgYvlkKbjgYvjgIJcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc1N0YXJ0ZWREcmFnZ2luZ0Zyb21UcmFuc21pdFRhcmdldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGhyb3R0bGluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICog44GT44Gu44OV44Os44O844Og5pWw5q+O44GrbW91c2VNb3Zl44Gu44OS44OD44OI5Yem55CG44GM6KGM44KP44KM44KL44CCXG4gICAgICAgICAqIOS+i+OBiOOBsDLjgpLmjIflrprjgZfjgZ/loLTlkIjjga/jgIEx44OV44Os44O844Og44K544Kt44OD44OX44CBMeODleODrOODvOODoOWHpueQhi4uLuOBrumghuOBq+OBquOCi+OAglxuICAgICAgICAgKiAx44KS5oyH5a6a44GX44Gf5aC05ZCI44Gv5q+O44OV44Os44O844Og5Yem55CG44GM6KGM44KP44KM44KL44CCXG4gICAgICAgICAqIDHku6XkuIrjga7mlbTmlbDjgafjgYLjgovjgZPjgajjgIJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2tpcE1vdXNlTW92ZVBlckZyYW1lID0gMjtcbiAgICAgICAgdGhpcy5tb3VzZU1vdmVDb3VudGVyID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1vdXNlbW92ZeOCpOODmeODs+ODiOOCkumAj+mBjuOBmeOCi+OAglxuICAgICAgICAgKiBzdGFnZeS4iuOBi+OCieODieODqeODg+OCsOOBjOmWi+Wni+OBleOCjOOBn+WgtOWQiOOAgeOCpOODmeODs+ODiOOBr+S8neaSreOBleOCjOOBquOBhOOAglxuICAgICAgICAgKiDkuIvlsaTjga5ET03jgYvjgonjg4njg6njg4PjgrDjgYzplovlp4vjgZXjgozjgZ/loLTlkIjjgIFzdGFnZeS4iuOBq+ODneOCpOODs+OCv+OBjOOBi+OBi+OBo+OBpuOCguOCpOODmeODs+ODiOOBruS8neaSreOCkue2mee2muOBmeOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvL+mAo+e2muWun+ihjOOBrue1nuOCiui+vOOBv+S4reOBr+WHpueQhuOCkuS4reaWreOAglxuICAgICAgICAgICAgaWYgKF90aGlzLmlzVGhyb3R0bGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfdGhpcy5pc0RyYWdnaW5nICYmICFfdGhpcy5oYXNTdGFydGVkRHJhZ2dpbmdGcm9tVHJhbnNtaXRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5pc1Rocm90dGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKF90aGlzLmhhc1N0YXJ0ZWREcmFnZ2luZ0Zyb21UcmFuc21pdFRhcmdldCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc3BhdGNoQ2xvbmUoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy/jg4njg6njg4PjgrDkuK3jgafjgarjgYTloLTlkIjjga/jgIHplpPlvJXjgY3lh6bnkIbjgpLjgZfjgarjgYzjgonjgqTjg5njg7Pjg4jjgpLkuIrjgZLjgotcbiAgICAgICAgICAgIF90aGlzLm9uTW91c2VNb3ZlTm9uRHJhZ2dpbmcoZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzdGFnZeOBq+ODkuODg+ODiOOBl+OBn+WgtOWQiOOBr+S8neaSreOBjOatouOBvuOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgaXNIaXQgPSBfdGhpcy5oaXRUZXN0U3RhZ2UoZSk7XG4gICAgICAgICAgICBfdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmhhc1N0YXJ0ZWREcmFnZ2luZ0Zyb21UcmFuc21pdFRhcmdldCA9ICFpc0hpdDtcbiAgICAgICAgICAgIC8v44Kr44Oz44OQ44K544Gr44OS44OD44OI44GX44Gq44GR44KM44Gw5Lyd5pKt44CCXG4gICAgICAgICAgICBpZiAoaXNIaXQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgX3RoaXMuZGlzcGF0Y2hDbG9uZShlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1vdXNldXDjgYrjgojjgbNtb3VzZWxlYXZl44Kk44OZ44Oz44OI44KS6YCP6YGO44GZ44KL44CCXG4gICAgICAgICAqIOOBk+OBruS6jOOBpOOBruOCpOODmeODs+ODiOOBr3N0YWdl44G444Gu44OS44OD44OI44Gr44GL44GL44KP44KJ44Ga44CB5b+F44Ga5Lyd5pKt44GV44KM44KL44CCXG4gICAgICAgICAqIEBwYXJhbSBlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uTW91c2VVcExlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc3BhdGNoQ2xvbmUoZSk7XG4gICAgICAgICAgICBfdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5oYXNTdGFydGVkRHJhZ2dpbmdGcm9tVHJhbnNtaXRUYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHdoZWVs44Kk44OZ44Oz44OI44KS6YCP6YGO44GZ44KL44CCXG4gICAgICAgICAqIHN0YWdl44Gr44OS44OD44OI44GX44Gf5aC05ZCI44Gv5Lyd5pKt44GM5q2i44G+44KL44CCXG4gICAgICAgICAqIEBwYXJhbSBlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uV2hlZWxFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaGl0VGVzdFN0YWdlKGUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIF90aGlzLmRpc3BhdGNoQ2xvbmUoZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNtaXRUYXJnZXQgPSBvcHRpb24udHJhbnNtaXRUYXJnZXQ7XG4gICAgICAgIHRoaXMucm9vdEJvdW5kYXJ5ID0gb3B0aW9uLmFwcC5yZW5kZXJlci5ldmVudHMucm9vdEJvdW5kYXJ5O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG9wdGlvbi5hcHAudmlldztcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICBwaXhpX2pzXzEuVGlja2VyLnNoYXJlZC5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubW91c2VNb3ZlQ291bnRlcisrO1xuICAgICAgICAgICAgX3RoaXMubW91c2VNb3ZlQ291bnRlciAlPSBfdGhpcy5za2lwTW91c2VNb3ZlUGVyRnJhbWU7XG4gICAgICAgICAgICBfdGhpcy5pc1Rocm90dGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXZlbnRUcmFuc21pdHRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTGlzdGVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwTGVhdmUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbk1vdXNlVXBMZWF2ZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5vbldoZWVsRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pc0xpc3RlbiA9IHRydWU7XG4gICAgfTtcbiAgICBNb3VzZUV2ZW50VHJhbnNtaXR0ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0xpc3RlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXBMZWF2ZSk7XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZVVwTGVhdmUpO1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5vbldoZWVsRXZlbnQpO1xuICAgICAgICB0aGlzLmlzTGlzdGVuID0gZmFsc2U7XG4gICAgfTtcbiAgICBNb3VzZUV2ZW50VHJhbnNtaXR0ZXIucHJvdG90eXBlLm9uTW91c2VNb3ZlTm9uRHJhZ2dpbmcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5tb3VzZU1vdmVDb3VudGVyICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGl0VGVzdFN0YWdlKGUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ2xvbmUoZSk7XG4gICAgfTtcbiAgICBNb3VzZUV2ZW50VHJhbnNtaXR0ZXIucHJvdG90eXBlLmRpc3BhdGNoQ2xvbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY2xvbmUgPSBuZXcgZS5jb25zdHJ1Y3RvcihlLnR5cGUsIGUpO1xuICAgICAgICB0aGlzLnRyYW5zbWl0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoY2xvbmUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog44K544OG44O844K444Gr5a++44GZ44KL5b2T44Gf44KK5Yik5a6a44KS6KGM44GG44CCXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBNb3VzZUV2ZW50VHJhbnNtaXR0ZXIucHJvdG90eXBlLmhpdFRlc3RTdGFnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucm9vdEJvdW5kYXJ5LmhpdFRlc3QoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgIH07XG4gICAgcmV0dXJuIE1vdXNlRXZlbnRUcmFuc21pdHRlcjtcbn0oKSk7XG5leHBvcnRzLk1vdXNlRXZlbnRUcmFuc21pdHRlciA9IE1vdXNlRXZlbnRUcmFuc21pdHRlcjtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIk1vdXNlRXZlbnRUcmFuc21pdHRlciIsInBpeGlfanNfMSIsInJlcXVpcmUiLCJvcHRpb24iLCJfdGhpcyIsImlzRHJhZ2dpbmciLCJoYXNTdGFydGVkRHJhZ2dpbmdGcm9tVHJhbnNtaXRUYXJnZXQiLCJpc1Rocm90dGxpbmciLCJza2lwTW91c2VNb3ZlUGVyRnJhbWUiLCJtb3VzZU1vdmVDb3VudGVyIiwib25Nb3VzZU1vdmUiLCJlIiwiZGlzcGF0Y2hDbG9uZSIsIm9uTW91c2VNb3ZlTm9uRHJhZ2dpbmciLCJvbk1vdXNlRG93biIsImlzSGl0IiwiaGl0VGVzdFN0YWdlIiwib25Nb3VzZVVwTGVhdmUiLCJvbldoZWVsRXZlbnQiLCJ0cmFuc21pdFRhcmdldCIsInJvb3RCb3VuZGFyeSIsImFwcCIsInJlbmRlcmVyIiwiZXZlbnRzIiwiY2FudmFzIiwidmlldyIsInN0YXJ0IiwiVGlja2VyIiwic2hhcmVkIiwiYWRkIiwicHJvdG90eXBlIiwiaXNMaXN0ZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9uZSIsImNvbnN0cnVjdG9yIiwidHlwZSIsImRpc3BhdGNoRXZlbnQiLCJoaXRUZXN0Iiwib2Zmc2V0WCIsIm9mZnNldFkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5921\n')},678:function(__unused_webpack_module,exports,__webpack_require__){eval('\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  var desc = Object.getOwnPropertyDescriptor(m, k);\n\n  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n    desc = {\n      enumerable: true,\n      get: function () {\n        return m[k];\n      }\n    };\n  }\n\n  Object.defineProperty(o, k2, desc);\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(5921), exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjc4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7RUFDNUYsSUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7RUFDdEIsSUFBSUcsSUFBSSxHQUFHUCxNQUFNLENBQUNRLHdCQUFQLENBQWdDTCxDQUFoQyxFQUFtQ0MsQ0FBbkMsQ0FBWDs7RUFDQSxJQUFJLENBQUNHLElBQUQsS0FBVSxTQUFTQSxJQUFULEdBQWdCLENBQUNKLENBQUMsQ0FBQ00sVUFBbkIsR0FBZ0NGLElBQUksQ0FBQ0csUUFBTCxJQUFpQkgsSUFBSSxDQUFDSSxZQUFoRSxDQUFKLEVBQW1GO0lBQ2pGSixJQUFJLEdBQUc7TUFBRUssVUFBVSxFQUFFLElBQWQ7TUFBb0JDLEdBQUcsRUFBRSxZQUFXO1FBQUUsT0FBT1YsQ0FBQyxDQUFDQyxDQUFELENBQVI7TUFBYztJQUFwRCxDQUFQO0VBQ0Q7O0VBQ0RKLE1BQU0sQ0FBQ2MsY0FBUCxDQUFzQlosQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCRSxJQUE3QjtBQUNILENBUHdELEdBT25ELFVBQVNMLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtFQUN4QixJQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtFQUN0QkYsQ0FBQyxDQUFDRyxFQUFELENBQUQsR0FBUUYsQ0FBQyxDQUFDQyxDQUFELENBQVQ7QUFDSCxDQVZxQixDQUF0Qjs7QUFXQSxJQUFJVyxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVNaLENBQVQsRUFBWWEsT0FBWixFQUFxQjtFQUNuRSxLQUFLLElBQUlDLENBQVQsSUFBY2QsQ0FBZCxFQUFpQixJQUFJYyxDQUFDLEtBQUssU0FBTixJQUFtQixDQUFDakIsTUFBTSxDQUFDa0IsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDSixPQUFyQyxFQUE4Q0MsQ0FBOUMsQ0FBeEIsRUFBMEVsQixlQUFlLENBQUNpQixPQUFELEVBQVViLENBQVYsRUFBYWMsQ0FBYixDQUFmO0FBQzlGLENBRkQ7O0FBR0FqQiw4Q0FBNkM7RUFBRXFCLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUNBTixZQUFZLENBQUNPLG1CQUFPLENBQUMsSUFBRCxDQUFSLEVBQXFDTixPQUFyQyxDQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1hc2F0b21ha2luby9waXhpanMtbW91c2UtZXZlbnQtdHJhbnNtaXR0ZXIvLi9saWIvaW5kZXguanM/OWIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL01vdXNlRXZlbnRUcmFuc21pdHRlclwiKSwgZXhwb3J0cyk7XG4iXSwibmFtZXMiOlsiX19jcmVhdGVCaW5kaW5nIiwiT2JqZWN0IiwiY3JlYXRlIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX19lc01vZHVsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsImRlZmluZVByb3BlcnR5IiwiX19leHBvcnRTdGFyIiwiZXhwb3J0cyIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ2YWx1ZSIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///678\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var F=__webpack_module_cache__[Q];if(void 0!==F)return F.exports;var B=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(B.exports,B,B.exports,__webpack_require__),B.loaded=!0,B.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,F,B,U)=>{if(!F){var I=1/0;for(i=0;i<deferred.length;i++){for(var[F,B,U]=deferred[i],n=!0,e=0;e<F.length;e++)(!1&U||I>=U)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](F[e])))?F.splice(e--,1):(n=!1,U<I&&(I=U));if(n){deferred.splice(i--,1);var s=B();void 0!==s&&(Q=s)}}return Q}U=U||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>U;i--)deferred[i]=deferred[i-1];deferred[i]=[F,B,U]},__webpack_require__.n=Q=>{var F=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(F,{a:F}),F},__webpack_require__.d=(Q,F)=>{for(var B in F)__webpack_require__.o(F,B)&&!__webpack_require__.o(Q,B)&&Object.defineProperty(Q,B,{enumerable:!0,get:F[B]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,F)=>Object.prototype.hasOwnProperty.call(Q,F),__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),(()=>{var Q={826:0};__webpack_require__.O.j=F=>0===Q[F];var F=(F,B)=>{var U,I,[n,e,s]=B,i=0;if(n.some((F=>0!==Q[F]))){for(U in e)__webpack_require__.o(e,U)&&(__webpack_require__.m[U]=e[U]);if(s)var C=s(__webpack_require__)}for(F&&F(B);i<n.length;i++)I=n[i],__webpack_require__.o(Q,I)&&Q[I]&&Q[I][0](),Q[I]=0;return __webpack_require__.O(C)},B=self.webpackChunk_masatomakino_pixijs_mouse_event_transmitter=self.webpackChunk_masatomakino_pixijs_mouse_event_transmitter||[];B.forEach(F.bind(null,0)),B.push=F.bind(null,B.push.bind(B))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(4167)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();