export function paintCircle(context, x, y, rad, lineWidth, color) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.arc(x, y, rad, -Math.PI, Math.PI);
  context.stroke();
}

export function paintBorder(context, x, y, width, height, lineWidth, color) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.stroke();
}

export function clear(context, canvas) {
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'gray';
  context.fill();
}
