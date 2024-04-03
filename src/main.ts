import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Triangle from "./physics/primitives/Triangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const tri = this.add(new Triangle(150, 150, 100), "tri");
    tri.setIsRotating(true);
    tri.setFixedRotation(180);
    // tri.setRotation(1);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
