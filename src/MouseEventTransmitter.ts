import { Application, Point, Ticker } from "pixi.js";
import { InteractionManager } from "@pixi/interaction";

export interface MouseEventTransmitterOption {
  transmitTarget: HTMLElement;
  app: Application;
}
export class MouseEventTransmitter {
  private transmitTarget: HTMLElement;
  private interactionManager: InteractionManager;
  private canvas: HTMLCanvasElement;
  private isDragging: boolean = false;
  private isDraggingTransmitTarget: boolean = false;
  private isListen: boolean;
  private isThrottling: boolean = false;
  /**
   * このフレーム数毎にmouseMoveのヒット処理が行われる。
   * 例えば2を指定した場合は、1フレームスキップ、1フレーム処理...の順になる。
   * 1を指定した場合は毎フレーム処理が行われる。
   * 1以上の整数であること。
   */
  public skipMouseMovePerFrame: number = 2;
  private mouseMoveCounter: number = 0;

  constructor(option: MouseEventTransmitterOption) {
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

  private start(): void {
    if (this.isListen) return;
    this.canvas.addEventListener("mousemove", this.onMouseMove, false);
    this.canvas.addEventListener("mousedown", this.onMouseDown, false);
    this.canvas.addEventListener("mouseup", this.onMouseUpLeave, false);
    this.canvas.addEventListener("mouseleave", this.onMouseUpLeave, false);
    this.canvas.addEventListener("wheel", this.onWheelEvent, false);
    this.isListen = true;
  }

  public stop(): void {
    if (!this.isListen) return;
    this.canvas.removeEventListener("mousemove", this.onMouseMove);
    this.canvas.removeEventListener("mousedown", this.onMouseDown);
    this.canvas.removeEventListener("mouseup", this.onMouseUpLeave);
    this.canvas.removeEventListener("mouseleave", this.onMouseUpLeave);
    this.canvas.removeEventListener("wheel", this.onWheelEvent);
    this.isListen = false;
  }

  /**
   * mousemoveイベントを透過する。
   * stage上からドラッグが開始された場合、イベントは伝播されない。
   * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。
   * @param e
   */
  private onMouseMove = (e): void => {
    //連続実行の絞り込み中は処理を中断。
    if (this.isThrottling) {
      return;
    }

    if (this.isDragging && !this.isDraggingTransmitTarget) {
      return;
    }
    this.isThrottling = true;

    if (this.isDraggingTransmitTarget) {
      this.dispatchClone(e);
      return;
    }

    //ドラッグ中でない場合は、間引き処理をしながらイベントを上げる
    this.onMouseMoveNonDragging(e);
  };

  private onMouseMoveNonDragging(e) {
    if (this.mouseMoveCounter !== 0) {
      return;
    }

    //ドラッグ中ではない場合、stageにヒットしたら処理中断
    const isHit = this.hitTestStage(e);
    if (isHit) return;

    this.dispatchClone(e);
  }

  /**
   * stageにヒットした場合は伝播が止まる。
   * @param e
   */
  private onMouseDown = (e): void => {
    const isHit = this.hitTestStage(e);
    this.isDragging = true;
    this.isDraggingTransmitTarget = !isHit;

    //カンバスにヒットしなければ伝播。
    if (isHit) return;

    this.dispatchClone(e);
  };

  /**
   * mouseupおよびmouseleaveイベントを透過する。
   * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。
   * @param e
   */
  private onMouseUpLeave = (e): void => {
    this.dispatchClone(e);
    this.isDragging = false;
    this.isDraggingTransmitTarget = false;
  };
  /**
   * wheelイベントを透過する。
   * stageにヒットした場合は伝播が止まる。
   * @param e
   */
  private onWheelEvent = (e): void => {
    const isHit = this.hitTestStage(e);

    //カンバスにヒットしなければ伝播。
    if (isHit) return;

    this.dispatchClone(e);
  };

  private dispatchClone(e) {
    const clone = new e.constructor(e.type, e);
    this.transmitTarget.dispatchEvent(clone);
  }

  /**
   * ステージに対する当たり判定を行う。
   * @param e
   */
  private hitTestStage(e): boolean {
    return !!this.interactionManager.hitTest(new Point(e.clientX, e.clientY));
  }
}
