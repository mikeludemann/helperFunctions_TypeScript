function exponent(basis: number, exponent: number) {
    
  if (exponent === 0) {

    return 1;

  }

  else {

    return basis * exponent(basis, exponent - 1);

  }

}