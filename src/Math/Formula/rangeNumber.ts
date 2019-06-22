function rangeNumber(startNumber: number, endNumber: number) {

  if (endNumber - startNumber === 2) {

    return [startNumber + 1];

  }

  else {

    let list = range(startNumber, endNumber - 1);

    list.push(endNumber - 1);

    return list;

  }

}