# Vector2Engine

Vector2Engine is a TypeScript powered pixel drawing engine used for creating custom graphics or games utilizing HTML5 Canvas.

## Requirements

- TypeScript
- Node.js (Node Package Manager)
- Terminal

## Get Started

The Vector2Engine runs on the scene system. All features and abilities are controlled directly from an extended scene class.

In the main.js file paste this:

```ts
// Import the Scene and GameInstance classes.
import Scene from "./engine/Scene";
import GameInstance from "./engine/GameInstance";
// Extend the scene import and call super() to inherit scene functionality.
class myScene extends Scene {
  constructor() {
    super();
  }
  // The create method allows us to setup our scene before the core loop starts.
  protected create(): void {
    // This will draw a rectangle on the canvas at X: 50, Y: 50.
    // The "my-rect" argument is a required associative ID for the object manager.
    this.add.rect("my-rect", 50, 50);
  }
  // The update method allows us to update objects 60 times a second
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    // Here we grab our "my-rect" object we made earlier
    const myRect = this.get("my-rect");
    // Calling setTranslate() will move our rectangle 1 pixel to the right every frame.
    myRect.setTranslate(1, 0);
  }
}
// Create a new GameInstance and pass in a config object holding our extended scene.
new GameInstance({ scene: new myScene() });
```

## Start The Local Server

Run in terminal to download dependencies:

```
npm install
```

then run this to start the dev server:

```
npm run dev
```

Once the server is live you should see an outlined square moving slowly from left to right.

## Without Using The Scene Class

While all major functionality feeds off the scene class, nothing is stopping the use of core classes in an isolated environment.

```ts
// Import the base rectangle shape class.
import RectangleBase from "./physics/primitives/Rectangle";
// Grab the canvas element and create a 2D context object.
const canvas = document.querySelector<HTMLCanvasElement>("canvas")!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
// Create a new instance of the rectangle class.
const myRect = new RectangleBase("my-rect", 50, 50);
// Standard game loop with no deltaTime
function gameLoop(): void {
  // We clear the canvas at the beginning of every frame.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // This updates myRect's position on the X axis by +1 every frame.
  myRect.setTranslate(1, 0);
  // The update method is used to update the myRect every frame.
  // We still require a deltaTime multiplier but for this example we use a multipler of 1.
  myRect.update(1);
  // The render method is used to render the changes from update every frame.
  myRect.render(ctx);
  // This restarts the loop.
  setTimeout((): void => gameLoop(), 1000 / 60);
}
// Initial loop call.
gameLoop();
```

We should see the same rectangle in the upper left corner moving left to right just like before.

## Documentation

For an in-depth look at what the Vector2Engine is capable of check out the projects documentation [index](./documentation/Index.md).
