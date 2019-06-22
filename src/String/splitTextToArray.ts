function splitTextToArray(value: string, size: number) {

  if (value == null) {

    return [];

  }
  
  value = String(value);

  size = ~~size;

  return size > 0 ? value.match(new RegExp('.{1,' + size + '}', 'g')) : [value];

}