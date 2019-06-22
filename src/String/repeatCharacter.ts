function firstRepeatCharacter(value: string) {

  let arr = value.split(''),
    result = '',
    ctr = 0;

  for (let x = 0; x < arr.length; x++) {

    ctr = 0;

    for (let y = 0; y < arr.length; y++) {

      if (arr[x] !== arr[y]) {

        ctr += 1;

      }

    }

    if (ctr > 2) {

      result = arr[x];
      
      break;

    }

  }

  return result;

}

function firstNotRepeatCharacter(value: string) {
    
  let arr = value.split(''),
    result = '',
    ctr = 0;

  for (let x = 0; x < arr.length; x++) {

    ctr = 0;

    for (let y = 0; y < arr.length; y++) {

      if (arr[x] === arr[y]) {

        ctr += 1;

      }

    }

    if (ctr < 2) {

      result = arr[x];

      break;

    }

  }

  return result;

}