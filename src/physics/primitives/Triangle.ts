import Polygon from "./Polygon";

export default class Triangle extends Polygon {
  constructor(
    x: number,
    y: number,
    width: number = 10,
    height = 10,
    color: string = "black"
  ) {
    super(
      [
        { x, y },
        { x: x + width / 2, y: y + height },
        { x: x - width / 2, y: y + height },
      ],
      color
    );
  }
}
