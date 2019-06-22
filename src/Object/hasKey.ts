function hasKey(obj: object, key: any) {

  return obj != null && hasOwnProperty.call(obj, key);
  
}