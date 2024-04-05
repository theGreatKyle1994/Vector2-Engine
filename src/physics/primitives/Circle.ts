import EngineMath from "../EngineMath";
import GeometricShape from "./GeometricShape";

export default class Circle extends GeometricShape {
  public diameter: number;
  public radius: number;
  private startAngle: number;
  private endAngle: number;
  private counterClock: boolean;

  constructor(
    x: number,
    y: number,
    diameter: number,
    startAngle: number = 0,
    endAngle: number = 360,
    counterClock: boolean = false
  ) {
    super(x, y);
    this.diameter = diameter;
    this.radius = this.diameter / 2;
    this.startAngle = EngineMath.degreesToRadians(startAngle);
    this.endAngle = EngineMath.degreesToRadians(endAngle);
    this.counterClock = counterClock;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(
      this.origin.x,
      this.origin.y,
      this.diameter,
      this.startAngle,
      this.endAngle,
      this.counterClock
    );
    ctx.stroke();
  }
}
