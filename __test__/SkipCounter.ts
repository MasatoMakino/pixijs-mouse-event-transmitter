import { Ticker } from "pixi.js";
import { MouseEventTransmitter } from "../src/index.js";

export class SkipCounter {
  private _count: number = 0;

  constructor(public transmitter: MouseEventTransmitter) {}

  update(): void {
    Ticker.shared.lastTime = 0;
    Ticker.shared.update(16);

    this._count++;
    this._count %= this.transmitter.skipMouseMovePerFrame;
  }

  reset(): void {
    this.update();
    while (this._count !== 0) {
      this.update();
    }
  }
}
