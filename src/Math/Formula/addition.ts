function addition(arr: Array<number>) {

  if (Object.prototype.toString.call(arr) === '[object Array]') {

    let result = arr[0];

    if (typeof (result) !== 'number') {

      return false;

    }

    for (let i = 1, length = arr.length; i < length; i++) {

      if (typeof (arr[i]) === 'number') {

        result += arr[i];

      }

      else {

        return false;

      }

    }

    return result;

  }

  else{

    return false;
    
  }

}