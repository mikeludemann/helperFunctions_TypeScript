function isURL(value: any) {

  let regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  if (regexp.test(value)) {

    return true;

  }

  else {

    return false;

  }

}