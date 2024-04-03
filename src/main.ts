import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Triangle from "./physics/primitives/Triangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const tri = this.add(new Triangle(100, 100, 100, 100), "tri");
    console.log(tri.vertices);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
