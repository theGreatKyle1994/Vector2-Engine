export default abstract class EngineMath {
  static toRadians(angle: number): number {
    return (angle * Math.PI) / 180;
  }

  static toDegrees(angle: number): number {
    return (angle * 180) / Math.PI;
  }
}
