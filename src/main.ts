import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Circle from "./physics/primitives/Circle";

class myScene extends Scene {
  constructor() {
    super();
  }

  protected create(): void {
    const circle: Circle = this.add(new Circle(100, 100, 50), "circle");
    console.log(circle);
  }
  
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
