import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import { default as Vector2 } from "./physics/Vector2";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected init(): void {}
  protected create(): void {
    const myVec: Vector2 = new Vector2({ x: 0, y: 10 });
    // myVec.flipSelf();
    console.log(Vector2.flip(myVec));
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
