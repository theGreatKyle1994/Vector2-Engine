export default abstract class EngineMath {
  static degreesToRadians(angle: number): number {
    return (angle * Math.PI) / 180;
  }

  static RadiensToDegrees(angle: number): number {
    return (angle * 180) / Math.PI;
  }

  static rotateMatrix(angle: number, vec: Vector2, origin: Vector2): Vector2 {
    const radians: number = EngineMath.degreesToRadians(angle);
    return new Vector2({
      x:
        (vec.x - origin.x) * Math.cos(radians) -
        (vec.y - origin.y) * Math.sin(radians) +
        origin.x,
      y:
        (vec.y - origin.y) * Math.cos(radians) +
        (vec.x - origin.x) * Math.sin(radians) +
        origin.y,
    });
  }
}
