import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import Rectangle from "./physics/primitives/Rectangle";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect: Rectangle = this.add(new Rectangle(300, 300, 100, 100), "box");
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
