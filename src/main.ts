import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect = this.add.rect("rect", 0);
    this.createAnimation({
      object: rect,
      isLooping: true,
      actionType: "translate",
      translateSteps: [
        { from: { x: 0, y: 0 }, to: { x: 700, y: 0 }, speed: 5000 },
        { from: { x: 700, y: 0 }, to: { x: 0, y: 700 }, speed: 5000 },
        { from: { x: 0, y: 700 }, to: { x: 0, y: 0 }, speed: 5000 },
      ],
    });
    // setTimeout(() => this.remove("rect"), 1000);
  }
}

new GameInstance({ scene: new myScene() });
