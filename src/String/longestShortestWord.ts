function longestWord(value: string) {

  let search = value.match(/\w[a-zA-Z]{0,}/gi),
  result = search[0];

  for (let x = 1; x < search.length; x++) {

    if (result.length < search[x].length) {

      result = search[x];

    }

  }

  return result;

}

function shortestWord(value: string) {

  let search = value.match(/\w[a-zA-Z]{0,}/gi),
  result = search[0];

  for (let x = 1; x < search.length; x++) {

    if (result.length > search[x].length) {

      result = search[x];

    }

  }

  return result;

}