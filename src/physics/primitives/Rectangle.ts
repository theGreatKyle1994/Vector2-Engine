import Polygon from "./Polygon";

export default class Rectangle extends Polygon {
  constructor(x: number, y: number = x, width: number = 100, height: number = 100) {
    super([
      { x, y },
      { x: x + width, y: y },
      { x: x + width, y: y + height },
      { x: x, y: y + height },
    ]);
  }
}
