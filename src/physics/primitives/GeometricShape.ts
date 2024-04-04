import Vector2 from "../Vector2";

export default abstract class GeometricShape {
  public color: string;
  public origin: Vector2;
  public velocity: Vector2 = new Vector2();

  constructor(x: number, y: number, color: string = "black") {
    this.origin = new Vector2({ x, y });
    this.color = color;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.color;
  }

  public update(deltaTime: number): void {
    this.origin.addToSelf({ x: this.velocity.x, y: this.velocity.y });
  }

  public setTransform(x: number, y: number): void {
    this.origin.addToSelf({ x, y });
  }

  public setStaticTransform(x: number, y: number): void {
    this.origin = new Vector2({ x, y });
  }
}
