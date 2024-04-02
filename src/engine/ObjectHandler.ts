import type { Shape } from "../types/EngineTypes";
import type { ObjectListItem } from "../types/EngineTypes";

export default class ObjectHandler {
  private objectList: Array<ObjectListItem> = [];

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    for (let object of this.objectList) object.current.update(deltaTime);
    for (let object of this.objectList) object.current.render(ctx);
  }

  public addObject(newObject: Shape, id: string): void {
    this.objectList.push({ current: newObject, id });
  }

  public getObject(id: string): Shape | undefined {
    for (let i = 0; i < this.objectList.length; i++) {
      if (this.objectList[i].id === id) return this.objectList[i].current;
    }
    return undefined;
  }

  public removeObject(id: string): void {
    const index: number = this.objectList.findIndex((object) => {
      if (object.id === id) return object;
    });
    this.objectList.splice(index, 1);
  }
}
