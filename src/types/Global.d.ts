import type PolygonBase from "../physics/primitives/Polygon";
import type RectangleBase from "../physics/primitives/Rectangle";
import type TriangleBase from "../physics/primitives/Triangle";
import type CircleBase from "../physics/primitives/Circle";
import type Vector2Base from "../physics/Vector2";

declare global {
  declare interface GameConfig {
    scene: Scene;
  }

  declare interface Vector2Snippet {
    x: number;
    y: number;
  }

  declare interface ScaleConfig {
    origin?: {
      source?: Vector2Snippet;
      use?: boolean;
    };
    self?: {
      use?: boolean;
    };
    scale?: number;
  }

  declare interface RotationConfig {
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

  declare interface ColorConfig {
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    useBorder?: boolean;
  }

  declare interface AnimConfig {
    isLooping?: boolean;
    delay?: number;
    stopTime?: number;
    translateSteps?: Array<TranslateAnimPlot>;
    action?: () => void;
    actionType: string;
    object: Shape;
  }

  declare interface TranslateAnimPlot {
    from: Vector2Snippet;
    to?: Vector2Snippet;
    speed?: number;
  }

  declare class Vector2 extends Vector2Base {}

  type Shape = Polygon | Rectangle | Triangle | Circle;

  declare class Circle extends CircleBase {}
  declare class Polygon extends PolygonBase {}
  declare class Rectangle extends RectangleBase {}
  declare class Triangle extends TriangleBase {}
}
