export default class Animation {
  private object: Shape;
  private isLooping: boolean;
  private delay: number;
  private stopTime: number;
  private action: () => void;
  private actionType: String;
  private translateSteps: Array<TranslateAnimPlot>;

  constructor(animCfg: AnimConfig) {
    this.object = animCfg.object;
    this.isLooping = animCfg.isLooping || false;
    this.delay = animCfg.delay || 1000;
    this.stopTime = animCfg.stopTime || this.delay;
    this.action = animCfg.action || function () {};
    this.actionType = animCfg.actionType || "";
    this.translateSteps = animCfg.translateSteps || [];
    this.startAnimation();
  }

  private startAnimation(): void {
    let index: number = 0;
    const animationIteration = () => {
      this.action();
      if (this.actionType) {
        switch (this.actionType) {
          case "translate": {
            this.object.setTransform(
              this.translateSteps[index].from.x,
              this.translateSteps[index].from.y
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
    const animIterval = setInterval(() => {
      animationIteration();
      index++;
      if (index >= this.translateSteps.length) index = 0;
    }, this.delay);
    if (!this.isLooping)
      setTimeout(() => clearInterval(animIterval), this.stopTime);
  }
}
