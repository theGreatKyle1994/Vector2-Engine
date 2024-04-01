import Rectangle from "./physics/primitives/Rectangle";
import Polygon from "./physics/primitives/Polygon";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const fps: number = 60;
const frameInterval: number = 1000 / 60;
let deltaTime: number = 0;
let prevTime: number = performance.now();

const poly: Polygon = new Polygon([
  { x: 0, y: 0 },
  { x: 100, y: 0 },
  { x: 50, y: 85 },
]);

const box: Rectangle = new Rectangle(100, 100, 100, 100);

function updateCanvas(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  poly.update(deltaTime);
  box.update(deltaTime);
  poly.render(ctx);
  box.render(ctx);
}

function gameLoop(currTime: number): void {
  deltaTime = (currTime - prevTime) / frameInterval;
  prevTime = currTime;
  updateCanvas();
  setTimeout(() => requestAnimationFrame(gameLoop), 1000 / fps);
}

function init(): void {
  poly.setRotation(-1);
  poly.setIsRotating(true);
  poly.setTransform(400, 400);
  box.setRotation(1);
  box.setIsRotating(true);
  requestAnimationFrame(gameLoop);
}

init();
