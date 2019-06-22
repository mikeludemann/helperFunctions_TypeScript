function minNumber(arr: Array<number>) {

  if (toString.call(arr) !== "[object Array]") return false;

  return Math.min.apply(null, arr);

}