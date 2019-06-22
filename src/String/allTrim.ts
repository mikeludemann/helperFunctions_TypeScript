function Trim(value: string) {

  var result;

  if (typeof value === 'string') {

    result = value.replace(/^\s+|\s+$/g, '');

    return result;

  }

  else {

    return false;

  }

}

function rightTrim(value: string) {

  var result;

  if (typeof value === 'string') {

    result = value.replace(/\s+$/g, '');

    return result;

  }

  else {

    return false;

  }

}

function leftTrim(value: string) {

  var result;

  if (typeof value === 'string') {

    result = value.replace(/^\s+/g, '');

    return result;

  }

  else {

    return false;

  }

}