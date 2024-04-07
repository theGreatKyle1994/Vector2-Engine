import Rectangle from "../physics/primitives/Rectangle";
import Circle from "../physics/primitives/Circle";
import Triangle from "../physics/primitives/Triangle";
import Polygon from "../physics/primitives/Polygon";
import ObjectHandler from "./ObjectHandler";

export default class Scene {
  private objectHandler: ObjectHandler = new ObjectHandler();

  constructor() {
    this.init();
    this.create();
  }

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

  protected init(): void {}
  protected create(): void {}
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    this.update(ctx, deltaTime);
    this.objectHandler.run(ctx, deltaTime);
  }

  private addObject<T extends Shape>(object: T): T {
    this.objectHandler.addObject(object);
    return object;
  }

  public remove(id: string): void {
    this.objectHandler.removeObject(id);
  }

  public get<T extends Shape>(id: string): T {
    return this.objectHandler.getObject(id);
  }
}
