import { default as Vector2 } from "../../physics/Vector2";

export default class Animation {
  private object: Shape;
  private isLooping: boolean;
  // private delay: number;
  // private stopTime: number;
  // private action: () => void;
  private actionType: String;
  private translateSteps: Array<TranslateAnimPlot>;

  constructor(animCfg: AnimConfig) {
    this.object = animCfg.object;
    this.isLooping = animCfg.isLooping || false;
    // this.delay = animCfg.delay || 1000;
    // this.stopTime = animCfg.stopTime || this.delay;
    // this.action = animCfg.action || function () {};
    this.actionType = animCfg.actionType || "";
    this.translateSteps = animCfg.translateSteps || [];
    this.startAnimation();
  }

  private startAnimation(): void {
    let index: number = 0;
    const animationIteration = () => {
      // this.action();
      if (this.actionType) {
        switch (this.actionType) {
          case "translate": {
            this.goto(
              this.translateSteps[index].from,
              this.translateSteps[index].to,
              this.translateSteps[index].speed
            );
            break;
          }
          case "rotate": {
            break;
          }
          case "scale": {
            break;
          }
        }
      }
    };
    animationIteration();
    // const animIterval = setInterval(() => {
    //   animationIteration();
    //   index++;
    //   if (index >= this.translateSteps.length) index = 0;
    // }, this.translateSteps[index].speed);
    // if (!this.isLooping)
    //   setTimeout(
    //     () => clearInterval(animIterval),
    //     this.translateSteps[index].speed
    //   );
  }

  private goto(from: Vector2Snippet, to: Vector2Snippet, speed: number): void {
    const speedMultiplier: number = 60 * (speed / 1000);
    const frameInterval: number = 1000 / 60;
    const heading: Vector2 = Vector2.sub(to, from);
    this.object.setFixedTransform(from.x, from.y);
    let currTime: number = 0;
    let prevTime: number = performance.now();
    let deltaTime: number = 0;
    console.log(this.object.vertices[0]);

    const moveToAnim = setInterval((): void => {
      currTime = performance.now();
      deltaTime = (currTime - prevTime) / frameInterval;
      prevTime = currTime;
      const speedX: number = (heading.x / speedMultiplier) * deltaTime;
      const speedY: number = (heading.y / speedMultiplier) * deltaTime;
      this.object.setTransform(speedX, speedY);
    }, frameInterval);
    setTimeout(() => {
      this.object.setFixedTransform(to.x, to.y);
      console.log(this.object.vertices[0]);
      clearInterval(moveToAnim);
    }, speed);
  }
}
