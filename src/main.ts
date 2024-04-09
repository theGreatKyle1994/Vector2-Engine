import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect = this.add.rect("rect", 100);
    this.createAnimation({
      delay: 1000,
      actionType: "translate",
      object: rect,
    });
  }
}

new GameInstance({ scene: new myScene() });
