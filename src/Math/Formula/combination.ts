function productRange(a: number, b: number) {

  var product = a,
    increment = a;

  while (increment++ < b) {

    product *= increment;

  }

  return product;

}


function combination(value: number, combi: number) {

  if (value == combi) {

    return 1;

  }

  else {

    combi = (combi < value - combi) ? value - combi : combi;

    return productRange(combi + 1, value) / productRange(1, value - combi);

  }

}