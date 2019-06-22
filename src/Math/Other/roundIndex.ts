function roundIndex(value: number, index: number) {

  result = 0;

  if ((typeof value !== 'number')) {

    return false;

  }

  if (index == null || index == "" || typeof index !== 'number') {

    result = parseFloat(a.toFixed(1));

  } else {

    result = parseFloat(a.toFixed(index));

  }

  return result;

}