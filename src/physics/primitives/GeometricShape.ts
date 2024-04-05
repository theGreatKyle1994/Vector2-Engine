import EngineMath from "../EngineMath";
import Vector2 from "../Vector2";

export default abstract class GeometricShape {
  public origin: Vector2;
  public rotation: number = 0;
  protected rotationDelta: number = 0;
  public rotationAngle: number = 0;
  public rotationOrigin: Vector2;
  public isRotating: boolean = false;
  public isUsingRotationOrigin: boolean = false;

  constructor(x: number, y: number) {
    this.origin = new Vector2({ x, y });
    this.rotationOrigin = this.origin;
  }

  public render(ctx: CanvasRenderingContext2D): void {}

  public update(deltaTime: number): void {
    if (this.isRotating && this.rotationDelta !== 0) this.rotate(deltaTime);
  }

  protected rotate(deltaTime: number): void {
    this.checkCurrentRotation();
    this.rotationDelta = this.rotationAngle * deltaTime;
    this.doRotate(this.rotationDelta);
  }

  protected doRotate(angle: number): void {
    this.origin = EngineMath.rotateMatrix(
      angle,
      this.origin,
      this.getRotationOrigin()
    );
  }

  private checkCurrentRotation(): void {
    this.rotation += this.rotationAngle;
    while (this.rotation > 360) {
      this.rotation -= 360;
    }
  }

  public setRotation(angle: number): void {
    this.rotationAngle = angle;
    this.checkCurrentRotation();
    this.rotationDelta = this.rotationAngle;
    this.doRotate(angle);
  }

  public setFixedRotation(angle: number): void {
    this.doRotate(angle);
  }

  public setIsRotating(isRotating: boolean): void {
    this.isRotating = isRotating;
  }

  public setRotationOrigin(x: number, y: number): void {
    this.rotationOrigin.setSelf({ x, y });
  }

  public setIsUsingRotationOrigin(isUsingOrigin: boolean): void {
    this.isUsingRotationOrigin = isUsingOrigin;
  }

  public getCenterOrigin(): Vector2 {
    return this.origin;
  }

  public getRotationOrigin(): Vector2 {
    return this.isUsingRotationOrigin
      ? this.rotationOrigin
      : this.getCenterOrigin();
  }

  public setTransform(x: number, y: number): void {
    this.origin.addToSelf({ x, y });
  }

  public setFixedTransform(x: number, y: number): void {
    this.origin = new Vector2({ x, y });
  }
}
