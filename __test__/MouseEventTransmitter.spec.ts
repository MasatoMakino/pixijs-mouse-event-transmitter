import {
  FakeMouseEventInit,
  getMouseEvent,
} from "@masatomakino/fake-mouse-event";
import { beforeEach, describe, expect, test } from "vitest";
import { generateStage } from "./StageGenerator.js";

describe("MouseEventTransmitter", async () => {
  const { app, transmitter, spyLog } = await generateStage();

  beforeEach(() => {
    const e = getMouseEvent("pointerup");
    app.canvas.dispatchEvent(e);
    transmitter.start();
    spyLog.mockClear();

    app.render();
  });

  test("init", () => {
    expect(transmitter).toBeTruthy();
  });

  const dispatchPointerEvent = (type: string, option?: FakeMouseEventInit) => {
    if (!option) {
      option = { x: 100, y: 100, offsetX: 100, offsetY: 100 };
    }
    const e = getMouseEvent(type, option);
    app.canvas.dispatchEvent(e);
    spyLog.mockClear();
  };
  /**
   * マウスイベントを発効し、期待されたコールバック関数が実行されるか否かをテストする。
   * @param type マウスイベントタイプ
   * @param option マウスイベントの座標値オプション
   * @param isListen log出力が行われるか否かの期待値 デフォルトでtrue
   */
  const dispatchPointerEventAndTest = (
    type: string,
    option?: FakeMouseEventInit,
    isListen?: boolean,
  ) => {
    if (!option) {
      option = { x: 100, y: 100, offsetX: 100, offsetY: 100 };
    }
    isListen ??= true;
    const e = getMouseEvent(type, option);
    app.canvas.dispatchEvent(e);
    if (isListen) {
      expect(spyLog).toBeCalledWith(expect.objectContaining(option));
    } else {
      expect(spyLog).not.toBeCalled();
    }

    spyLog.mockClear();
  };

  test("start and stop", () => {
    transmitter.start();
    dispatchPointerEventAndTest("pointerdown");
    transmitter.start();
    dispatchPointerEventAndTest("pointerdown");

    transmitter.stop();
    dispatchPointerEventAndTest("pointerdown", undefined, false);
    transmitter.stop();
    dispatchPointerEventAndTest("pointerdown", undefined, false);

    transmitter.start();
    dispatchPointerEventAndTest("pointerdown");
  });

  test("pointerdown", () => {
    dispatchPointerEventAndTest("pointerdown");
    /**
     * pointerdownイベントは、chrome環境では連続して発効しない。
     */
    dispatchPointerEventAndTest(
      "pointerdown",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
  });
  test("pointerup", () => {
    dispatchPointerEventAndTest("pointerup");
    /**
     * pointerupはstage上のオブジェクトを無視する。
     */
    dispatchPointerEventAndTest("pointerup", {
      offsetX: app.canvas.width / 2,
      offsetY: app.canvas.height / 2,
    });
  });
  test("wheel", () => {
    dispatchPointerEventAndTest("wheel");
    dispatchPointerEventAndTest(
      "wheel",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
  });

  test("pointermove", () => {
    dispatchPointerEvent("pointermove");
  });

  test("pointermove on interactive object", () => {
    dispatchPointerEventAndTest(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
    dispatchPointerEventAndTest(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );

    dispatchPointerEventAndTest(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );

    dispatchPointerEventAndTest(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
  });

  test("drag", () => {
    dispatchPointerEventAndTest("pointerdown");
    dispatchPointerEventAndTest("pointermove");
    dispatchPointerEventAndTest("pointermove");
    dispatchPointerEventAndTest("pointermove");
  });

  test("drag : start from interactive object", () => {
    /**
     * stage上のインタラクティブオブジェクトからドラッグを開始すると、イベントをすべて無視する。
     */
    dispatchPointerEventAndTest(
      "pointerdown",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
    dispatchPointerEventAndTest("pointermove", undefined, false);
    dispatchPointerEventAndTest("pointermove", undefined, false);
    dispatchPointerEventAndTest("pointermove", undefined, false);

    /**
     * マウスアップしてドラッグを再開すると、反応する
     */
    dispatchPointerEventAndTest("pointerup");
    dispatchPointerEventAndTest("pointerdown");
    dispatchPointerEventAndTest("pointermove");
  });
});
