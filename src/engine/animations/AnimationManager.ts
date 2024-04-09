import Animation from "./Animation";

export default class AnimationManager {
  private animations: Array<Animation> = [];

  public newAnimation(animCfg: AnimConfig): void {
    this.animations.push(new Animation(animCfg));
  }
}
