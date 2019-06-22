function hexadecimalToASCII(value: string) {

  let hex = value.toString(),
    text = '';

  for (let n = 0; n < hex.length; n += 2) {

    text += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

  }

  return text;

}

function asciiToHexadecimal(value: string) {
    
  let arr = [];

  for (let n = 0, l = value.length; n < l; n++) {

    let hex = Number(value.charCodeAt(n)).toString(16);

    arr.push(hex);

  }

  return arr.join('');

}