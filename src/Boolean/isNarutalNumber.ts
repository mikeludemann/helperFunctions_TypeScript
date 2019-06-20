function isNaturalNumber(value: number) {
    
  if (typeof value !== 'number'){

    return 'Not a value';
    
  }

  return (value >= 0.0) && (Math.floor(value) === value) && value !== Infinity;

}