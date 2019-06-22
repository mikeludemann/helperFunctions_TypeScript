function Complex(real: number, imaginary: number) {

  this.real = 0;
  this.imaginary = 0;
  this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
  this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);

}

Complex.transform = function (value: number) {

  let complex;

  complex = (value instanceof Complex) ? value : complex;
  complex = (typeof value === 'number') ? new Complex(value, 0) : value;

  return complex;

};

function displayComplex(real: number, imaginary: number) {

  if (imaginary === '0') return '' + real;

  if (real === 0) return '' + imaginary + 'i';

  if (imaginary < 0) return '' + real + imaginary + 'i';

  return '' + real + '+' + imaginary + 'i';

}

// ---------------------------------------------------------------

function complexAdd(firstNumber: number, secondNumber: number) {

  let first, 
  second;

  first = Complex.transform(firstNumber);
  second = Complex.transform(secondNumber);

  let real = first.real + second.real;
  let imaginary = first.imaginary + second.imaginary;

  return displayComplex(real, imaginary);

}

function complexSubtract(firstNumber: number, secondNumber: number) {

  let first, 
  second;

  first = Complex.transform(firstNumber);
  second = Complex.transform(secondNumber);

  let real = first.real - second.real;
  let imaginary = first.imaginary - second.imaginary;

  return displayComplex(real, imaginary);

}

function complexMultiply(firstNumber: number, secondNumber: number) {

  let first, 
  second;

  first = Complex.transform(firstNumber);
  second = Complex.transform(secondNumber);

  let real = (first.real * second.real) - (first.imaginary * second.imaginary);
  let imaginary = (first.real * second.imaginary) + (first.imaginary * second.real);

  return displayComplex(real, imaginary);

}

function complexDivide(firstNumber: number, secondNumber: number) {

  let first, 
  second;

  first = Complex.transform(firstNumber);
  second = Complex.transform(secondNumber);

  let denom = second.imaginary * second.imaginary + second.real * second.real;
  let real = (first.real * second.real + first.imaginary * second.imaginary) / denom;
  let imaginary = (second.real * first.imaginary - first.real * second.imaginary) / denom;

  return displayComplex(real, imaginary);

}