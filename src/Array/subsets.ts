function subset(arr: Array<any>, arraySize: number) {

  var sets = [],
      result;

  if (arraySize == null || arraySize == 0) {

      return arr;

  }

  for (var x = 0; x < Math.pow(2, arr.length); x++) {

      result = [];

      let i = arr.length - 1;

      do {

          if ((x & (1 << i)) !== 0) {

              result.push(arr[i]);

          }

      } while (i--);

      if (result.length >= arraySize) {

          sets.push(result);

      }

  }

  return sets;

}