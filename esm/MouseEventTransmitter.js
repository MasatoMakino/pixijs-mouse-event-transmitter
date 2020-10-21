import { Point, Ticker } from "pixi.js";
export class MouseEventTransmitter {
    constructor(option) {
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
        this.onMouseMove = (e) => {
            //連続実行の絞り込み中は処理を中断。
            if (this.isThrottling) {
                return;
            }
            if (this.isDragging && !this.hasStartedDraggingFromTransmitTarget) {
                return;
            }
            this.isThrottling = true;
            if (this.hasStartedDraggingFromTransmitTarget) {
                this.dispatchClone(e);
                return;
            }
            //ドラッグ中でない場合は、間引き処理をしながらイベントを上げる
            this.onMouseMoveNonDragging(e);
        };
        /**
         * stageにヒットした場合は伝播が止まる。
         * @param e
         */
        this.onMouseDown = (e) => {
            const isHit = this.hitTestStage(e);
            this.isDragging = true;
            this.hasStartedDraggingFromTransmitTarget = !isHit;
            //カンバスにヒットしなければ伝播。
            if (isHit)
                return;
            this.dispatchClone(e);
        };
        /**
         * mouseupおよびmouseleaveイベントを透過する。
         * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。
         * @param e
         */
        this.onMouseUpLeave = (e) => {
            this.dispatchClone(e);
            this.isDragging = false;
            this.hasStartedDraggingFromTransmitTarget = false;
        };
        /**
         * wheelイベントを透過する。
         * stageにヒットした場合は伝播が止まる。
         * @param e
         */
        this.onWheelEvent = (e) => {
            if (this.hitTestStage(e))
                return;
            this.dispatchClone(e);
        };
        this.transmitTarget = option.transmitTarget;
        this.interactionManager = option.app.renderer.plugins.interaction;
        this.canvas = option.app.view;
        this.start();
        Ticker.shared.add(() => {
            this.mouseMoveCounter++;
            this.mouseMoveCounter %= this.skipMouseMovePerFrame;
            this.isThrottling = false;
        });
    }
    start() {
        if (this.isListen)
            return;
        this.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this.canvas.addEventListener("mousedown", this.onMouseDown, false);
        this.canvas.addEventListener("mouseup", this.onMouseUpLeave, false);
        this.canvas.addEventListener("mouseleave", this.onMouseUpLeave, false);
        this.canvas.addEventListener("wheel", this.onWheelEvent, false);
        this.isListen = true;
    }
    stop() {
        if (!this.isListen)
            return;
        this.canvas.removeEventListener("mousemove", this.onMouseMove);
        this.canvas.removeEventListener("mousedown", this.onMouseDown);
        this.canvas.removeEventListener("mouseup", this.onMouseUpLeave);
        this.canvas.removeEventListener("mouseleave", this.onMouseUpLeave);
        this.canvas.removeEventListener("wheel", this.onWheelEvent);
        this.isListen = false;
    }
    onMouseMoveNonDragging(e) {
        if (this.mouseMoveCounter !== 0) {
            return;
        }
        if (this.hitTestStage(e))
            return;
        this.dispatchClone(e);
    }
    dispatchClone(e) {
        const clone = new e.constructor(e.type, e);
        this.transmitTarget.dispatchEvent(clone);
    }
    /**
     * ステージに対する当たり判定を行う。
     * @param e
     */
    hitTestStage(e) {
        return !!this.interactionManager.hitTest(new Point(e.offsetX, e.offsetY));
    }
}
