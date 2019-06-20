function isBoolean(value: Boolean) {

  return value === true || value === false || toString.call(value) === '[object Boolean]';

}