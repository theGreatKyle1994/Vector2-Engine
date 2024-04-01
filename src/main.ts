import GameInstance from "./engine/GameInstance";
import Scene from "./engine/Scene";
import Rectangle from "./physics/primitives/Rectangle";
import type { GameConfig } from "./engine/GameInstance";

const box: Rectangle = new Rectangle(0, 0, 100, 100);

class myScene extends Scene {
  constructor() {
    super();
  }
  protected create(): void {
    this.add(box, "box");
    box.setRotation(1);
    box.setIsRotating(true);
  }
}

const config: GameConfig = {
  scene: new myScene(),
};

new GameInstance(config);
