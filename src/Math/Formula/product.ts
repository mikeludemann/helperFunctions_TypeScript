function product(arr: Array<number>) {

  if (toString.call(arr) !== "[object Array]") return false;

  let total = 1;

  for (let i = 0; i < arr.length; i++) {

    if (isNaN(arr[i])) {

      continue;

    }

    total *= Number(arr[i]);

  }

  return total;

}