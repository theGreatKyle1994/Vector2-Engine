import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected init(): void {}
  protected create(): void {
    const myPoly: Rectangle = this.add.rect("rec", 100);
    // const myPoly: Rectangle = this.add.poly("poly", [
    //   { x: 100, y: 100 },
    //   { x: 400, y: 100 },
    //   { x: 500, y: 200 },
    //   { x: 300, y: 500 },
    // ]);
    this.createAnimation({
      object: myPoly,
      isLooping: true,
      actionType: "rotate",
      rotateSteps: [
        { angleFrom: 0, angleTo: 90, speed: 5000 },
        { angleFrom: 90, angleTo: 0, speed: 5000 },
      ],
    });
    // this.createAnimation({
    //   object: myPoly,
    //   isLooping: true,
    //   actionType: "translate",
    //   translateSteps: [
    //     { from: { x: 100, y: 100 }, to: { x: 400, y: 400 }, speed: 5000 },
    //     { from: { x: 400, y: 400 }, to: { x: 100, y: 100 }, speed: 5000 },
    //   ],
    // });
  }
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}

new GameInstance({ scene: new myScene() });
