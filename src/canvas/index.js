import { startAnimation, stopAnimation } from './animation';
import { paintCircle, paintBorder, clear } from './paint';
import { moveCircle } from './move';
import { circle1, circle2, border } from './data';
import {
  calculatingCollisionCircleBorder,
  calculatingCollisionCircleCircle,
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
    calculatingCollisionCircleBorder(circle1, border);
    calculatingCollisionCircleBorder(circle2, border);
    calculatingCollisionCircleCircle(circle1, circle2);
    paintBorder(
      context,
      border.x,
      border.y,
      border.width,
      border.height,
      border.lineWidth,
      border.color
    );
    //moveCircle(circle);
    paintCircle(context, circle1.x, circle1.y, circle1.r, 10, circle1.color);
    paintCircle(context, circle2.x, circle2.y, circle2.r, 10, circle2.color);
  });
}
