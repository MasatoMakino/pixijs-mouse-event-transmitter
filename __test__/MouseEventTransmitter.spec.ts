import { SkipCounter } from "./SkipCounter";
import { MouseEventTransmitter } from "../src";
import { FakeMouseEventInit, getMouseEvent } from "fake-mouse-event";
import { Application, Ticker } from "pixi.js";

const initTestMember = () => {
  const spyLog = jest.spyOn(console, "log").mockImplementation((x) => x);

  const app = new Application({
    width: 640,
    height: 480,
    backgroundColor: 0x666666,
  });
  const view = app.view;
  document.body.appendChild(app.view);

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
  });

  test("init", () => {
    expect(transmitter).toBeTruthy();
  });

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
  };

  test("start and stop", () => {
    transmitter.start();
    dispatchEvent("mousedown");
    spyLog.mockClear();
    transmitter.start();
    dispatchEvent("mousedown");
    spyLog.mockClear();

    transmitter.stop();
    dispatchEvent("mousedown", undefined, false);
    spyLog.mockClear();
    transmitter.stop();
    dispatchEvent("mousedown", undefined, false);
    spyLog.mockClear();

    transmitter.start();
    dispatchEvent("mousedown");
    spyLog.mockClear();
  });

  test("mousedown", () => {
    dispatchEvent("mousedown");
  });
  test("mouseup", () => {
    dispatchEvent("mouseup");
  });
  test("mousemove", () => {
    dispatchEvent("mousemove");
    spyLog.mockClear();
    /**
     * 二度目のマウスムーブはスロットリングされる
     */
    dispatchEvent("mousemove", undefined, false);
    spyLog.mockClear();

    skipCounter.reset();
    dispatchEvent("mousemove");
    spyLog.mockClear();
  });
});
