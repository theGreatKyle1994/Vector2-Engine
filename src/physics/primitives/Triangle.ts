import Polygon from "./Polygon";

export default class Triangle extends Polygon {
  constructor(
    x: number,
    y: number,
    size: number = 10,
    color: string = "black"
  ) {
    super(
      [
        { x, y },
        { x: x + size, y },
        {
          x: (x * 2 + size) / 2 + Math.sin((60 * Math.PI) / 180),
          y: (y * 2) / 2 + Math.sin((60 * Math.PI) / 180) * size,
        },
      ],
      color
    );
  }
}
