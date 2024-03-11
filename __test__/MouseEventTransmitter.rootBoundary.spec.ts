import { getMouseEvent } from "@masatomakino/fake-mouse-event";
import { beforeEach, describe, expect, test } from "vitest";
import { generateStage } from "./StageGenerator.js";

describe("MouseEventTransmitter", async () => {
  const { app, canvas, transmitter, spyLog, skipCounter } =
    await generateStage();

  beforeEach(() => {
    transmitter.start();
    skipCounter.reset();
    spyLog.mockClear();
  });

  /**
   * ステージを作成し、rootBoundaryおよびrootTargetの初期化状態を確認する。
   */
  test("init stage and root boundary", () => {
    expect(app.renderer.events.rootBoundary).toBeTruthy();
    expect(app.renderer.events.rootBoundary.rootTarget).toBeFalsy();

    const e = getMouseEvent("wheel", { offsetX: 1, offsetY: 1 });
    app.canvas.dispatchEvent(e);
  });
});
