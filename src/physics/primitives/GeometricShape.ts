import EngineMath from "../EngineMath";
import { default as Vector2 } from "../Vector2";

export default abstract class GeometricShapeBase {
  public id: string;
  public color: string = "transparent";
  public borderColor: string = "black";
  public borderWidth: number = 1;
  public isUsingBorder: boolean = true;
  public origin: Vector2;
  public rotation: number = 0;
  public rotationSelfDirection: number = 1;
  public rotationOriginDirection: number = 1;
  public rotationAngle: number = 0;
  public rotationOrigin: Vector2;
  public isRotatingFromSelf: boolean = true;
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

  public render(ctx: CanvasRenderingContext2D): void {
    if (this.isUsingBorder) {
      ctx.lineWidth = this.borderWidth;
      ctx.strokeStyle = this.borderColor;
      ctx.stroke();
    }
    ctx.fillStyle = this.color;
    ctx.fill();
  }

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

  public setFixedRotation(angle: number, isFixed: boolean = true): void {
    if (!isFixed) {
      this.rotationAngle = angle;
      this.checkCurrentRotation();
    } else this.rotationAngle = 0;
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

  public setTranslate(x: number, y: number): void {
    this.origin.addToSelf({ x, y });
  }

  public setFixedTranslate(x: number, y: number): void {
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

  public setColorConfig(colorConfig: ColorConfig): void {
    if (colorConfig) {
      if (colorConfig.color) this.color = colorConfig.color;
      if (typeof colorConfig.useBorder === "boolean")
        this.isUsingBorder = colorConfig.useBorder;
      if (this.isUsingBorder) {
        if (colorConfig.borderWidth) this.borderWidth = colorConfig.borderWidth;
        if (colorConfig.borderColor) this.borderColor = colorConfig.borderColor;
      }
    }
  }
}
