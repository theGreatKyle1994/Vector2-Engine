import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
// import Rectangle from "./physics/primitives/Rectangle";
import Circle from "./physics/primitives/Circle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const circle: Circle = this.add(new Circle(150, 150, 100, 90), "circle");
    circle.setRotation(1);
    circle.setIsRotating(true);
    circle.setRotationOrigin(400, 400);
    circle.setIsUsingRotationOrigin(true);
    console.log(circle);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
