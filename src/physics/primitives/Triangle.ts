import EngineMath from "../EngineMath";
import Polygon from "./Polygon";

export default class Triangle extends Polygon {
  constructor(x: number, y: number = x, size: number = 100) {
    super([
      { x, y },
      { x: x + size, y },
      {
        x: (x * 2 + size) / 2 + Math.sin(EngineMath.degreesToRadians(60)),
        y: (y * 2) / 2 + Math.sin(EngineMath.degreesToRadians(60)) * size,
      },
    ]);
  }
}
