import GeometricShape from "./GeometricShape";
import Vector2 from "../Vector2";
import type { Vector2Snippet } from "../../types/EngineTypes";
import EngineMath from "../EngineMath";

export default class Polygon extends GeometricShape {
  public vertices: Vector2[];

  constructor(
    vertices: [
      Vector2Snippet,
      Vector2Snippet,
      Vector2Snippet,
      ...Vector2Snippet[]
    ]
  ) {
    super(vertices[0].x, vertices[0].y);
    this.vertices = this.createVertices(vertices);
    this.origin = this.getCenterOrigin();
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    this.vertices.forEach((vert) => ctx.lineTo(vert.x, vert.y));
    ctx.closePath();
    ctx.stroke();
  }

  public update(deltaTime: number): void {
    this.origin = this.getCenterOrigin();
    if (this.isRotating && this.rotationDelta !== 0) this.rotate(deltaTime);
  }

  protected rotate(deltaTime: number): void {
    super.rotate(deltaTime);
    this.vertices = this.rotateMatrix(this.rotationDelta);
  }

  private createVertices(verts: Vector2Snippet[]): Vector2[] {
    return verts.map((vert) => new Vector2({ x: vert.x, y: vert.y }));
  }

  public setRotation(angle: number): void {
    super.setRotation(angle);
    this.vertices = this.rotateMatrix(this.rotationDelta);
  }

  public setFixedRotation(angle: number): void {
    this.vertices = this.rotateMatrix(angle);
  }

  private rotateMatrix(angle: number): Vector2[] {
    const radians: number = EngineMath.toRadians(angle);
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

  public setFixedTransform(x: number, y: number): void {
    const distX: number = this.vertices[0].x - x;
    const distY: number = this.vertices[0].y - y;
    this.vertices.forEach((vert, i) => {
      if (i === 0) {
        vert.setSelf({ x, y });
      } else vert.subToSelf({ x: distX, y: distY });
    });
  }
}
