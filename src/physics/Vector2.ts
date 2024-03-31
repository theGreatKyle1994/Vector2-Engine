interface Vector2Snippet {
  x: number;
  y: number;
}

export default class Vector2 {
  public x: number;
  public y: number;
  constructor(vecIn: Vector2 | Vector2Snippet = { x: 0, y: 0 }) {
    this.x = vecIn.x;
    this.y = vecIn.y;
  }
  public addToSelf(vecIn: Vector2 | Vector2Snippet): void {
    this.x += vecIn.x;
    this.y += vecIn.y;
  }
  public subToSelf(vecIn: Vector2 | Vector2Snippet): void {
    this.x -= vecIn.x;
    this.y -= vecIn.y;
  }
  public multToSelf(scaler: number): void {
    this.x *= scaler;
    this.y *= scaler;
  }
  public divToSelf(scaler: number): void {
    this.x /= scaler;
    this.y /= scaler;
  }
  static add(vec1: Vector2, vec2: Vector2): Vector2 {
    return new Vector2({ x: vec1.x + vec2.x, y: vec1.y + vec2.y });
  }
  static sub(vec1: Vector2, vec2: Vector2): Vector2 {
    return new Vector2({ x: vec1.x - vec2.x, y: vec1.y - vec2.y });
  }
  static mult(vecIn: Vector2, scaler: number): Vector2 {
    return new Vector2({ x: vecIn.x * scaler, y: vecIn.y * scaler });
  }
  static div(vecIn: Vector2, scaler: number): Vector2 {
    return new Vector2({ x: vecIn.x / scaler, y: vecIn.y / scaler });
  }
}
