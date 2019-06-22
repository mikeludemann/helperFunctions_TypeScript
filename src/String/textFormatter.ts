function upperFirstLetter(value: string) {

  return value.charAt(0).toUpperCase() + value.slice(1);

}

function upperFirstLetterWords(value: string) {

  return value.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

}

function lowerFirstLetter(value: string) {

  return value.charAt(0).toLowerCase() + value.slice(1);

}

function lowerFirstLetterWords(value: string) {

  return value.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });

}

function swapCase(value: string) {

  return value.replace(/([a-z]+)|([A-Z]+)/g, function (match, char) {

    return char ? match.toUpperCase() : match.toLowerCase();

  });

}

function camleCase(value: string) {

  return value.replace(/\W+(.)/g, function (match, chr) {

    return chr.toUpperCase();

  });

}

function unCamelCase(value: string, separator: string) {

  if (typeof (separator) == "undefined") {

    separator = " ";

  }

  let value = value.replace(/[A-Z]/g, function (letter) {

    return separator + letter.toLowerCase();

  });

  return value.replace("/^" + separator + "/", '');

}

function repeat(value: string, count: number) {
    
  if (typeof (count) == "undefined") {

    count = 1;

  }

  return count < 1 ? '' : new Array(count + 1).join(value);

}