function removeTags(value: string) {

  if ((value === null) || (value === '')) {

    return false;

  }

  else {

    value = value.toString();

  }

  return value.replace(/<[^>]*>/g, '');

}