import Rectangle from "./physics/primitives/Rectangle";
import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    const box = this.add(new Rectangle(300, 300, 100, 100), "box");
    const box2 = this.add(new Rectangle(600, 600, 100, 100), "box2");
  }
}

new GameInstance({ scene: new myScene() });
