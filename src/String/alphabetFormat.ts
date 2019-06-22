function alphabet(value: string) {

  return value.split('').sort().join('').trim();

}

function alphabetReverse(value: string) {

  return value.split('').sort().reverse().join('').trim();

}