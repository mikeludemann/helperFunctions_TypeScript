function roundDecimalNumber(value: number, decimalIndex: number) {

  if ((typeof value !== 'number') || (typeof decimalIndex !== 'number')) return false;

  let signature = value >= 0 ? 1 : -1;

  return (Math.round((value * Math.pow(10, decimalIndex)) + (signature * 0.0001)) / Math.pow(10, decimalIndex)).toFixed(decimalIndex);

}