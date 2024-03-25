export function calculatingCollisionCircleBorder(circle, border) {
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

export function calculatingCollisionCircleCircle(first, second) {
  const newFirst = {};
  const newSecond = {};

  const lengthBetweenCenter = Math.sqrt(
    (first.x - second.x) ** 2 + (first.y - second.y) ** 2
  );

  console.log('lengthBetweenCenter', lengthBetweenCenter);

  const angleBetweenXandX1_YandY1 = Math.acos(
    Math.abs(first.y - second.y) / lengthBetweenCenter
  );

  console.log(
    'angleBetweenXandX1_YandY1',
    (angleBetweenXandX1_YandY1 * 180) / Math.PI,
    Math.cos(angleBetweenXandX1_YandY1),
    first.projectionVectorX,
    first.projectionVectorY
  );

  const angleBetweenXandY1_YandX1 = Math.acos(
    Math.abs(first.x - second.x) / lengthBetweenCenter
  );

  console.log(
    'angleBetweenXandY1_YandX1',
    (angleBetweenXandY1_YandX1 * 180) / Math.PI,
    Math.cos(angleBetweenXandY1_YandX1)
  );

  let projectionVectorX1_1 =
    Math.cos(angleBetweenXandX1_YandY1) * first.projectionVectorX;

  let projectionVectorX1_2 =
    Math.cos(angleBetweenXandY1_YandX1) * first.projectionVectorY;

  let projectionVectorX = projectionVectorX1_1 + projectionVectorX1_2;

  let projectionVectorY1_1 =
    Math.cos(angleBetweenXandX1_YandY1) * first.projectionVectorY;
  let projectionVectorY1_2 =
    Math.cos(angleBetweenXandY1_YandX1) * first.projectionVectorX;

  let projectionVectorY = projectionVectorY1_1 + projectionVectorY1_2;

  console.log(
    '123456789',
    projectionVectorX,
    projectionVectorX1_1,
    projectionVectorX1_2,
    projectionVectorY,
    projectionVectorY1_1,
    projectionVectorY1_2
  );
}
