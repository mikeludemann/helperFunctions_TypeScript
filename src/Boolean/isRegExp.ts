function isRegExp(value: any) {
    
  return toString.call(value) === '[object RegExp]';

}