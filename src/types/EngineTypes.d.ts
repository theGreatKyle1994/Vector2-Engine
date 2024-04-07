import type Circle from "../physics/primitives/Circle";
import type Polygon from "../physics/primitives/Polygon";
import type Rectangle from "../physics/primitives/Rectangle";
import type Triangle from "../physics/primitives/Triangle";

declare global {
  interface GameConfig {
    scene: Scene;
  }

  interface Vector2Snippet {
    x: number;
    y: number;
  }

  // Circle;
  // Polygon;
  // Rectangle;
  // Triangle;

  type Shape = Polygon | Rectangle | Triangle | Circle;

  interface ObjectListItem {
    current: T;
    id: string;
  }

  interface ScaleConfig {
    origin?: {
      source?: Vector2Snippet;
      use?: boolean;
    };
    self?: {
      use?: boolean;
    };
    scale?: number;
  }

  interface RotationConfig {
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
}
