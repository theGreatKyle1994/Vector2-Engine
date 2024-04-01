import type Scene from "./Scene";

export interface GameConfig {
  scene: Scene;
}

export default class GameInstance {
  private readonly canvas = document.querySelector(
    "canvas"
  ) as HTMLCanvasElement;
  private readonly ctx = this.canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;
  private readonly fps: number = 60;
  private readonly frameInterval: number = 1000 / 60;
  public deltaTime: number = 0;
  private prevTime: number = performance.now();
  private currentScene: Scene;

  constructor(config: GameConfig) {
    this.currentScene = config.scene;
    this.init();
  }

  private updateCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.currentScene.update(this.ctx, this.deltaTime);
  }

  private gameLoop(): void {
    const currTime = performance.now();
    this.deltaTime = (currTime - this.prevTime) / this.frameInterval;
    this.prevTime = currTime;
    this.updateCanvas();
    setTimeout(() => this.gameLoop(), 1000 / this.fps);
  }

  private init(): void {
    setTimeout(() => this.gameLoop(), 100);
  }
}
