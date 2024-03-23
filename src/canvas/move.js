const coeff = 0.3;

export function moveCircle(elem) {
  elem.x += elem.projectionVectorX * coeff;
  elem.y += elem.projectionVectorY * coeff;
}
