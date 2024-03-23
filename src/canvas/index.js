let canvas = null;
let context = null;

export function saveCanvas(can) {
  canvas = can;
  context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(500, 0);
  context.lineTo(500, 500);
  context.lineTo(0, 500);
  context.closePath();
  context.strokeStyle = 'blue';
  context.lineWidth = 10;
  context.stroke();
  console.log('Save', canvas);
}

export function removeCanvas() {
  canvas = null;
  context = null;
}

export function startGame() {
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.arc(250, 250, 25, -Math.PI, Math.PI);
  context.stroke();
}


