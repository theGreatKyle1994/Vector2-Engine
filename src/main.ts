import Rectangle from "./physics/primitives/Rectangle";

export const canvas = document.querySelector("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const fps: number = 60;
const frameInterval: number = 1000 / 60;
let deltaTime: number = 0;
let prevTime: number = performance.now();

const box: Rectangle = new Rectangle(300, 300, 300, 300);

function updateCanvas(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  box.update(deltaTime);
  box.render(ctx);
}

function gameLoop(currTime: number): void {
  deltaTime = (currTime - prevTime) / frameInterval;
  prevTime = currTime;
  updateCanvas();
  setTimeout(() => requestAnimationFrame(gameLoop), 1000 / fps);
}

function init(): void {
  box.setRotation(1);
  box.setIsRotating(true);
  requestAnimationFrame(gameLoop);
}

init();
