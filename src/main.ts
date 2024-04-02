import Rectangle from "./physics/primitives/Rectangle";
import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Polygon from "./physics/primitives/Polygon";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const tri = this.add(
      new Polygon([
        { x: 100, y: 200 },
        { x: 100, y: 400 },
        { x: 300, y: 400 },
      ]),
      "tri"
    );
    tri.setIsRotating(true);
    tri.setRotation(1);
    tri.setRotationOrigin(400, 400);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
