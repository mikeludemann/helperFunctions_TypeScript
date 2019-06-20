function isNumberInteger(value: number) {

  if (typeof value !== 'number'){

    return false;
    
  }

  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));

}