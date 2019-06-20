function isEndsWith(value: string, suffix: any) {

  if (((value === null) || (value === '')) || ((suffix === null) || (suffix === ''))) {

    return false;

  } else {

    value = value.toString();
    suffix = suffix.toString();

  }

  return value.indexOf(suffix, value.length - suffix.length) !== -1;
    
}