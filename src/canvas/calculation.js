export function calculatingСollisionСircleBorder(circle, border) {
  const realBorder = {
    left: border.x + border.lineWidth / 2,
    right: border.x + border.width - border.lineWidth / 2,
    top: border.y + border.lineWidth / 2,
    bottom: border.y + border.height - border.lineWidth / 2,
  };
  const realRadius = circle.r + border.lineWidth / 2;

  const lengthCenterCircleToBorder = {
    left: circle.x - realBorder.left,
    right: realBorder.right - circle.x,
    top: circle.y - realBorder.top,
    bottom: realBorder.bottom - circle.y,
  };

  if (lengthCenterCircleToBorder.left < realRadius) {
    circle.projectionVectorX = -circle.projectionVectorX;
  }
  if (lengthCenterCircleToBorder.right < realRadius) {
    circle.projectionVectorX = -circle.projectionVectorX;
  }
  if (lengthCenterCircleToBorder.top < realRadius) {
    circle.projectionVectorY = -circle.projectionVectorY;
  }
  if (lengthCenterCircleToBorder.bottom < realRadius) {
    circle.projectionVectorY = -circle.projectionVectorY;
  }
}
