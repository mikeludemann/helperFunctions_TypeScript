function isHTML(value: any) {

  let regexp = /(<([a-z]+) *[^/]*?>|<\/([a-z]+) *[^/]*?>)/;

  if (regexp.test(value)) {

    return true;

  }

  else {

    return false;

  }
  
}