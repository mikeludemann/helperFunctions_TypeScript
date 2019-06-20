function isNumber(value: number) {

  return !isNaN(value) && toString.call(value) === '[object value]';

}

function isNumeric(value: number) {

  return !isNaN(parseFloat(value)) && isFinite(value);

}