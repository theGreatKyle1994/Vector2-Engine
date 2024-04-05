import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Rectangle from "./physics/primitives/Rectangle";
import Circle from "./physics/primitives/Circle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const circle: Circle = this.add(new Circle(200, 200, 50, 90), "circle");
    circle.setRotation(1.1);
    circle.setRotationOrigin(400, 400);
    circle.setIsRotatingFromOrigin(true);
    console.log(circle);
    const rect: Rectangle = this.add(new Rectangle(300, 300, 100, 100), "box");
    rect.setRotation(-1);
    rect.setRotationOrigin(400, 400);
    rect.setIsRotatingFromOrigin(true);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
