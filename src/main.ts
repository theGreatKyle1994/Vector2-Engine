import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Circle from "./physics/primitives/Circle";
import Rectangle from "./physics/primitives/Rectangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect: Rectangle = this.add(new Rectangle(450, 350, 100, 100), "rect");
    rect.setScaleOrigin(400, 400);
    rect.isScalingFromOrigin = true;
    rect.isScalingFromSelf = false;
    rect.setScale(1.5);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
