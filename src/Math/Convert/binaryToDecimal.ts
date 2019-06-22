function binaryToDecimal(value: number) {

  return parseInt((value + '').replace(/[^01]/gi, ''), 2);

}