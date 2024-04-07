export default class ObjectHandler {
  private objectList: Array<ObjectListItem> = [];

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    for (let object of this.objectList) object.current.update(deltaTime);
    for (let object of this.objectList) object.current.render(ctx);
  }

  public addObject<T>(newObject: T, id: string): void {
    this.objectList.push({ current: newObject, id });
  }

  public getObject<T>(id: string): T | undefined {
    for (let obj of this.objectList) {
      if (obj.id === id) return obj.current;
    }
    return undefined;
  }

  public removeObject(id: string): void {
    const index: number = this.objectList.findIndex((obj) => {
      if (obj.id === id) return obj;
    });
    this.objectList.splice(index, 1);
  }
}
