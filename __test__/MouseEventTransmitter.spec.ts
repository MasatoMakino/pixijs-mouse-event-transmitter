import {
  FakeMouseEventInit,
  getMouseEvent,
} from "@masatomakino/fake-mouse-event";
import { beforeEach, describe, expect, test } from "vitest";
import { generateStage } from "./StageGenerator.js";

describe("MouseEventTransmitter", async () => {
  const { app, canvas, transmitter, spyLog, skipCounter } =
    await generateStage();

  beforeEach(() => {
    const e = getMouseEvent("pointerup");
    app.canvas.dispatchEvent(e);
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
  const dispatchEvent = (
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
    dispatchEvent("pointerdown");
    transmitter.start();
    dispatchEvent("pointerdown");

    transmitter.stop();
    dispatchEvent("pointerdown", undefined, false);
    transmitter.stop();
    dispatchEvent("pointerdown", undefined, false);

    transmitter.start();
    dispatchEvent("pointerdown");
  });

  test("pointerdown", () => {
    dispatchEvent("pointerdown");
    /**
     * pointerdownイベントは、chrome環境では連続して発効しない。
     */
    dispatchEvent(
      "pointerdown",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
  });
  test("pointerup", () => {
    dispatchEvent("pointerup");
    /**
     * pointerupはstage上のオブジェクトを無視する。
     */
    dispatchEvent("pointerup", {
      offsetX: app.canvas.width / 2,
      offsetY: app.canvas.height / 2,
    });
  });
  test("wheel", () => {
    dispatchEvent("wheel");
    dispatchEvent(
      "wheel",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
  });

  test("pointermove", () => {
    dispatchEvent("pointermove");
    /**
     * 二度目のマウスムーブはスロットリングされる
     */
    dispatchEvent("pointermove", undefined, false);

    /**
     * skipMouseMovePerFrame分の更新が進むまで、mousemoveは無視し続ける
     */
    skipCounter.update();
    dispatchEvent("pointermove", undefined, false);

    skipCounter.reset();
    dispatchEvent("pointermove");
  });

  test("pointermove on interactive object", () => {
    dispatchEvent(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
    dispatchEvent(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );

    skipCounter.update();
    dispatchEvent(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );

    skipCounter.reset();
    dispatchEvent(
      "pointermove",
      { offsetX: app.canvas.width / 2, offsetY: app.canvas.height / 2 },
      false,
    );
  });

  test("drag", () => {
    dispatchEvent("pointerdown");
    dispatchEvent("pointermove");
    /**
     * 二度目のマウスムーブはスロットリングされる
     */
    dispatchEvent("pointermove", undefined, false);

    /**
     * ドラッグ中は、1フレーム分updateされれればpointermoveが実行される。
     * skipMouseMovePerFrameの値は無視する。
     */
    skipCounter.update();
    dispatchEvent("pointermove");
  });

  test("drag : start from interactive object", () => {
    /**
     * stage上のインタラクティブオブジェクトからドラッグを開始すると、イベントをすべて無視する。
     */
    dispatchEvent(
      "pointerdown",
      { offsetX: app.view.width / 2, offsetY: app.view.height / 2 },
      false,
    );
    dispatchEvent("pointermove", undefined, false);
    skipCounter.update();
    dispatchEvent("pointermove", undefined, false);
    skipCounter.reset();
    dispatchEvent("pointermove", undefined, false);

    /**
     * マウスアップしてドラッグを再開すると、反応する
     */
    dispatchEvent("pointerup");
    dispatchEvent("pointerdown");
    dispatchEvent("pointermove");
    dispatchEvent("pointermove", undefined, false);
  });
});
