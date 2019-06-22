function aspectRatio(firstNumber: number, secondNumber: number) {

  let ratio = greatestCommonDivisor(firstNumber, secondNumber);

  return "" + firstNumber / ratio + ":" + secondNumber / ratio;

}