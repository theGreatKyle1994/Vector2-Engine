import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Triangle from "./physics/primitives/Triangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const tri = this.add(new Triangle(400, 400, 400, 400), "tri");
    tri.setRotation(180);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
