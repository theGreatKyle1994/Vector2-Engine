import type Polygon from "../physics/primitives/Polygon";
import type Rectangle from "../physics/primitives/Rectangle";

export interface GameConfig {
  scene: Scene;
}

export interface Vector2Snippet {
  x: number;
  y: number;
}

export type Shape = Polygon | Rectangle | Triangle;

export interface ObjectListItem {
  current: Shape;
  id: string;
}
