import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Rectangle from "./physics/primitives/Rectangle";
import Circle from "./physics/primitives/Circle";
import Triangle from "./physics/primitives/Triangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const circle: Circle = this.add(new Circle(150, 150, 25), "circle");
    circle.setRotation(0.5);
    circle.setIsRotating(true);
    circle.setRotationOrigin(400, 400);
    circle.setIsUsingRotationOrigin(true);

    const rect: Rectangle = this.add(new Rectangle(200, 200, 100, 100), "rect");
    rect.setRotation(1);
    rect.setIsRotating(true);
    rect.setRotationOrigin(400, 400);
    rect.setIsUsingRotationOrigin(true);

    const tri: Triangle = this.add(new Triangle(400, 400, 100), "tri");
    tri.setRotation(2);
    tri.setIsRotating(true);
    tri.setRotationOrigin(400, 400);
    tri.setIsUsingRotationOrigin(true);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
