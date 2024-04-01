import Vector2 from "../Vector2";
import type { Vector2Snippet } from "../Vector2";

export default class Polygon {
  public color: string;
  public vertices: Vector2[];
  public rotation: number = 0;
  #rotationDelta: number = 0;
  public rotationAngle: number = 0;
  public isRotating: boolean = false;
  public velocity: Vector2 = new Vector2();
  constructor(vertices: Vector2Snippet[], color: string = "black") {
    this.vertices = this.createVertices(vertices);
    this.color = color;
  }
  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    for (let i = 0; i < this.vertices.length; i++) {
      ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
    }
    ctx.strokeStyle = this.color;
    ctx.closePath();
    ctx.stroke();
  }
  public update(deltaTime: number): void {
    if (this.isRotating && this.#rotationDelta !== 0) this.rotate(deltaTime);
    // this.pos.x += this.velocity.x * deltaTime;
    // this.pos.y += this.velocity.y * deltaTime;
  }
  protected createVertices(verts: Vector2Snippet[]): Vector2[] {
    const createdVerts: Vector2[] = [];
    for (let i = 0; i < verts.length; i++) {
      createdVerts.push(new Vector2({ x: verts[i].x, y: verts[i].y }));
    }
    return createdVerts;
  }
  protected rotate(deltaTime: number): void {
    this.checkCurrentRotation();
    this.#rotationDelta = this.rotationAngle * deltaTime;
    this.vertices = this.rotateMatrix(this.#rotationDelta);
  }
  public setRotation(angle: number): void {
    this.rotationAngle = angle;
    this.checkCurrentRotation();
    this.#rotationDelta = this.rotationAngle;
    this.vertices = this.rotateMatrix(this.#rotationDelta);
  }
  public setIsRotating(isRotating: boolean): void {
    this.isRotating = isRotating;
  }
  protected checkCurrentRotation(): void {
    this.rotation += this.rotationAngle;
    while (this.rotation > 360) {
      this.rotation -= 360;
    }
  }
  protected rotateMatrix(angle: number): Vector2[] {
    const radians: number = (angle * Math.PI) / 180;
    const center: Vector2 = this.getCenterOrigin();
    const rotatedVerts: Vector2[] = [];
    for (let i = 0; i < this.vertices.length; i++) {
      rotatedVerts.push(
        new Vector2({
          x:
            (this.vertices[i].x - center.x) * Math.cos(radians) -
            (this.vertices[i].y - center.y) * Math.sin(radians) +
            center.x,
          y:
            (this.vertices[i].y - center.y) * Math.cos(radians) +
            (this.vertices[i].x - center.x) * Math.sin(radians) +
            center.y,
        })
      );
    }
    return rotatedVerts;
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
}
