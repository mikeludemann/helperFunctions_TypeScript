function isHexadecimal(value: any) {

  let regexp = /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  
  if (regexp.test(value)) {

    return true;

  }

  else {

    return false;

  }
  
}