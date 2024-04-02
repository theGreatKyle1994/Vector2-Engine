import ObjectHandler from "./ObjectHandler";
import type { Shape } from "../types/EngineTypes";

export default class Scene {
  #objectHandler: ObjectHandler = new ObjectHandler();

  constructor() {
    this.init();
    this.create();
  }

  protected init(): void {}
  protected create(): void {}
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}

  public run(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    this.update(ctx, deltaTime);
    this.#objectHandler.run(ctx, deltaTime);
  }

  public add(object: Shape, id: string): Shape {
    this.#objectHandler.addObject(object, id);
    return object;
  }

  public remove(id: string): void {
    this.#objectHandler.removeObject(id);
  }

  public get(id: string): Shape | undefined {
    return this.#objectHandler.getObject(id);
  }
}
