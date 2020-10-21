"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseEventTransmitter = void 0;
var pixi_js_1 = require("pixi.js");
var MouseEventTransmitter = /** @class */ (function () {
    function MouseEventTransmitter(option) {
        var _this = this;
        /**
         * 透過元のエレメントをドラッグ中か否か。
         * @private
         */
        this.isDragging = false;
        this.hasStartedDraggingFromTransmitTarget = false;
        this.isThrottling = false;
        /**
         * このフレーム数毎にmouseMoveのヒット処理が行われる。
         * 例えば2を指定した場合は、1フレームスキップ、1フレーム処理...の順になる。
         * 1を指定した場合は毎フレーム処理が行われる。
         * 1以上の整数であること。
         */
        this.skipMouseMovePerFrame = 2;
        this.mouseMoveCounter = 0;
        /**
         * mousemoveイベントを透過する。
         * stage上からドラッグが開始された場合、イベントは伝播されない。
         * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。
         * @param e
         */
        this.onMouseMove = function (e) {
            //連続実行の絞り込み中は処理を中断。
            if (_this.isThrottling) {
                return;
            }
            if (_this.isDragging && !_this.hasStartedDraggingFromTransmitTarget) {
                return;
            }
            _this.isThrottling = true;
            if (_this.hasStartedDraggingFromTransmitTarget) {
                _this.dispatchClone(e);
                return;
            }
            //ドラッグ中でない場合は、間引き処理をしながらイベントを上げる
            _this.onMouseMoveNonDragging(e);
        };
        /**
         * stageにヒットした場合は伝播が止まる。
         * @param e
         */
        this.onMouseDown = function (e) {
            var isHit = _this.hitTestStage(e);
            _this.isDragging = true;
            _this.hasStartedDraggingFromTransmitTarget = !isHit;
            //カンバスにヒットしなければ伝播。
            if (isHit)
                return;
            _this.dispatchClone(e);
        };
        /**
         * mouseupおよびmouseleaveイベントを透過する。
         * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。
         * @param e
         */
        this.onMouseUpLeave = function (e) {
            _this.dispatchClone(e);
            _this.isDragging = false;
            _this.hasStartedDraggingFromTransmitTarget = false;
        };
        /**
         * wheelイベントを透過する。
         * stageにヒットした場合は伝播が止まる。
         * @param e
         */
        this.onWheelEvent = function (e) {
            if (_this.hitTestStage(e))
                return;
            _this.dispatchClone(e);
        };
        this.transmitTarget = option.transmitTarget;
        this.interactionManager = option.app.renderer.plugins.interaction;
        this.canvas = option.app.view;
        this.start();
        pixi_js_1.Ticker.shared.add(function () {
            _this.mouseMoveCounter++;
            _this.mouseMoveCounter %= _this.skipMouseMovePerFrame;
            _this.isThrottling = false;
        });
    }
    MouseEventTransmitter.prototype.start = function () {
        if (this.isListen)
            return;
        this.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this.canvas.addEventListener("mousedown", this.onMouseDown, false);
        this.canvas.addEventListener("mouseup", this.onMouseUpLeave, false);
        this.canvas.addEventListener("mouseleave", this.onMouseUpLeave, false);
        this.canvas.addEventListener("wheel", this.onWheelEvent, false);
        this.isListen = true;
    };
    MouseEventTransmitter.prototype.stop = function () {
        if (!this.isListen)
            return;
        this.canvas.removeEventListener("mousemove", this.onMouseMove);
        this.canvas.removeEventListener("mousedown", this.onMouseDown);
        this.canvas.removeEventListener("mouseup", this.onMouseUpLeave);
        this.canvas.removeEventListener("mouseleave", this.onMouseUpLeave);
        this.canvas.removeEventListener("wheel", this.onWheelEvent);
        this.isListen = false;
    };
    MouseEventTransmitter.prototype.onMouseMoveNonDragging = function (e) {
        if (this.mouseMoveCounter !== 0) {
            return;
        }
        if (this.hitTestStage(e))
            return;
        this.dispatchClone(e);
    };
    MouseEventTransmitter.prototype.dispatchClone = function (e) {
        var clone = new e.constructor(e.type, e);
        this.transmitTarget.dispatchEvent(clone);
    };
    /**
     * ステージに対する当たり判定を行う。
     * @param e
     */
    MouseEventTransmitter.prototype.hitTestStage = function (e) {
        return !!this.interactionManager.hitTest(new pixi_js_1.Point(e.offsetX, e.offsetY));
    };
    return MouseEventTransmitter;
}());
exports.MouseEventTransmitter = MouseEventTransmitter;
