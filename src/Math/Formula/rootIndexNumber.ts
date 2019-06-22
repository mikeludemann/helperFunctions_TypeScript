function rootIndexNumber(value: number, rootIndex: number) {

  let ng = rootIndex % 2;

  if ((ng == 1) || value < 0) value = -value;

  let result = Math.pow(value, 1 / rootIndex);

  rootIndex = Math.pow(result, rootIndex);

  if (Math.abs(value - rootIndex) < 1 && (value > 0 === rootIndex > 0)) return ng ? -result : result;

}