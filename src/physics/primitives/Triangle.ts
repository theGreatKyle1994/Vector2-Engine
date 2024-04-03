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
        { x: x + width, y },
        {
          x: (x + x + width) / 2 + Math.sin((60 * Math.PI) / 180) * (y - y),
          y: (y + y) / 2 + Math.sin((60 * Math.PI) / 180) * (x - x + width),
        },
      ],
      color
    );
  }
}
