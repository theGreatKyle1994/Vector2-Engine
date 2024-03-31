import Vector2 from "../Vector2";

export default class Rectangle {
  public pos: Vector2;
  public width: number;
  public height: number;
  public color: string;
  public vertices: Vector2[];
  public rotation: number = 0;
  public velocity: Vector2 = new Vector2();
  constructor(
    x: number,
    y: number,
    width: number = 10,
    height: number = 10,
    color: string = "black"
  ) {
    this.pos = new Vector2({ x, y });
    this.width = width;
    this.height = height;
    this.color = color;
    this.vertices = this.getVertices();
  }
  public render(ctx: CanvasRenderingContext2D): void {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.beginPath();
    ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
    ctx.lineTo(this.vertices[1].x, this.vertices[1].y);
    ctx.lineTo(this.vertices[2].x, this.vertices[2].y);
    ctx.lineTo(this.vertices[3].x, this.vertices[3].y);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  public update(deltaTime: number): void {
    this.pos.x += this.velocity.x * deltaTime;
    this.pos.y += this.velocity.y * deltaTime;
  }
  public getVertices(): Vector2[] {
    return [
      this.pos,
      new Vector2({ x: this.pos.x + this.width, y: this.pos.y }),
      new Vector2({ x: this.pos.x + this.width, y: this.pos.y + this.height }),
      new Vector2({ x: this.pos.x, y: this.pos.y + this.height }),
    ];
  }
  public getEdges(): Vector2[] {
    const verts: Vector2[] = this.getVertices();
    const edges: Vector2[] = [];
    for (let i = 0; i < verts.length; i++) {
      edges.push(
        new Vector2({
          x: Math.abs(verts[i].x + verts[i !== 3 ? i + 1 : 0].x) / 2,
          y: Math.abs(verts[i].y + verts[i !== 3 ? i + 1 : 0].y) / 2,
        })
      );
    }
    return edges;
  }
  public getCenterOrigin(): Vector2 {
    const vertices: Vector2[] = this.getVertices();
    let centerX: number = 0;
    let centerY: number = 0;
    vertices.forEach((vert) => {
      centerX += vert.x;
      centerY += vert.y;
    });
    return new Vector2({
      x: centerX / vertices.length,
      y: centerY / vertices.length,
    });
  }
  private rotateMatrix(angle: number): Vector2[] {
    const radians: number = (angle * Math.PI) / 180;
    const verts: Vector2[] = this.getVertices();
    const rotatedVerts: Vector2[] = [];
    const center: Vector2 = this.getCenterOrigin();
    for (let i = 0; i < verts.length; i++) {
      rotatedVerts.push(
        new Vector2({
          x:
            (verts[i].x - center.x) * Math.cos(radians) -
            (verts[i].y - center.y) * Math.sin(radians) +
            center.x,
          y:
            (verts[i].y - center.y) * Math.cos(radians) +
            (verts[i].x - center.x) * Math.sin(radians) +
            center.y,
        })
      );
    }
    return rotatedVerts;
  }
  public rotate(angle: number): void {
    this.rotation += angle;
    const rotatedVerts = this.rotateMatrix(this.rotation);
    this.vertices = rotatedVerts;
  }
}
