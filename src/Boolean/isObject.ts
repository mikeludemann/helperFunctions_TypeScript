function isObject(value: Object) {

  let Type = typeof value;

  return Type === 'function' || Type === 'object' && !!value;

}