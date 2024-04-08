import EngineMath from "../EngineMath";
import PolygonBase from "./Polygon";

export default class TriangleBase extends PolygonBase {
  constructor(id: string, x: number, y: number = x, size: number = 100) {
    super(id, [
      { x, y },
      { x: x + size, y },
      {
        x: (x * 2 + size) / 2 + Math.sin(EngineMath.degreesToRadians(60)),
        y: (y * 2) / 2 + Math.sin(EngineMath.degreesToRadians(60)) * size,
      },
    ]);
  }
}
