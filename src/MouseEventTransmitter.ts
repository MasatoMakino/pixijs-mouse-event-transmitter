import type { Application, EventBoundary } from "pixi.js";

export interface MouseEventTransmitterOption {
  transmitTarget: HTMLElement;
  app: Application;
}
export class MouseEventTransmitter {
  private transmitTarget: HTMLElement;
  private rootBoundary: EventBoundary;
  private canvas: HTMLCanvasElement;
  /**
   * 透過元のエレメントをドラッグ中か否か。
   * @private
   */
  private isDragging: boolean = false;
  private hasStartedDraggingFromTransmitTarget: boolean = false;
  private isListen: boolean = false;

  constructor(option: MouseEventTransmitterOption) {
    this.transmitTarget = option.transmitTarget;
    this.rootBoundary = option.app.renderer.events.rootBoundary;
    this.canvas = option.app.canvas as HTMLCanvasElement;

    this.start();
  }

  public start(): void {
    if (this.isListen) return;
    this.canvas.addEventListener("pointermove", this.onMouseMove, false);
    this.canvas.addEventListener("pointerdown", this.onMouseDown, false);
    this.canvas.addEventListener("pointerup", this.onMouseUpLeave, false);
    this.canvas.addEventListener("pointerleave", this.onMouseUpLeave, false);
    this.canvas.addEventListener("wheel", this.onWheelEvent, false);
    this.isListen = true;
  }

  public stop(): void {
    if (!this.isListen) return;
    this.canvas.removeEventListener("pointermove", this.onMouseMove);
    this.canvas.removeEventListener("pointerdown", this.onMouseDown);
    this.canvas.removeEventListener("pointerup", this.onMouseUpLeave);
    this.canvas.removeEventListener("pointerleave", this.onMouseUpLeave);
    this.canvas.removeEventListener("wheel", this.onWheelEvent);
    this.isListen = false;
  }

  /**
   * mousemoveイベントを透過する。
   * stage上からドラッグが開始された場合、イベントは伝播されない。
   * 下層のDOMからドラッグが開始された場合、stage上にポインタがかかってもイベントの伝播を継続する。
   * @param e
   */
  private onMouseMove = (e: MouseEvent): void => {
    if (this.isDragging && !this.hasStartedDraggingFromTransmitTarget) {
      return;
    }

    if (this.hasStartedDraggingFromTransmitTarget) {
      this.dispatchClone(e);
      return;
    }
    this.onMouseMoveNonDragging(e);
  };

  private onMouseMoveNonDragging(e: MouseEvent) {
    if (this.hitTestStage(e)) return;
    this.dispatchClone(e);
  }

  /**
   * stageにヒットした場合は伝播が止まる。
   * @param e
   */
  private onMouseDown = (e: MouseEvent): void => {
    const isHit = this.hitTestStage(e);
    this.isDragging = true;
    this.hasStartedDraggingFromTransmitTarget = !isHit;

    //カンバスにヒットしなければ伝播。
    if (isHit) return;

    this.dispatchClone(e);
  };

  /**
   * mouseupおよびmouseleaveイベントを透過する。
   * この二つのイベントはstageへのヒットにかかわらず、必ず伝播される。
   * @param e
   */
  private onMouseUpLeave = (e: MouseEvent): void => {
    this.dispatchClone(e);
    this.isDragging = false;
    this.hasStartedDraggingFromTransmitTarget = false;
  };
  /**
   * wheelイベントを透過する。
   * stageにヒットした場合は伝播が止まる。
   * @param e
   */
  private onWheelEvent = (e: WheelEvent): void => {
    if (this.hitTestStage(e)) return;
    this.dispatchClone(e);
  };

  private dispatchClone(e: MouseEvent | WheelEvent): void {
    // @ts-ignore
    const clone = new e.constructor(e.type, e);
    this.transmitTarget.dispatchEvent(clone);
  }

  /**
   * ステージに対する当たり判定を行う。
   * @param e
   */
  private hitTestStage(e: MouseEvent): boolean {
    if (this.rootBoundary.rootTarget) {
      return !!this.rootBoundary.hitTest(e.offsetX, e.offsetY);
    }
    return false;
  }
}
