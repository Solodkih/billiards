import { startAnimation, stopAnimation } from './animation';
import { paintCircle, paintBorder, clear } from './paint';
import { moveCircle } from './move';
import { circle1, circle2, border } from './data';
import {
  calculatingCollisionCircleBorder,
  getProjectionsInNewCoordinates,
} from './calculation';

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
    paintBorder(
      context,
      border.x,
      border.y,
      border.width,
      border.height,
      border.lineWidth,
      border.color
    );
    calculatingCollisionCircleBorder(circle1, border);
    calculatingCollisionCircleBorder(circle2, border);
    getProjectionsInNewCoordinates(circle1, circle2);
    moveCircle(circle1);
    moveCircle(circle2);
    paintCircle(context, circle1.x, circle1.y, circle1.r, 10, circle1.color);
    paintCircle(context, circle2.x, circle2.y, circle2.r, 10, circle2.color);
  });
}
