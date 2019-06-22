function factorial(x: number) {

  if (x === 0) {

    return 1;

  }

  return x * factorial(x - 1);

}

function getFactorialSteps(value: number) {

  let factors = [], i;

  for (i = 1; i <= Math.floor(Math.sqrt(value)); i += 1) {

    if (value % i === 0) {

      factors.push(i);

      if (value / i !== i) {

        factors.push(value / i);

      }

    }

  }

  factors.sort(function (x, y) {

    return x - y;

  });

  return factors;

}

function fallingFactorial(value: number, topics: number) {

  let i = (value - topics + 1),
    r = 1;

  if (value < 0) {

    throw new Error("Number must be positive.");

  }

  if (topics > value) {

    throw new Error("Topics can not be greater than number.");

  }

  while (i <= value) {

    r *= i++;

  }

  return r;

}