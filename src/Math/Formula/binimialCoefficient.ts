function binomialCoefficient(value: number, range: number) {

  let x: number;

  if ((typeof value !== 'number') || (typeof range !== 'number')) return false;

  let coefficient = 1;

  for (let x = value - range + 1; x <= value; x++) coefficient *= x;

  for (x = 1; x <= range; x++) coefficient /= x;

  return coefficient;

}