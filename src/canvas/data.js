const DENSITY = 1;

export const circle1 = {
  x: 100,
  y: 100,
  r: 20,
  color: 'red',
  projectionVectorX: 0,
  projectionVectorY: 2,
  get weight() {
    return (DENSITY * (4 * Math.PI * this.r ** 3)) / 3;
  },
};

export const circle2 = {
  x: 100,
  y: 200,
  r: 10,
  color: 'green',
  projectionVectorX: 0,
  projectionVectorY: -2,
  get weight() {
    return (DENSITY * (4 * Math.PI * this.r ** 3)) / 3;
  },
};

export const border = {
  x: 10,
  y: 10,
  width: 480,
  height: 480,
  lineWidth: 10,
  color: 'red',
};
