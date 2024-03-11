import { Application, Graphics, Rectangle, sayHello } from "pixi.js";
import { MouseEventTransmitter } from "../esm/index.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = async () => {
  const app = new Application();

  await app.init({
    width: 640,
    height: 600,
    backgroundColor: 0x666666,
  });

  sayHello(app.renderer.name);

  document.body.appendChild(app.canvas);
  const g = new Graphics();
  g.rect(0, 0, 32, 32).fill(0xff0000);
  g.hitArea = new Rectangle(0, 0, 32, 32);
  g.position.set(32);
  g.eventMode = "static";

  app.stage.addChild(g);

  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  document.body.appendChild(canvas);

  const transmitter = new MouseEventTransmitter({
    transmitTarget: canvas,
    app: app,
  });

  canvas.addEventListener("pointerdown", (e) => {
    console.log(e.type);
  });
  canvas.addEventListener("pointerup", (e) => {
    console.log(e.type);
  });
  canvas.addEventListener("pointermove", (e) => {
    console.log(e.type);
  });
  canvas.addEventListener("wheel", (e) => {
    console.log(e.type);
  });
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
