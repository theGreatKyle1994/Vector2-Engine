import Polygon from "./Polygon";

export default class Rectangle extends Polygon {
  constructor(
    id: string,
    x: number,
    y: number = x,
    width: number = 100,
    height: number = 100
  ) {
    super(id, [
      { x, y },
      { x: x + width, y: y },
      { x: x + width, y: y + height },
      { x: x, y: y + height },
    ]);
  }
}
