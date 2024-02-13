(()=>{var __webpack_modules__={654:()=>{},516:(__unused_webpack___webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval('\n// EXTERNAL MODULE: ./node_modules/pixi.js/lib/index.mjs + 357 modules\nvar lib = __webpack_require__(754);\n;// CONCATENATED MODULE: ./esm/MouseEventTransmitter.js\n\nclass MouseEventTransmitter {\n  constructor(option) {\n    /**\n     * 透過元のエレメントをドラッグ中か否か。\n     * @private\n     */\n    this.isDragging = false;\n    this.hasStartedDraggingFromTransmitTarget = false;\n    this.isListen = false;\n    this.isThrottling = false;\n    /**\n     * このフレーム数毎にmouseMoveのヒット処理が行われる。\n     * 例えば2を指定した場合は、1フレームスキップ、1フレーム処理...の順になる。\n     * 1を指定した場合は毎フレーム処理が行われる。\n     * 1以上の整数であること。\n     */\n    this.skipMouseMovePerFrame = 2;\n    this.mouseMoveCounter = 0;\n    /**\n     * mousemoveイベントを透過する。\n     * stage上からドラッグが開始された場合、イベントは伝播されない。\n     * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。\n     * @param e\n     */\n    this.onMouseMove = e => {\n      //連続実行の絞り込み中は処理を中断。\n      if (this.isThrottling) {\n        return;\n      }\n      if (this.isDragging && !this.hasStartedDraggingFromTransmitTarget) {\n        return;\n      }\n      this.isThrottling = true;\n      if (this.hasStartedDraggingFromTransmitTarget) {\n        this.dispatchClone(e);\n        return;\n      }\n      //ドラッグ中でない場合は、間引き処理をしながらイベントを上げる\n      this.onMouseMoveNonDragging(e);\n    };\n    /**\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n    this.onMouseDown = e => {\n      const isHit = this.hitTestStage(e);\n      this.isDragging = true;\n      this.hasStartedDraggingFromTransmitTarget = !isHit;\n      //カンバスにヒットしなければ伝播。\n      if (isHit) return;\n      this.dispatchClone(e);\n    };\n    /**\n     * mouseupおよびmouseleaveイベントを透過する。\n     * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。\n     * @param e\n     */\n    this.onMouseUpLeave = e => {\n      this.dispatchClone(e);\n      this.isDragging = false;\n      this.hasStartedDraggingFromTransmitTarget = false;\n    };\n    /**\n     * wheelイベントを透過する。\n     * stageにヒットした場合は伝播が止まる。\n     * @param e\n     */\n    this.onWheelEvent = e => {\n      if (this.hitTestStage(e)) return;\n      this.dispatchClone(e);\n    };\n    this.transmitTarget = option.transmitTarget;\n    this.rootBoundary = option.app.renderer.events.rootBoundary;\n    this.canvas = option.app.view;\n    this.start();\n    lib/* Ticker */.vB5.shared.add(() => {\n      this.mouseMoveCounter++;\n      this.mouseMoveCounter %= this.skipMouseMovePerFrame;\n      this.isThrottling = false;\n    });\n  }\n  start() {\n    if (this.isListen) return;\n    this.canvas.addEventListener("mousemove", this.onMouseMove, false);\n    this.canvas.addEventListener("mousedown", this.onMouseDown, false);\n    this.canvas.addEventListener("mouseup", this.onMouseUpLeave, false);\n    this.canvas.addEventListener("mouseleave", this.onMouseUpLeave, false);\n    this.canvas.addEventListener("wheel", this.onWheelEvent, false);\n    this.isListen = true;\n  }\n  stop() {\n    if (!this.isListen) return;\n    this.canvas.removeEventListener("mousemove", this.onMouseMove);\n    this.canvas.removeEventListener("mousedown", this.onMouseDown);\n    this.canvas.removeEventListener("mouseup", this.onMouseUpLeave);\n    this.canvas.removeEventListener("mouseleave", this.onMouseUpLeave);\n    this.canvas.removeEventListener("wheel", this.onWheelEvent);\n    this.isListen = false;\n  }\n  onMouseMoveNonDragging(e) {\n    if (this.mouseMoveCounter !== 0) {\n      return;\n    }\n    if (this.hitTestStage(e)) return;\n    this.dispatchClone(e);\n  }\n  dispatchClone(e) {\n    // @ts-ignore\n    const clone = new e.constructor(e.type, e);\n    this.transmitTarget.dispatchEvent(clone);\n  }\n  /**\n   * ステージに対する当たり判定を行う。\n   * @param e\n   */\n  hitTestStage(e) {\n    if (this.rootBoundary.rootTarget) {\n      return !!this.rootBoundary.hitTest(e.offsetX, e.offsetY);\n    }\n    return false;\n  }\n}\n;// CONCATENATED MODULE: ./esm/index.js\n\n;// CONCATENATED MODULE: ./demoSrc/demo_event.js\n\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\nconst onDomContentsLoaded = () => {\n  const app = new lib/* Application */.MxU({\n    width: 640,\n    height: 600,\n    backgroundColor: 0x666666\n  });\n  document.body.appendChild(app.view);\n  const g = new lib/* Graphics */.TCu();\n  g.beginFill(0xff0000).drawRect(0, 0, 32, 32).endFill();\n  g.hitArea = new lib/* Rectangle */.AeJ(0, 0, 32, 32);\n  g.position.set(32);\n  g.eventMode = "static";\n  app.stage.addChild(g);\n  const canvas = document.createElement("canvas");\n  canvas.width = 800;\n  canvas.height = 600;\n  document.body.appendChild(canvas);\n  const transmitter = new MouseEventTransmitter({\n    transmitTarget: canvas,\n    app: app\n  });\n  canvas.addEventListener("mousedown", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener("mouseup", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener("mousemove", e => {\n    console.log(e.type);\n  });\n  canvas.addEventListener("wheel", e => {\n    console.log(e.type);\n  });\n};\n\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\nif (document.readyState !== "loading") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWdCLENBQUMsT0FBTyxFQUFHbEIsQ0FBQyxJQUFLO0lBQ3RDa0QsT0FBTyxDQUFDQyxHQUFHLENBQUNuRCxDQUFDLENBQUNzQixJQUFJLENBQUM7RUFDckIsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJYSxRQUFRLENBQUNpQixVQUFVLEtBQUssU0FBUyxFQUFFO0VBQ3JDckIsbUJBQW1CLENBQUMsQ0FBQztBQUN2QixDQUFDLE1BQU07RUFDTEksUUFBUSxDQUFDakIsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVhLG1CQUFtQixDQUFDO0FBQ3BFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1hc2F0b21ha2luby9waXhpanMtbW91c2UtZXZlbnQtdHJhbnNtaXR0ZXIvLi9lc20vTW91c2VFdmVudFRyYW5zbWl0dGVyLmpzPzkwNWMiLCJ3ZWJwYWNrOi8vQG1hc2F0b21ha2luby9waXhpanMtbW91c2UtZXZlbnQtdHJhbnNtaXR0ZXIvLi9lc20vaW5kZXguanM/YjIzOSIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1tb3VzZS1ldmVudC10cmFuc21pdHRlci8uL2RlbW9TcmMvZGVtb19ldmVudC5qcz81ZWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpY2tlciB9IGZyb20gXCJwaXhpLmpzXCI7XG5leHBvcnQgY2xhc3MgTW91c2VFdmVudFRyYW5zbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmAj+mBjuWFg+OBruOCqOODrOODoeODs+ODiOOCkuODieODqeODg+OCsOS4reOBi+WQpuOBi+OAglxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzU3RhcnRlZERyYWdnaW5nRnJvbVRyYW5zbWl0VGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMaXN0ZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Rocm90dGxpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOBk+OBruODleODrOODvOODoOaVsOavjuOBq21vdXNlTW92ZeOBruODkuODg+ODiOWHpueQhuOBjOihjOOCj+OCjOOCi+OAglxuICAgICAgICAgKiDkvovjgYjjgbAy44KS5oyH5a6a44GX44Gf5aC05ZCI44Gv44CBMeODleODrOODvOODoOOCueOCreODg+ODl+OAgTHjg5Xjg6zjg7zjg6Dlh6bnkIYuLi7jga7poIbjgavjgarjgovjgIJcbiAgICAgICAgICogMeOCkuaMh+WumuOBl+OBn+WgtOWQiOOBr+avjuODleODrOODvOODoOWHpueQhuOBjOihjOOCj+OCjOOCi+OAglxuICAgICAgICAgKiAx5Lul5LiK44Gu5pW05pWw44Gn44GC44KL44GT44Go44CCXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNraXBNb3VzZU1vdmVQZXJGcmFtZSA9IDI7XG4gICAgICAgIHRoaXMubW91c2VNb3ZlQ291bnRlciA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBtb3VzZW1vdmXjgqTjg5njg7Pjg4jjgpLpgI/pgY7jgZnjgovjgIJcbiAgICAgICAgICogc3RhZ2XkuIrjgYvjgonjg4njg6njg4PjgrDjgYzplovlp4vjgZXjgozjgZ/loLTlkIjjgIHjgqTjg5njg7Pjg4jjga/kvJ3mkq3jgZXjgozjgarjgYTjgIJcbiAgICAgICAgICog5LiL5bGk44GuRE9N44GL44KJ44OJ44Op44OD44Kw44GM6ZaL5aeL44GV44KM44Gf5aC05ZCI44CBc3RhZ2XkuIrjgavjg53jgqTjg7Pjgr/jgYzjgYvjgYvjgaPjgabjgoLjgqTjg5njg7Pjg4jjga7kvJ3mkq3jgpLntpnntprjgZnjgovjgIJcbiAgICAgICAgICogQHBhcmFtIGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgLy/pgKPntprlrp/ooYzjga7ntZ7jgorovrzjgb/kuK3jga/lh6bnkIbjgpLkuK3mlq3jgIJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGhyb3R0bGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcgJiYgIXRoaXMuaGFzU3RhcnRlZERyYWdnaW5nRnJvbVRyYW5zbWl0VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1Rocm90dGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3RhcnRlZERyYWdnaW5nRnJvbVRyYW5zbWl0VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaENsb25lKGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v44OJ44Op44OD44Kw5Lit44Gn44Gq44GE5aC05ZCI44Gv44CB6ZaT5byV44GN5Yem55CG44KS44GX44Gq44GM44KJ44Kk44OZ44Oz44OI44KS5LiK44GS44KLXG4gICAgICAgICAgICB0aGlzLm9uTW91c2VNb3ZlTm9uRHJhZ2dpbmcoZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzdGFnZeOBq+ODkuODg+ODiOOBl+OBn+WgtOWQiOOBr+S8neaSreOBjOatouOBvuOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0hpdCA9IHRoaXMuaGl0VGVzdFN0YWdlKGUpO1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFzU3RhcnRlZERyYWdnaW5nRnJvbVRyYW5zbWl0VGFyZ2V0ID0gIWlzSGl0O1xuICAgICAgICAgICAgLy/jgqvjg7Pjg5Djgrnjgavjg5Ljg4Pjg4jjgZfjgarjgZHjgozjgbDkvJ3mkq3jgIJcbiAgICAgICAgICAgIGlmIChpc0hpdClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2xvbmUoZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBtb3VzZXVw44GK44KI44GzbW91c2VsZWF2ZeOCpOODmeODs+ODiOOCkumAj+mBjuOBmeOCi+OAglxuICAgICAgICAgKiDjgZPjga7kuozjgaTjga7jgqTjg5njg7Pjg4jjga9zdGFnZeOBuOOBruODkuODg+ODiOOBq+OBi+OBi+OCj+OCieOBmuOAgeW/heOBmuS8neaSreOBleOCjOOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbk1vdXNlVXBMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2xvbmUoZSk7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaGFzU3RhcnRlZERyYWdnaW5nRnJvbVRyYW5zbWl0VGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB3aGVlbOOCpOODmeODs+ODiOOCkumAj+mBjuOBmeOCi+OAglxuICAgICAgICAgKiBzdGFnZeOBq+ODkuODg+ODiOOBl+OBn+WgtOWQiOOBr+S8neaSreOBjOatouOBvuOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbldoZWVsRXZlbnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGl0VGVzdFN0YWdlKGUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDbG9uZShlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFuc21pdFRhcmdldCA9IG9wdGlvbi50cmFuc21pdFRhcmdldDtcbiAgICAgICAgdGhpcy5yb290Qm91bmRhcnkgPSBvcHRpb24uYXBwLnJlbmRlcmVyLmV2ZW50cy5yb290Qm91bmRhcnk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gb3B0aW9uLmFwcC52aWV3O1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIFRpY2tlci5zaGFyZWQuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VNb3ZlQ291bnRlcisrO1xuICAgICAgICAgICAgdGhpcy5tb3VzZU1vdmVDb3VudGVyICU9IHRoaXMuc2tpcE1vdXNlTW92ZVBlckZyYW1lO1xuICAgICAgICAgICAgdGhpcy5pc1Rocm90dGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0xpc3RlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93biwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcExlYXZlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZVVwTGVhdmUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMub25XaGVlbEV2ZW50LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaXNMaXN0ZW4gPSB0cnVlO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNMaXN0ZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwTGVhdmUpO1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uTW91c2VVcExlYXZlKTtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMub25XaGVlbEV2ZW50KTtcbiAgICAgICAgdGhpcy5pc0xpc3RlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBvbk1vdXNlTW92ZU5vbkRyYWdnaW5nKGUpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VNb3ZlQ291bnRlciAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhpdFRlc3RTdGFnZShlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5kaXNwYXRjaENsb25lKGUpO1xuICAgIH1cbiAgICBkaXNwYXRjaENsb25lKGUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjbG9uZSA9IG5ldyBlLmNvbnN0cnVjdG9yKGUudHlwZSwgZSk7XG4gICAgICAgIHRoaXMudHJhbnNtaXRUYXJnZXQuZGlzcGF0Y2hFdmVudChjbG9uZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOOCueODhuODvOOCuOOBq+WvvuOBmeOCi+W9k+OBn+OCiuWIpOWumuOCkuihjOOBhuOAglxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgaGl0VGVzdFN0YWdlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdEJvdW5kYXJ5LnJvb3RUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMucm9vdEJvdW5kYXJ5LmhpdFRlc3QoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9Nb3VzZUV2ZW50VHJhbnNtaXR0ZXIuanNcIjtcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBHcmFwaGljcywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnRUcmFuc21pdHRlciB9IGZyb20gXCIuLi9lc20vaW5kZXguanNcIjtcblxuLyoqXG4gKiBET01Db250ZW50TG9hZGVk5b6M44Gu5Yid5pyf5YyW5Yem55CG44CCXG4gKiDjg4fjg6Ljgavlv4XopoHjgarjg5Hjg7zjg4TjgpLkuIDlvI/liJ3mnJ/ljJbjgZnjgovjgIJcbiAqL1xuY29uc3Qgb25Eb21Db250ZW50c0xvYWRlZCA9ICgpID0+IHtcbiAgY29uc3QgYXBwID0gbmV3IEFwcGxpY2F0aW9uKHtcbiAgICB3aWR0aDogNjQwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogMHg2NjY2NjYsXG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcbiAgY29uc3QgZyA9IG5ldyBHcmFwaGljcygpO1xuICBnLmJlZ2luRmlsbCgweGZmMDAwMCkuZHJhd1JlY3QoMCwgMCwgMzIsIDMyKS5lbmRGaWxsKCk7XG4gIGcuaGl0QXJlYSA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgMzIsIDMyKTtcbiAgZy5wb3NpdGlvbi5zZXQoMzIpO1xuICBnLmV2ZW50TW9kZSA9IFwic3RhdGljXCI7XG5cbiAgYXBwLnN0YWdlLmFkZENoaWxkKGcpO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgY2FudmFzLmhlaWdodCA9IDYwMDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIGNvbnN0IHRyYW5zbWl0dGVyID0gbmV3IE1vdXNlRXZlbnRUcmFuc21pdHRlcih7XG4gICAgdHJhbnNtaXRUYXJnZXQ6IGNhbnZhcyxcbiAgICBhcHA6IGFwcCxcbiAgfSk7XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xuICB9KTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50eXBlKTtcbiAgfSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50eXBlKTtcbiAgfSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRE9NQ29udGVudExvYWRlZOS7pemZjeOBq+WIneacn+WMluWHpueQhuOCkuWun+ihjOOBmeOCi1xuICovXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgb25Eb21Db250ZW50c0xvYWRlZCgpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgb25Eb21Db250ZW50c0xvYWRlZCk7XG59XG4iXSwibmFtZXMiOlsiVGlja2VyIiwiTW91c2VFdmVudFRyYW5zbWl0dGVyIiwiY29uc3RydWN0b3IiLCJvcHRpb24iLCJpc0RyYWdnaW5nIiwiaGFzU3RhcnRlZERyYWdnaW5nRnJvbVRyYW5zbWl0VGFyZ2V0IiwiaXNMaXN0ZW4iLCJpc1Rocm90dGxpbmciLCJza2lwTW91c2VNb3ZlUGVyRnJhbWUiLCJtb3VzZU1vdmVDb3VudGVyIiwib25Nb3VzZU1vdmUiLCJlIiwiZGlzcGF0Y2hDbG9uZSIsIm9uTW91c2VNb3ZlTm9uRHJhZ2dpbmciLCJvbk1vdXNlRG93biIsImlzSGl0IiwiaGl0VGVzdFN0YWdlIiwib25Nb3VzZVVwTGVhdmUiLCJvbldoZWVsRXZlbnQiLCJ0cmFuc21pdFRhcmdldCIsInJvb3RCb3VuZGFyeSIsImFwcCIsInJlbmRlcmVyIiwiZXZlbnRzIiwiY2FudmFzIiwidmlldyIsInN0YXJ0Iiwic2hhcmVkIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvbmUiLCJ0eXBlIiwiZGlzcGF0Y2hFdmVudCIsInJvb3RUYXJnZXQiLCJoaXRUZXN0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJBcHBsaWNhdGlvbiIsIkdyYXBoaWNzIiwiUmVjdGFuZ2xlIiwib25Eb21Db250ZW50c0xvYWRlZCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJlbmRGaWxsIiwiaGl0QXJlYSIsInBvc2l0aW9uIiwic2V0IiwiZXZlbnRNb2RlIiwic3RhZ2UiLCJhZGRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFuc21pdHRlciIsImNvbnNvbGUiLCJsb2ciLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///516\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var F=__webpack_module_cache__[Q];if(void 0!==F)return F.exports;var U=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(U.exports,U,U.exports,__webpack_require__),U.loaded=!0,U.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,F,U,g)=>{if(!F){var B=1/0;for(e=0;e<deferred.length;e++){for(var[F,U,g]=deferred[e],I=!0,n=0;n<F.length;n++)(!1&g||B>=g)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](F[n])))?F.splice(n--,1):(I=!1,g<B&&(B=g));if(I){deferred.splice(e--,1);var C=U();void 0!==C&&(Q=C)}}return Q}g=g||0;for(var e=deferred.length;e>0&&deferred[e-1][2]>g;e--)deferred[e]=deferred[e-1];deferred[e]=[F,U,g]},__webpack_require__.d=(Q,F)=>{for(var U in F)__webpack_require__.o(F,U)&&!__webpack_require__.o(Q,U)&&Object.defineProperty(Q,U,{enumerable:!0,get:F[U]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,F)=>Object.prototype.hasOwnProperty.call(Q,F),__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),(()=>{var Q={826:0};__webpack_require__.O.j=F=>0===Q[F];var F=(F,U)=>{var g,B,[I,n,C]=U,e=0;if(I.some((F=>0!==Q[F]))){for(g in n)__webpack_require__.o(n,g)&&(__webpack_require__.m[g]=n[g]);if(C)var s=C(__webpack_require__)}for(F&&F(U);e<I.length;e++)B=I[e],__webpack_require__.o(Q,B)&&Q[B]&&Q[B][0](),Q[B]=0;return __webpack_require__.O(s)},U=self.webpackChunk_masatomakino_pixijs_mouse_event_transmitter=self.webpackChunk_masatomakino_pixijs_mouse_event_transmitter||[];U.forEach(F.bind(null,0)),U.push=F.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(516)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();