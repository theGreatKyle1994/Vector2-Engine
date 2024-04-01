import type Polygon from "../physics/primitives/Polygon";
import type Rectangle from "../physics/primitives/Rectangle";

export default class ObjectHandler {
  #objectList: Array<Polygon | Rectangle> = [];

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    for (let object of this.#objectList) object.update(deltaTime);
    for (let object of this.#objectList) object.render(ctx);
  }

  public addObjects(newObject: Polygon | Rectangle): void {
    this.#objectList.push(newObject);
  }
}
