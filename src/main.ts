import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
import { default as Vector2 } from "./physics/Vector2";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected init(): void {}
  protected create(): void {
    const myVec: Vector2 = new Vector2({ x: 2, y: 3 });
    const myVec2: Vector2 = new Vector2({ x: 2, y: 2 });
    console.log(Vector2.componentProduct(myVec, myVec2));
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
