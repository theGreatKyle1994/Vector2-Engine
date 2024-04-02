import Rectangle from "./physics/primitives/Rectangle";
import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const box = this.add(new Rectangle(200, 200, 100, 100), "box");
    box.setIsRotating(true);
    box.setRotation(1);
    box.setRotationOrigin({ x: 400, y: 400 });
    console.log(box);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    const box = this.get("box");
  }
}

new GameInstance({ scene: new myScene() });
