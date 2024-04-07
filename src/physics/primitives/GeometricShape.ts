import EngineMath from "../EngineMath";
import Vector2 from "../Vector2";

export default abstract class GeometricShape {
  public id: string;
  public origin: Vector2;
  public rotation: number = 0;
  public rotationSelfDirection: number = 1;
  public rotationOriginDirection: number = 1;
  public rotationAngle: number = 0;
  public rotationOrigin: Vector2;
  public isRotatingFromSelf: boolean = false;
  public isRotatingFromOrigin: boolean = false;
  protected rotationDelta: number = 0;
  public scale: number = 1;
  public scaleOrigin: Vector2;
  protected isScalingFromSelf: boolean = false;
  protected isScalingFromOrigin: boolean = false;

  constructor(id: string, x: number, y: number = x) {
    this.id = id;
    this.origin = new Vector2({ x, y });
    this.rotationOrigin = this.origin;
    this.scaleOrigin = new Vector2({ x: this.origin.x, y: this.origin.y });
  }

  public render(ctx: CanvasRenderingContext2D): void {}

  public update(deltaTime: number): void {
    if (
      (this.isRotatingFromSelf || this.isRotatingFromOrigin) &&
      this.rotationDelta !== 0
    )
      this.rotate(deltaTime);
    this.scaleOrigin = this.getCenterOrigin();
  }

  public getCenterOrigin(): Vector2 {
    return this.origin;
  }

  protected rotate(deltaTime: number): void {
    this.checkCurrentRotation();
    this.rotationDelta = this.rotationAngle * deltaTime;
    this.doRotate(this.rotationDelta);
  }

  protected doRotate(angle: number): void {
    this.origin = EngineMath.rotateMatrix(
      angle * this.rotationOriginDirection,
      this.origin,
      this.origin
    );
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

  public setRotationOrigin(x: number, y: number): void {
    this.rotationOrigin.setSelf({ x, y });
  }

  private checkCurrentRotation(): void {
    this.rotation += this.rotationAngle;
    while (this.rotation > 360) this.rotation -= 360;
  }

  public setSelfRotationMult(mult: number): void {
    this.rotationSelfDirection = mult;
  }

  public setOriginRotationMult(mult: number): void {
    this.rotationOriginDirection = mult;
  }

  public setRotationConfig(rotationConfig: RotationConfig): void {
    if (rotationConfig.origin) {
      if (rotationConfig.origin.source) {
        this.setRotationOrigin(
          rotationConfig.origin.source.x,
          rotationConfig.origin.source.y
        );
      }
      if (typeof rotationConfig.origin.use === "boolean")
        this.isRotatingFromOrigin = rotationConfig.origin.use;
      if (typeof rotationConfig.origin.directionScaler === "number")
        this.setOriginRotationMult(rotationConfig.origin.directionScaler);
    }
    if (rotationConfig.self) {
      if (typeof rotationConfig.self.use === "boolean")
        this.isRotatingFromSelf = rotationConfig.self.use;
      if (typeof rotationConfig.self.directionScaler === "number")
        this.setSelfRotationMult(rotationConfig.self.directionScaler);
    }
    if (typeof rotationConfig.angle === "number")
      this.setRotation(rotationConfig.angle);
  }

  public setTransform(x: number, y: number): void {
    this.origin.addToSelf({ x, y });
  }

  public setFixedTransform(x: number, y: number): void {
    this.origin.setSelf({ x, y });
  }

  public setScale(scaler: number): void {
    if (this.isScalingFromOrigin) {
      this.scale = scaler;
      this.origin.multToSelf(this.scale);
    }
  }

  public setScaleOrigin(x: number, y: number): void {
    this.scaleOrigin.setSelf({ x, y });
  }

  public setScaleConfig(scaleConfig: ScaleConfig): void {
    if (scaleConfig.origin) {
      if (scaleConfig.origin.source)
        this.setScaleOrigin(
          scaleConfig.origin.source.x,
          scaleConfig.origin.source.y
        );
      if (typeof scaleConfig.origin.use === "boolean")
        this.isScalingFromOrigin = scaleConfig.origin.use;
    }
    if (scaleConfig.self) {
      if (typeof scaleConfig.self?.use === "boolean")
        this.isScalingFromSelf = scaleConfig.self.use;
    }
    if (typeof scaleConfig.scale === "number") this.setScale(scaleConfig.scale);
  }
}
