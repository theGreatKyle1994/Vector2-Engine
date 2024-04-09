import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const rect = this.add.rect("rect", 300);
    // rect.goto({ x: 400, y: 400 }, 2000);
    this.createAnimation({
      object: rect,
      delay: 100,
      stopTime: 400,
      isLooping: true,
      actionType: "translate",
      action: () => rect.setFixedRotation(Math.random() * 90),
      translateSteps: [
        { from: { x: 50, y: 0 } },
        { from: { x: 50, y: 0 } },
        { from: { x: 0, y: 50 } },
        { from: { x: 0, y: 50 } },
        { from: { x: -50, y: 0 } },
        { from: { x: -50, y: 0 } },
        { from: { x: 0, y: -50 } },
        { from: { x: 0, y: -50 } },
      ],
    });
  }
}

new GameInstance({ scene: new myScene() });
