import Polygon from "./Polygon";

export default class Rectangle extends Polygon {
  constructor(
    x: number,
    y: number,
    width: number = 10,
    height: number = 10,
    color: string = "black"
  ) {
    super(
      [
        { x, y },
        { x: x + width, y: y },
        { x: x + width, y: y + height },
        { x: x, y: y + height },
      ],
      color
    );
  }
}
