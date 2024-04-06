import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Rectangle from "./physics/primitives/Rectangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect: Rectangle = this.add(new Rectangle(200, 200, 100, 100), "rect");
    rect.setRotationConfig({
      origin: {
        source: { x: 400, y: 400 },
        use: true,
        directionScaler: -2,
      },
      self: {
        use: true,
        directionScaler: 1,
      },
      angle: 1,
    });
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
