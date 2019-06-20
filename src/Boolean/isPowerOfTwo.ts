function isPowerOfTwo(value: number) {

	if (typeof value !== 'number'){

    return 'Not a value';
  
  }

	return value && (value & (value - 1)) === 0;

}
