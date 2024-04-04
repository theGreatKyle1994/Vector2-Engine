import Vector2 from "../Vector2";

export default abstract class GeometricShape {
  public origin: Vector2;

  constructor(x: number, y: number) {
    this.origin = new Vector2({ x, y });
  }

  public render(ctx: CanvasRenderingContext2D): void {}

  public update(deltaTime: number): void {}

  public setTransform(x: number, y: number): void {
    this.origin.addToSelf({ x, y });
  }

  public setStaticTransform(x: number, y: number): void {
    this.origin = new Vector2({ x, y });
  }
}
