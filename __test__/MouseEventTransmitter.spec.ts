import { getMouseEvent } from "fake-mouse-event";
import { Application, Graphics, Rectangle } from "pixi.js-legacy";
import { MouseEventTransmitter } from "../src";
import { SkipCounter } from "./SkipCounter";

const initTestMember = () => {
  const spyLog = jest.spyOn(console, "log").mockImplementation((x) => x);

  const W = 640;
  const H = 480;
  const app = new Application({
    width: W,
    height: H,
    backgroundColor: 0x666666,
    forceCanvas: true,
  });
  document.body.appendChild(app.view);

  const size = 128;
  const g = new Graphics();
  g.beginFill(0xff0000).drawRect(0, 0, size, size).endFill();
  g.hitArea = new Rectangle(0, 0, size, size);
  g.position.set(W / 2, H / 2);
  g.interactive = true;
  app.stage.addChild(g);

  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  document.body.appendChild(canvas);
  canvas.addEventListener("mousedown", (e) => {
    console.log(e);
  });
  canvas.addEventListener("mouseup", (e) => {
    console.log(e);
  });
  canvas.addEventListener("mousemove", (e) => {
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

describe("MouseEventTransmitter", () => {
  const { app, canvas, transmitter, spyLog, skipCounter } = initTestMember();

  beforeEach(() => {
    const e = getMouseEvent("mouseup");
    app.view.dispatchEvent(e);
    transmitter.start();
    skipCounter.reset();
    spyLog.mockClear();

    app.render();
  });

  test("init", () => {
    expect(transmitter).toBeTruthy();
  });

  /**
   * マウスイベントを発効し、期待されたコールバック関数が実行されるか否かをテストする。
   * @param type マウスイベントタイプ
   * @param option マウスイベントの座標値オプション
   * @param isListen log出力が行われるか否かの期待値 デフォルトでtrue
   */
  const dispatchEvent = (type: string, option?: any, isListen?: boolean) => {
    if (!option) {
      option = { x: 100, y: 100, offsetX: 100, offsetY: 100 };
    }
    isListen ??= true;
    const e = getMouseEvent(type, option);
    app.view.dispatchEvent(e);
    if (isListen) {
      expect(spyLog).toBeCalledWith(expect.objectContaining(option));
    } else {
      expect(spyLog).not.toBeCalled();
    }

    spyLog.mockClear();
  };

  test("start and stop", () => {
    transmitter.start();
    dispatchEvent("mousedown");
    transmitter.start();
    dispatchEvent("mousedown");

    transmitter.stop();
    dispatchEvent("mousedown", undefined, false);
    transmitter.stop();
    dispatchEvent("mousedown", undefined, false);

    transmitter.start();
    dispatchEvent("mousedown");
  });

  test("mousedown", () => {
    dispatchEvent("mousedown");
    dispatchEvent(
      "mousedown",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false
    );
  });
  test("mouseup", () => {
    dispatchEvent("mouseup");
    /**
     * mouseupはstage上のオブジェクトを無視する。
     */
    dispatchEvent("mouseup", {
      offsetX: app.view.width / 2,
      offsetY: app.view.height / 2,
    });
  });
  test("wheel", () => {
    dispatchEvent("wheel");
    dispatchEvent(
      "wheel",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false
    );
  });

  test("mousemove", () => {
    dispatchEvent("mousemove");
    /**
     * 二度目のマウスムーブはスロットリングされる
     */
    dispatchEvent("mousemove", undefined, false);

    /**
     * skipMouseMovePerFrame分の更新が進むまで、mousemoveは無視し続ける
     */
    skipCounter.update();
    dispatchEvent("mousemove", undefined, false);

    skipCounter.reset();
    dispatchEvent("mousemove");
  });

  test("mousemove on interactive object", () => {
    dispatchEvent(
      "mousemove",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false
    );
    dispatchEvent(
      "mousemove",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false
    );

    skipCounter.update();
    dispatchEvent(
      "mousemove",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false
    );

    skipCounter.reset();
    dispatchEvent(
      "mousemove",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false
    );
  });

  test("drag", () => {
    dispatchEvent("mousedown");
    dispatchEvent("mousemove");
    /**
     * 二度目のマウスムーブはスロットリングされる
     */
    dispatchEvent("mousemove", undefined, false);

    /**
     * ドラッグ中は、1フレーム分updateされれればmousemoveが実行される。
     * skipMouseMovePerFrameの値は無視する。
     */
    skipCounter.update();
    dispatchEvent("mousemove");
  });

  test("drag : start from interactive object", () => {
    /**
     * stage上のインタラクティブオブジェクトからドラッグを開始すると、イベントをすべて無視する。
     */
    dispatchEvent(
      "mousedown",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false
    );
    dispatchEvent("mousemove", undefined, false);
    skipCounter.update();
    dispatchEvent("mousemove", undefined, false);
    skipCounter.reset();
    dispatchEvent("mousemove", undefined, false);

    /**
     * マウスアップしてドラッグを再開すると、反応する
     */
    dispatchEvent("mouseup");
    dispatchEvent("mousedown");
    dispatchEvent("mousemove");
    dispatchEvent("mousemove", undefined, false);
  });
});
