import Rectangle from "./physics/primitives/Rectangle";
import Polygon from "./physics/primitives/Polygon";
import Scene from "./engine/Scene";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const fps: number = 60;
const frameInterval: number = 1000 / 60;
let deltaTime: number = 0;
let prevTime: number = performance.now();

const myScene = new Scene();

const poly: Polygon = new Polygon([
  { x: 0, y: 0 },
  { x: 100, y: 0 },
  { x: 50, y: 85 },
]);
const box: Rectangle = new Rectangle(100, 100, 100, 100);

function updateCanvas(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myScene.update(ctx, deltaTime);
}

function gameLoop(currTime: number): void {
  deltaTime = (currTime - prevTime) / frameInterval;
  prevTime = currTime;
  updateCanvas();
  setTimeout(() => requestAnimationFrame(gameLoop), 1000 / fps);
}

function init(): void {
  myScene.add(poly, "mypoly");
  myScene.add(box, "mybox");
  requestAnimationFrame(gameLoop);
}

init();
