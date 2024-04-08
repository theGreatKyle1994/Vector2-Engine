import type Circle from "../physics/primitives/Circle";
import type Polygon from "../physics/primitives/Polygon";
import type Rectangle from "../physics/primitives/Rectangle";
import type Triangle from "../physics/primitives/Triangle";

declare global {
  interface GameConfig {
    scene: Scene;
  }

  type Shape = Polygon | Rectangle | Triangle | Circle;

  interface Vector2Snippet {
    x: number;
    y: number;
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

  namespace Shapes {
    declare class GeometricShape {
      public id: string;
      public origin: Vector2;
      public rotation: number;
      public rotationSelfDirection: number;
      public rotationOriginDirection: number;
      public rotationAngle: number;
      public rotationOrigin: Vector2;
      public isRotatingFromSelf: boolean;
      public isRotatingFromOrigin: boolean;
      protected rotationDelta: number;
      public scale: number;
      public scaleOrigin: Vector2;
      protected isScalingFromSelf: boolean;
      protected isScalingFromOrigin: boolean;
      constructor(id: string, x: number, y: number = x);
      public render(ctx: CanvasRenderingContext2D): void;
      public update(deltaTime: number): void;
      public getCenterOrigin(): Vector2;
      protected rotate(deltaTime: number): void;
      protected doRotate(angle: number): void;
      public setRotation(angle: number): void;
      public setFixedRotation(angle: number): void;
      public setRotationOrigin(x: number, y: number): void;
      private checkCurrentRotation(): void;
      public setSelfRotationMult(mult: number): void;
      public setOriginRotationMult(mult: number): void;
      public setRotationConfig(rotationConfig: RotationConfig): void;
      public setTransform(x: number, y: number): void;
      public setFixedTransform(x: number, y: number): void;
      public setScale(scaler: number): void;
      public setScaleOrigin(x: number, y: number): void;
      public setScaleConfig(scaleConfig: ScaleConfig): void;
    }

    declare class Circle extends Shapes.GeometricShape {
      public diameter: number;
      public radius: number;
      private startAngle: number;
      private endAngle: number;
      private counterClock: boolean;
      constructor(
        id: string,
        x: number,
        y: number,
        diameter: number,
        startAngle: number,
        endAngle: number,
        counterClock: boolean
      );
    }

    declare class Polygon extends Shapes.GeometricShape {
      public vertices: Vector2[];
      constructor(
        id: string,
        vertices: [
          Vector2Snippet,
          Vector2Snippet,
          Vector2Snippet,
          ...Vector2Snippet[]
        ]
      );
      private createVertices(verts: Vector2Snippet[]): Vector2[];
      protected getEdges(): Vector2[];
    }

    declare class Rectangle extends Shapes.Polygon {
      constructor(
        id: string,
        x: number,
        y: number,
        width: number,
        height: number
      );
    }

    declare class Triangle extends Shapes.Polygon {
      constructor(id: string, x: number, y: number, size: number);
    }
  }
}
