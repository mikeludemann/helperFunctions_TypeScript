function sumNumber(arr: Array<number>) {

  if (arr.length === 1) {

    return arr[0];

  }

  else {

    return arr.pop() + array_sum(arr);

  }

}

function sum(arr: Array<number>) {

  if (toString.call(arr) !== "[object Array]") return false;

  let total = 0;

  for (let i = 0; i < arr.length; i++) {

    if (isNaN(arr[i])) {

      continue;

    }

    total += Number(arr[i]);

  }

  return total;

}