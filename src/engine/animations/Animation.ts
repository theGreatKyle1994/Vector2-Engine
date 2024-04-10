import { default as Vector2 } from "../../physics/Vector2";

export default class Animation {
  private object: Shape;
  private isLooping: boolean;
  private actionType: String;
  private translateSteps: Array<TranslateAnimPlot>;

  constructor(animCfg: AnimConfig) {
    this.object = animCfg.object;
    this.isLooping = animCfg.isLooping || false;
    this.actionType = animCfg.actionType || "";
    this.translateSteps = animCfg.translateSteps || [];
    this.startAnimation();
  }

  private startAnimation(): void {
    let index: number = 0;
    const animationIteration = () => {
      if (this.actionType) {
        switch (this.actionType) {
          case "translate": {
            this.gotoTranslate(
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
      setTimeout((): void => {
        index++;
        if (index == this.translateSteps.length && this.isLooping) index = 0;
        if (index < this.translateSteps.length) animationIteration();
      }, this.translateSteps[index].speed);
    };
    animationIteration();
  }

  private gotoTranslate(
    from: Vector2Snippet,
    to: Vector2Snippet,
    speed: number
  ): void {
    this.object.setFixedTranslate(from.x, from.y);
    const speedMultiplier: number = 60 * (speed / 1000);
    const frameInterval: number = 1000 / 60;
    const heading: Vector2 = Vector2.sub(to, from);
    let currTime: number = 0;
    let prevTime: number = performance.now();
    let deltaTime: number = 0;

    const moveToAnim = setInterval((): void => {
      currTime = performance.now();
      deltaTime = (currTime - prevTime) / frameInterval;
      prevTime = currTime;
      const speedX: number = (heading.x / speedMultiplier) * deltaTime;
      const speedY: number = (heading.y / speedMultiplier) * deltaTime;
      this.object.setTranslate(speedX, speedY);
    }, frameInterval);
    setTimeout(() => {
      this.object.setFixedTranslate(to.x, to.y);
      clearInterval(moveToAnim);
    }, speed);
  }
}
