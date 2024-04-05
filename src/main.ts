import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Circle from "./physics/primitives/Circle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const circle: Circle = this.add(
      new Circle(300, 300, 100, 100, 360, true),
      "circle"
    );
    circle.setRotation(1);
    circle.setRotationOrigin(400, 400);
    circle.setIsRotatingFromOrigin(true);
    circle.setOriginRotationMult(-2);
    circle.setSelfRotationMult(-4);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
