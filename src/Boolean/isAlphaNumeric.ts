function isAlphaNumeric(value: string) {

  let regexp = /^[a-zA-Z0-9]+$/i;

  if (regexp.test(value)) {

    return true;

  }

  else {

    return false;

  }

}