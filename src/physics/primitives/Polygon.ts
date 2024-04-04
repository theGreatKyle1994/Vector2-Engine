import GeometricShape from "./GeometricShape";
import Vector2 from "../Vector2";
import type { Vector2Snippet } from "../../types/EngineTypes";

export default class Polygon extends GeometricShape {
  public vertices: Vector2[];
  public rotation: number = 0;
  public rotationDelta: number = 0;
  public rotationAngle: number = 0;
  public rotationOrigin: Vector2;
  private isRotating: boolean = false;
  private isUsingRotationOrigin: boolean = false;

  constructor(
    vertices: [
      Vector2Snippet,
      Vector2Snippet,
      Vector2Snippet,
      ...Vector2Snippet[]
    ],
    color: string = "black"
  ) {
    super(vertices[0].x, vertices[0].y, color);
    this.vertices = this.createVertices(vertices);
    this.origin = this.getCenterOrigin();
    this.rotationOrigin = this.origin;
    this.color = color;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    this.vertices.forEach((vert) => ctx.lineTo(vert.x, vert.y));
    ctx.strokeStyle = this.color;
    ctx.closePath();
    ctx.stroke();
  }

  public update(deltaTime: number): void {
    this.origin = this.getCenterOrigin();
    if (this.isRotating && this.rotationDelta !== 0) this.rotate(deltaTime);
  }

  private createVertices(verts: Vector2Snippet[]): Vector2[] {
    return verts.map((vert) => new Vector2({ x: vert.x, y: vert.y }));
  }

  private rotate(deltaTime: number): void {
    this.checkCurrentRotation();
    this.rotationDelta = this.rotationAngle * deltaTime;
    this.vertices = this.rotateMatrix(this.rotationDelta);
  }

  public setRotation(angle: number): void {
    this.rotationAngle = angle;
    this.checkCurrentRotation();
    this.rotationDelta = this.rotationAngle;
    this.vertices = this.rotateMatrix(this.rotationDelta);
  }

  public setFixedRotation(angle: number): void {
    this.vertices = this.rotateMatrix(angle);
  }

  public setIsRotating(isRotating: boolean): void {
    this.isRotating = isRotating;
  }

  public setRotationOrigin(x: number, y: number): void {
    this.rotationOrigin = new Vector2({ x, y });
  }

  public setIsUsingRotationOrigin(isUsingOrigin: boolean): void {
    this.isUsingRotationOrigin = isUsingOrigin;
  }

  private checkCurrentRotation(): void {
    this.rotation += this.rotationAngle;
    while (this.rotation > 360) {
      this.rotation -= 360;
    }
  }

  private rotateMatrix(angle: number): Vector2[] {
    const radians: number = (angle * Math.PI) / 180;
    const center: Vector2 = this.isUsingRotationOrigin
      ? this.rotationOrigin
      : this.getCenterOrigin();
    return this.vertices.map(
      (vert) =>
        new Vector2({
          x:
            (vert.x - center.x) * Math.cos(radians) -
            (vert.y - center.y) * Math.sin(radians) +
            center.x,
          y:
            (vert.y - center.y) * Math.cos(radians) +
            (vert.x - center.x) * Math.sin(radians) +
            center.y,
        })
    );
  }

  public getCenterOrigin(): Vector2 {
    let centerX: number = 0;
    let centerY: number = 0;
    this.vertices.forEach((vert) => {
      centerX += vert.x;
      centerY += vert.y;
    });
    return new Vector2({
      x: centerX / this.vertices.length,
      y: centerY / this.vertices.length,
    });
  }

  protected getEdges(): Vector2[] {
    const edges: Vector2[] = [];
    for (let i = 0; i < this.vertices.length; i++) {
      edges.push(
        new Vector2({
          x:
            Math.abs(
              this.vertices[i].x +
                this.vertices[i !== this.vertices.length - 1 ? i + 1 : 0].x
            ) / 2,
          y:
            Math.abs(
              this.vertices[i].y +
                this.vertices[i !== this.vertices.length - 1 ? i + 1 : 0].y
            ) / 2,
        })
      );
    }
    return edges;
  }

  public setTransform(x: number, y: number): void {
    this.vertices.forEach((vert) => vert.addToSelf({ x, y }));
  }

  public setStaticTransform(x: number, y: number): void {
    const distX: number = this.vertices[0].x - x;
    const distY: number = this.vertices[0].y - y;
    this.vertices.forEach((vert, i) => {
      if (i === 0) {
        vert.setSelf({ x, y });
      } else vert.subToSelf({ x: distX, y: distY });
    });
  }
}
