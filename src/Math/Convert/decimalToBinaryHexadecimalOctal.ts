function decimalToBinaryHexadecimalOctal(value: number, baseFormat: string) {

  if (value < 0) {

    value = 0xFFFFFFFF + value + 1;

  }

  switch (baseFormat) {

    case 'B': 
    case 'b':
    case 'Binary':
    case 'binary':
      return parseInt(value, 10).toString(2);
      break;
    case 'H':
    case 'h':
    case 'Hexadecimal':
    case 'hexadecimal':
      return parseInt(value, 10).toString(16);
      break;
    case 'O':
    case 'O':
    case 'Octal':
    case 'octal':
      return parseInt(value, 10).toString(8);
      break;
    default:
      return ("Cannot convert number");

  }

}