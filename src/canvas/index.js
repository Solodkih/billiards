import { startAnimation, stopAnimation } from './animation';
import { paintCircle, paintBorder, clear } from './paint';
import { moveCircle } from './move';
import { circle, border } from './data';
import { calculatingСollisionСircleBorder } from './calculation';

let canvas = null;
let context = null;

export function saveCanvas(can) {
  canvas = can;
  context = canvas.getContext('2d');
}

export function removeCanvas() {
  stopAnimation();
  canvas = null;
  context = null;
}

export function startGame() {
  startAnimation(() => {
    clear(context, canvas);
    calculatingСollisionСircleBorder(circle, border);
    paintBorder(
      context,
      border.x,
      border.y,
      border.width,
      border.height,
      border.lineWidth,
      border.color
    );
    moveCircle(circle);
    paintCircle(context, circle.x, circle.y, circle.r, 10, 'red');
  });
}
