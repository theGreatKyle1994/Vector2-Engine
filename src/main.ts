import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect = this.add.rect("rect", 200);
    rect.setColorConfig({
      color: "green",
      borderColor: "red",
      borderWidth: 10,
    });
    rect.setRotationConfig({
      origin: {
        source: { x: 400, y: 400 },
        use: true,
        directionScaler: 1,
      },
      self: {
        use: true,
        directionScaler: -2,
      },
      angle: 1,
    });
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
