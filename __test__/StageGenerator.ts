import { Application, Graphics, Rectangle } from "pixi.js-legacy";
import { vi } from "vitest";
import { MouseEventTransmitter } from "../src/index.js";
import { SkipCounter } from "./SkipCounter.js";

export const generateStage = () => {
  const spyLog = vi.spyOn(console, "log").mockImplementation((x) => x);

  const W = 640;
  const H = 480;
  const app = new Application({
    width: W,
    height: H,
    backgroundColor: 0x666666,
    forceCanvas: true,
  });
  document.body.appendChild(app.view as HTMLCanvasElement);

  const size = 128;
  const g = new Graphics();
  g.beginFill(0xff0000).drawRect(0, 0, size, size).endFill();
  g.hitArea = new Rectangle(0, 0, size, size);
  g.position.set(W / 2, H / 2);
  g.eventMode = "static";
  app.stage.addChild(g);

  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  document.body.appendChild(canvas);
  canvas.addEventListener("pointerdown", (e) => {
    console.log(e);
  });
  canvas.addEventListener("pointerup", (e) => {
    console.log(e);
  });
  canvas.addEventListener("pointermove", (e) => {
    console.log(e);
  });
  canvas.addEventListener("wheel", (e) => {
    console.log(e);
  });

  const transmitter = new MouseEventTransmitter({
    transmitTarget: canvas,
    app: app,
  });

  const skipCounter = new SkipCounter(transmitter);
  return {
    app,
    canvas,
    transmitter,
    spyLog,
    skipCounter,
  };
};
