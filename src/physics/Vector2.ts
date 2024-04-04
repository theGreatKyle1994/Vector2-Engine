import type { Vector2Snippet } from "../types/EngineTypes";

export default class Vector2 {
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

  public divToSelf(scaler: number): void {
    this.x /= scaler;
    this.y /= scaler;
  }

  static add(
    vec1: Vector2 | Vector2Snippet,
    vec2: Vector2 | Vector2Snippet
  ): Vector2 {
    return new Vector2({ x: vec1.x + vec2.x, y: vec1.y + vec2.y });
  }

  static sub(
    vec1: Vector2 | Vector2Snippet,
    vec2: Vector2 | Vector2Snippet
  ): Vector2 {
    return new Vector2({ x: vec1.x - vec2.x, y: vec1.y - vec2.y });
  }

  static mult(vec: Vector2 | Vector2Snippet, scaler: number): Vector2 {
    return new Vector2({ x: vec.x * scaler, y: vec.y * scaler });
  }

  static div(vec: Vector2 | Vector2Snippet, scaler: number): Vector2 {
    return new Vector2({ x: vec.x / scaler, y: vec.y / scaler });
  }

  static distanceBetween(
    vec1: Vector2 | Vector2Snippet,
    vec2: Vector2 | Vector2Snippet
  ): number {
    return Math.sqrt((vec2.x - vec1.x) ** 2 + (vec2.y - vec1.y) ** 2);
  }
}
