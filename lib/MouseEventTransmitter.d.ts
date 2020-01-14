import { Application } from "pixi.js";
export interface MouseEventTransmitterOption {
    transmitTarget: HTMLElement;
    app: Application;
}
export declare class MouseEventTransmitter {
    private transmitTarget;
    private interactionManager;
    private canvas;
    private isDragging;
    private isDraggingTransmitTarget;
    private isListen;
    private isThrottling;
    /**
     * このフレーム数毎にmouseMoveのヒット処理が行われる。
     * 例えば2を指定した場合は、1フレームスキップ、1フレーム処理...の順になる。
     * 1を指定した場合は毎フレーム処理が行われる。
     * 1以上の整数であること。
     */
    skipMouseMovePerFrame: number;
    private mouseMoveCounter;
    constructor(option: MouseEventTransmitterOption);
    start(): void;
    stop(): void;
    /**
     * mousemoveイベントを透過する。
     * stage上からドラッグが開始された場合、イベントは伝播されない。
     * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。
     * @param e
     */
    private onMouseMove;
    private onMouseMoveNonDragging;
    /**
     * stageにヒットした場合は伝播が止まる。
     * @param e
     */
    private onMouseDown;
    /**
     * mouseupおよびmouseleaveイベントを透過する。
     * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。
     * @param e
     */
    private onMouseUpLeave;
    /**
     * wheelイベントを透過する。
     * stageにヒットした場合は伝播が止まる。
     * @param e
     */
    private onWheelEvent;
    private dispatchClone;
    /**
     * ステージに対する当たり判定を行う。
     * @param e
     */
    private hitTestStage;
}
//# sourceMappingURL=MouseEventTransmitter.d.ts.map