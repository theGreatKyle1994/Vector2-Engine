export default class ObjectHandler {
  private objectList: Array<any> = [];

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    for (let object of this.objectList) object.update(deltaTime);
    for (let object of this.objectList) object.render(ctx);
  }

  public addObject<T>(newObject: T): void {
    this.objectList.push(newObject);
  }

  public getObject(id: string): Shape {
    for (let i = 0; i < this.objectList.length; i++) {
      if (this.objectList[i].id === id) return this.objectList[i];
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
