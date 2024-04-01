import type Polygon from "../physics/primitives/Polygon";
import type Rectangle from "../physics/primitives/Rectangle";

interface ObjectListItem {
  current: Polygon | Rectangle;
  id: string;
}

export default class ObjectHandler {
  #objectList: Array<ObjectListItem> = [];

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    for (let object of this.#objectList) object.current.update(deltaTime);
    for (let object of this.#objectList) object.current.render(ctx);
  }

  public addObject(newObject: Polygon | Rectangle, id: string): void {
    this.#objectList.push({ current: newObject, id });
  }

  public removeObject(id: string): void {
    console.log(this.#objectList);
    const index: number = this.#objectList.findIndex((object) => {
      if (object.id === id) return object;
    });
    this.#objectList.splice(index, 1);
    console.log(this.#objectList);
  }
}
