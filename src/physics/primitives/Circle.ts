import GeometricShape from "./GeometricShape";

export default class Circle extends GeometricShape {
  public diameter: number;
  public radius: number;

  constructor(x: number, y: number, diameter: number) {
    super(x, y);
    this.diameter = diameter;
    this.radius = this.diameter / 2;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.origin.x, this.origin.y, this.diameter, 0, Math.PI * 2);
    ctx.stroke();
  }

  public update(deltaTime: number): void {}
}
