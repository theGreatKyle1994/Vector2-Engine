import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect = this.add.rect("rect", 350);
    const tri = this.add.tri("tri", 650);
    const cir = this.add.circle("cir", 500);
    const poly = this.add.poly("poly", [
      { x: 100, y: 100 },
      { x: 100, y: 200 },
      { x: 400, y: 300 },
      { x: 400, y: 200 },
    ]);
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    const cir = this.get("cir");
  }
}

new GameInstance({ scene: new myScene() });
