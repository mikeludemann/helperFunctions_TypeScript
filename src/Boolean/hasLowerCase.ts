function hasLowerCase(value: string) {
    
  let regexp = /^[a-z]/;

  if (regexp.test(value)) {

    return true;

  }

  else {

    return false;

  }

}