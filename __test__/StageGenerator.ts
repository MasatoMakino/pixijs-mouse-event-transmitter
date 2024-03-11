import { Application, Graphics, Rectangle } from "pixi.js";
import { vi } from "vitest";
import { MouseEventTransmitter } from "../src/index.js";

export const generateStage = async () => {
  const spyLog = vi.spyOn(console, "log").mockImplementation((x) => x);

  const W = 640;
  const H = 480;
  const app = new Application();

  await app.init({
    width: W,
    height: H,
    backgroundColor: 0x666666,
  });

  document.body.appendChild(app.canvas as HTMLCanvasElement);

  const size = 128;
  const g = new Graphics();
  g.rect(0, 0, size, size).fill(0xff0000);
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

  return {
    app,
    canvas,
    transmitter,
    spyLog,
  };
};
