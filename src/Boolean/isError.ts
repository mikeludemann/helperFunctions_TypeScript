function isError(value: any) {

  return value instanceof Error || toString.call(input) === '[object Error]';

}