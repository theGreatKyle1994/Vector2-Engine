import { default as Vector2 } from "../../physics/Vector2";
import EngineMath from "../../physics/EngineMath";

export default class Animation {
  private object: Shape;
  private isLooping: boolean;
  private actionType: String;
  private translateSteps: Array<TranslateAnimPlot>;
  private rotateSteps: Array<RotateAnimPlot>;

  constructor(animCfg: AnimConfig) {
    this.object = animCfg.object;
    this.isLooping = animCfg.isLooping || false;
    this.actionType = animCfg.actionType || "";
    this.translateSteps = animCfg.translateSteps || [];
    this.rotateSteps = animCfg.rotateSteps || [];
    this.startAnimation();
  }

  private startAnimation(): void {
    let index: number = 0;
    const doAnimation = (
      steps: Array<TranslateAnimPlot> | Array<RotateAnimPlot>
    ): void => {
      setTimeout((): void => {
        index++;
        if (index == steps.length && this.isLooping) index = 0;
        if (index < steps.length) animationIteration();
      }, steps[index].speed);
    };
    const animationIteration = (): void => {
      if (this.actionType) {
        switch (this.actionType) {
          case "translate": {
            this.gotoTranslate(
              this.translateSteps[index].from,
              this.translateSteps[index].to,
              this.translateSteps[index].speed
            );
            doAnimation(this.translateSteps);
            break;
          }
          case "rotate": {
            this.gotoRotate(
              this.rotateSteps[index].angleFrom,
              this.rotateSteps[index].angleTo,
              this.rotateSteps[index].speed
            );
            doAnimation(this.rotateSteps);
            break;
          }
          case "scale": {
            break;
          }
        }
      }
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

    const moveToAnim: number = setInterval((): void => {
      currTime = performance.now();
      deltaTime = (currTime - prevTime) / frameInterval;
      prevTime = currTime;
      const speedX: number = (heading.x / speedMultiplier) * deltaTime;
      const speedY: number = (heading.y / speedMultiplier) * deltaTime;
      this.object.setTranslate(speedX, speedY);
    }, frameInterval);

    setTimeout((): void => {
      this.object.setFixedTranslate(to.x, to.y);
      clearInterval(moveToAnim);
    }, speed);
  }

  private gotoRotate(angleFrom: number, angleTo: number, speed: number): void {
    this.object.setFixedRotation(angleFrom - this.object.rotation, false);
    const speedMultiplier: number = 60 * (speed / 1000);
    const frameInterval: number = 1000 / 60;
    let currTime: number = 0;
    let prevTime: number = performance.now();
    let deltaTime: number = 0;

    const rotateToAnim: number = setInterval((): void => {
      currTime = performance.now();
      deltaTime = (currTime - prevTime) / frameInterval;
      prevTime = currTime;
      const rotate: number =
        ((angleTo - angleFrom) / speedMultiplier) * deltaTime;
      this.object.setFixedRotation(rotate, false);
    }, frameInterval);

    setTimeout((): void => {
      this.object.setFixedRotation(angleTo - this.object.rotation, false);
      clearInterval(rotateToAnim);
    }, speed);
  }
}
