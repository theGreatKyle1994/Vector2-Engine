import Polygon from "../physics/primitives/Polygon";
import Rectangle from "../physics/primitives/Rectangle";
import ObjectHandler from "./ObjectHandler";

export default class Scene {
  protected objectHandler = new ObjectHandler();

  constructor() {
    this.init();
    this.create();
  }

  protected init(): void {}
  protected create(): void {}

  public update(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    this.objectHandler.run(ctx, deltaTime);
  }

  public add(object: Polygon | Rectangle, id: string): void {
    this.objectHandler.addObject(object, id);
  }

  public remove(id: string): void {
    this.objectHandler.removeObject(id);
  }
}
