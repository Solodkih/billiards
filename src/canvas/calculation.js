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

export function getProjectionsInNewCoordinates(first, second) {
  const lengthBetweenCenter = Math.sqrt(
    (first.x - second.x) ** 2 + (first.y - second.y) ** 2
  );

  if (lengthBetweenCenter > first.r + second.r) return;

  const angleBetweenXandX1_YandY1 = Math.acos(
    Math.abs(first.y - second.y) / lengthBetweenCenter
  );

  const angleBetweenXandY1_YandX1 = Math.acos(
    Math.abs(first.x - second.x) / lengthBetweenCenter
  );

  const singXYtoX1Y1 = {
    singProjectionXtoX1: first.y < second.y ? 1 : -1,
    singProjectionYtoX1: first.x > second.x ? 1 : -1,
    singProjectionXtoY1: first.x < second.x ? 1 : -1,
    singProjectionYtoY1: first.y < second.y ? 1 : -1,
  };

  function getProjectionsX1Y1(
    angleBetweenXandX1_YandY1,
    angleBetweenXandY1_YandX1,
    circle,
    sing
  ) {
    let projectionXtoX1 =
      Math.cos(angleBetweenXandX1_YandY1) *
      circle.projectionVectorX *
      sing.singProjectionXtoX1;

    let projectionYtoX1 =
      Math.cos(angleBetweenXandY1_YandX1) *
      circle.projectionVectorY *
      sing.singProjectionYtoX1;

    let projectionX1 = projectionXtoX1 + projectionYtoX1;

    let projectionYtoY1 =
      Math.cos(angleBetweenXandX1_YandY1) *
      circle.projectionVectorY *
      sing.singProjectionYtoY1;

    let projectionXtoY1 =
      Math.cos(angleBetweenXandY1_YandX1) *
      circle.projectionVectorX *
      sing.singProjectionXtoY1;

    let projectionY1 = projectionXtoY1 + projectionYtoY1;

    return [projectionX1, projectionY1];
  }

  let [firstProjectionX1, firstProjectionY1] = getProjectionsX1Y1(
    angleBetweenXandX1_YandY1,
    angleBetweenXandY1_YandX1,
    first,
    singXYtoX1Y1
  );

  let [secondProjectionX1, secondProjectionY1] = getProjectionsX1Y1(
    angleBetweenXandX1_YandY1,
    angleBetweenXandY1_YandX1,
    second,
    singXYtoX1Y1
  );

  const singX1Y1toXY = {
    singProjectionX1toX: first.y < second.y ? 1 : -1,
    singProjectionY1toX: first.x < second.x ? 1 : -1,
    singProjectionX1toY: first.x > second.x ? 1 : -1,
    singProjectionY1toY: first.y < second.y ? 1 : -1,
  };

  function getProjectionsXY(
    angleBetweenXandX1_YandY1,
    angleBetweenXandY1_YandX1,
    projectionX1,
    projectionY1,
    sing
  ) {
    let projectionX1toX =
      Math.cos(angleBetweenXandX1_YandY1) * projectionX1 * sing.singProjectionX1toX;

    let projectY1toX =
      Math.cos(angleBetweenXandY1_YandX1) * projectionY1 * sing.singProjectionY1toX;

    let projectionX = projectionX1toX + projectY1toX;

    let projectY1toY =
      Math.cos(angleBetweenXandX1_YandY1) * projectionY1 * sing.singProjectionY1toY;

    let projectX1toY =
      Math.cos(angleBetweenXandY1_YandX1) * projectionX1 * sing.singProjectionX1toY;

    let projectionY = projectX1toY + projectY1toY;

    return [projectionX, projectionY];
  }

  let newFirstProjectionY1 =
    ((first.weight - second.weight) * firstProjectionY1 +
      2 * second.weight * secondProjectionY1) /
    (first.weight + second.weight);

  let newSecondProjectionY1 =
    ((second.weight - first.weight) * secondProjectionY1 +
      2 * first.weight * firstProjectionY1) /
    (first.weight + second.weight);

  let [firstProjectionX, firstProjectionY] = getProjectionsXY(
    angleBetweenXandX1_YandY1,
    angleBetweenXandY1_YandX1,
    firstProjectionX1,
    newFirstProjectionY1,
    singX1Y1toXY
  );

  let [secondProjectionX, secondProjectionY] = getProjectionsXY(
    angleBetweenXandX1_YandY1,
    angleBetweenXandY1_YandX1,
    secondProjectionX1,
    newSecondProjectionY1,
    singX1Y1toXY
  );

  first.projectionVectorX = firstProjectionX;
  first.projectionVectorY = firstProjectionY;

  second.projectionVectorX = secondProjectionX;
  second.projectionVectorY = secondProjectionY;
}
