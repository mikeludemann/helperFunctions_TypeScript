function isAlphaDash(value: string) {

  let regexp = /^[a-zA-Z0-9\_\-]+$/i;

  if (regexp.test(value)) {

    return true;

  }

  else {

    return false;

  }

}