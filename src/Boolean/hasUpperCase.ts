function hasUpperCase(value: string) {
    
  let regexp = /^[A-Z]/;

  if (regexp.test(value)) {

      return true;

  }

  else {

      return false;

  }

}