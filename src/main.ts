import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Triangle from "./physics/primitives/Triangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const tri = this.add(new Triangle(600, 600, 100), "tri");
    tri.setStaticTransform(50, 0);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
