function isEven(x: number, moduloIndex?: number) {

  if (x % moduloIndex === 0) {

    console.log("true");

    return true;

  } else {

    console.log("false");

    return false;

  }

}