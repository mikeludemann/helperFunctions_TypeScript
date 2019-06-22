function modulo(x: number, y: number) {

  if(typeof x == 'number' && typeof y == 'number'){

    let result = x % y;

    let remainder;

    if(result === 0){

      remainder = 0;

    } else {

      remainder = result;

    }

    return remainder;

  } else {

    return false;

  }

}