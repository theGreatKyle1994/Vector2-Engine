export default class ObjectHandler {
  private objectList: Array<Shape> = [];

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    for (let object of this.objectList) object.update(deltaTime);
    for (let object of this.objectList) object.render(ctx);
  }

  public addObject<T extends Shape>(newObject: T): void {
    this.objectList.push(newObject);
  }

  public getObject<T extends Shape>(id: string): T {
    for (let i = 0; i < this.objectList.length; i++) {
      if (this.objectList[i].id === id) return <T>this.objectList[i];
    }
    throw new Error(`" ${id} " not found in object list.`);
  }

  public removeObject(id: string): void {
    const index: number = this.objectList.findIndex((obj) => {
      if (obj.id === id) return obj;
    });
    this.objectList.splice(index, 1);
  }
}
