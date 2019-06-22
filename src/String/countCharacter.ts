function countLowerChar(value: string) {

  return value.match(/[a-z]/gi).length;

}

function countUpperChar(value: string) {

  return value.match(/[A-Z]/gi).length;

}

function countVowelChar(value: string) {

  return value.match(/[aAeEiIoOuUäÄöÖüÜ]/gi).length;

}

function countConsonantChar(value: string) {

  return value.match(/[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ]/gi).length;

}

function countChar(value: string) {

  let uniqueCharacter = {};

  value.replace(/\S/g, function (l) { uniqueCharacter[l] = (isNaN(uniqueCharacter[l]) ? 1 : uniqueCharacter[l] + 1); });

  return uniqueCharacter;

}