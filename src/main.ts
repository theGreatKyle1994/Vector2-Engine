import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected init(): void {}
  protected create(): void {
    this.add.tri("tri", 100, 100, 50);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
