import EngineMath from "../EngineMath";
import GeometricShape from "./GeometricShape";

export default class Circle extends GeometricShape {
  public diameter: number;
  public radius: number;
  private startAngle: number;
  private endAngle: number;
  private counterClock: boolean;

  constructor(
    id: string,
    x: number,
    y: number = x,
    diameter: number = 50,
    startAngle: number = 0,
    endAngle: number = 360,
    counterClock: boolean = false
  ) {
    super(id, x, y);
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

  protected doRotate(angle: number): void {
    super.doRotate(angle);
    if (this.isRotatingFromSelf) {
      this.startAngle += EngineMath.degreesToRadians(
        this.rotationDelta * this.rotationSelfDirection
      );
      this.endAngle += EngineMath.degreesToRadians(
        this.rotationDelta * this.rotationSelfDirection
      );
    }
    if (this.isRotatingFromOrigin)
      this.origin = EngineMath.rotateMatrix(
        angle * this.rotationOriginDirection,
        this.origin,
        this.rotationOrigin
      );
  }

  public setScale(scaler: number): void {
    if (this.isScalingFromSelf) this.diameter *= scaler;
    if (this.isScalingFromOrigin) {
      this.diameter *= scaler;
      this.origin.x =
        scaler * (this.origin.x - this.scaleOrigin.x) + this.scaleOrigin.x;
      this.origin.y =
        scaler * (this.origin.y - this.scaleOrigin.y) + this.scaleOrigin.y;
    }
  }
}
