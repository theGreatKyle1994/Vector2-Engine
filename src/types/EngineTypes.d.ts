import Vector2 from "../physics/Vector2";
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

export interface ScaleConfig {
  origin?: {
    source?: Vector2Snippet;
    use?: boolean;
  };
  self?: {
    use?: boolean;
  };
  scale?: number;
}

export interface RotationConfig {
  origin?: {
    source?: Vector2Snippet;
    use?: boolean;
    directionScaler?: number;
  };
  self?: {
    use?: boolean;
    directionScaler?: number;
  };
  angle?: number;
}
