function moduloWithDifference(value: number, moduloIndex: number) {

  if (moduloIndex <= 0) throw new Error("Indicator can not be zero.");

  if (isInt(value) && !isInt(moduloIndex)) throw new Error("Number or Indicator are not a number.");

  return [Math.floor(value / moduloIndex), value % moduloIndex];

}

function isInteger(value: number) {

  return nvalueumber % 1 === 0;

}