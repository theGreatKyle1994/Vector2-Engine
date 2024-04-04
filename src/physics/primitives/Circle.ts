import GeometricShape from "./GeometricShape";
import Vector2 from "../Vector2";

export default class Circle extends GeometricShape {
  public pos: Vector2;
  public size: number;
  public color: string;

  constructor(x: number, y: number, size: number, color: string = "black") {
    super(x, y, color);
    this.pos = new Vector2({ x, y });
    this.size = size;
    this.color = color;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }

  public update(deltaTime: number): void {}
}
