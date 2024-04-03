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

function onClickHandler(event) {
  console.log(
    'canvas',
    canvas.offsetLeft,
    canvas.offsetTop,
    canvas.clientLeft,
    canvas.clientTop
  );
  console.log('mouse', event.clientX, event.clientY);
  let realXYCanvas = {
    x:
      event.clientX - canvas.offsetLeft - canvas.clientLeft > 0
        ? event.clientX - canvas.offsetLeft - canvas.clientLeft
        : 0,
    y:
      event.clientY - canvas.offsetTop - canvas.clientTop > 0
        ? event.clientY - canvas.offsetTop - canvas.clientTop
        : 0,
  };
  console.log('realXYCanvas', realXYCanvas.x, realXYCanvas.y);

  const lengthBetweenPoint = (first, second) => {
    return Math.sqrt((first.x - second.x) ** 2 + (first.y - second.y) ** 2);
  };

  const lenghtCircle1 = lengthBetweenPoint(realXYCanvas, circle1);
  console.log('lenghtCircle1', lenghtCircle1);

  const angleBetweenPointAndY = Math.acos(
    Math.abs(realXYCanvas.y - circle1.y) / lenghtCircle1
  );

  const angleBetweenPointAndX = Math.acos(
    Math.abs(realXYCanvas.x - circle1.x) / lenghtCircle1
  );





}

export function saveCanvas(can) {
  canvas = can;
  context = canvas.getContext('2d');
  window.addEventListener('click', onClickHandler);
}

export function removeCanvas() {
  canvas.removeEventListener('click', onClickHandler);
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
