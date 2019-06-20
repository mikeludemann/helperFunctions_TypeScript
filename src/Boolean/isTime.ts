function isTime(value: any) {

  let regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

  if (regexp.test(value)) {

    return true;

  }

  else {

    return false;

  }
  
}