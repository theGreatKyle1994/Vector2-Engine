import Rectangle from "../physics/primitives/Rectangle";
import Circle from "../physics/primitives/Circle";
import Triangle from "../physics/primitives/Triangle";
import Polygon from "../physics/primitives/Polygon";

export default class Scene {
  private objectList: Array<Shape> = [];

  constructor() {
    this.init();
    this.create();
  }

  protected init(): void {}
  protected create(): void {}
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}

  public readonly add = {
    rect: (
      id: string,
      x: number,
      y?: number,
      width?: number,
      height?: number
    ): Rectangle => this.addObject(new Rectangle(id, x, y, width, height)),
    circle: (
      id: string,
      x: number,
      y?: number,
      diameter?: number,
      startAngle?: number,
      endAngle?: number,
      counterClock?: boolean
    ): Circle =>
      this.addObject(
        new Circle(id, x, y, diameter, startAngle, endAngle, counterClock)
      ),
    tri: (id: string, x: number, y?: number, size?: number): Triangle =>
      this.addObject(new Triangle(id, x, y, size)),
    poly: (
      id: string,
      vertices: [
        Vector2Snippet,
        Vector2Snippet,
        Vector2Snippet,
        ...Vector2Snippet[]
      ]
    ): Polygon => this.addObject(new Polygon(id, vertices)),
  };

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    this.update(ctx, deltaTime);
    for (let object of this.objectList) object.update(deltaTime);
    for (let object of this.objectList) object.render(ctx);
  }

  public addObject<T extends Shape>(newObject: T): T {
    this.objectList.push(newObject);
    return newObject;
  }

  public remove(id: string): void {
    const index: number = this.objectList.findIndex((obj) => {
      if (obj.id === id) return obj;
    });
    this.objectList.splice(index, 1);
  }

  public get<T>(id: string): T {
    for (let i = 0; i < this.objectList.length; i++)
      if (this.objectList[i].id === id) return <T>this.objectList[i];
    throw new Error(`" ${id} " not found in object list.`);
  }
}
