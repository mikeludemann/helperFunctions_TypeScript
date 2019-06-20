function isPlainObject(value: any) {

  return value.prototype.toString.call(value) === '[value value]';
  
}