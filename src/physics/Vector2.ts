export default class Vector2Base {
  public x: number;
  public y: number;

  constructor(vec: Vector2 | Vector2Snippet = { x: 0, y: 0 }) {
    this.x = vec.x;
    this.y = vec.y;
  }

  public setSelf(vec: Vector2 | Vector2Snippet): void {
    this.x = vec.x;
    this.y = vec.y;
  }

  public addToSelf(vec: Vector2 | Vector2Snippet): void {
    this.x += vec.x;
    this.y += vec.y;
  }

  public subToSelf(vec: Vector2 | Vector2Snippet): void {
    this.x -= vec.x;
    this.y -= vec.y;
  }

  public multToSelf(scaler: number): void {
    this.x *= scaler;
    this.y *= scaler;
  }

  public componentProductToSelf(vec: Vector2 | Vector2Snippet): void {
    this.x *= vec.x;
    this.y *= vec.y;
  }

  public divToSelf(scaler: number): void {
    this.x /= scaler;
    this.y /= scaler;
  }

  public flipSelf(): void {
    if (this.x !== 0) this.x = -this.x;
    if (this.y !== 0) this.y = -this.y;
  }

  static add(
    vec1: Vector2 | Vector2Snippet,
    vec2: Vector2 | Vector2Snippet
  ): Vector2 {
    return new Vector2Base({ x: vec1.x + vec2.x, y: vec1.y + vec2.y });
  }

  static sub(
    vec1: Vector2 | Vector2Snippet,
    vec2: Vector2 | Vector2Snippet
  ): Vector2 {
    return new Vector2Base({ x: vec1.x - vec2.x, y: vec1.y - vec2.y });
  }

  static mult(vec: Vector2 | Vector2Snippet, scaler: number): Vector2 {
    return new Vector2Base({ x: vec.x * scaler, y: vec.y * scaler });
  }

  static componentProduct(
    vec1: Vector2 | Vector2Snippet,
    vec2: Vector2 | Vector2Snippet
  ): Vector2 {
    return new Vector2Base({ x: vec1.x * vec2.x, y: vec1.y * vec2.y });
  }

  static div(vec: Vector2 | Vector2Snippet, scaler: number): Vector2 {
    return new Vector2Base({ x: vec.x / scaler, y: vec.y / scaler });
  }

  static flip(vec: Vector2 | Vector2Snippet): Vector2 {
    let flippedX: number = vec.x !== 0 ? -vec.x : 0;
    let flippedY: number = vec.y !== 0 ? -vec.y : 0;
    return new Vector2Base({ x: flippedX, y: flippedY });
  }

  static distanceBetween(
    vec1: Vector2 | Vector2Snippet,
    vec2: Vector2 | Vector2Snippet
  ): number {
    return Math.sqrt((vec2.x - vec1.x) ** 2 + (vec2.y - vec1.y) ** 2);
  }

  static normalize(vec: Vector2 | Vector2Snippet): Vector2 {
    const magnitude = Math.sqrt(vec.x ** 2 + vec.y ** 2);
    if (magnitude === 0) return new Vector2Base(vec);
    return new Vector2Base({ x: vec.x / magnitude, y: vec.y / magnitude });
  }
}
