function encode(value: string) {

  return value.replace(/[^]/g, function (string) {

    return "&#" + string.charCodeAt(0) + ";";

  });

}

function decode(value: string) {
    
  return value.replace(/&#(\d+);/g, function (match, dec) {

    return String.fromCharCode(dec);

  });

};