function getUniqueCharacter(value: string) {

  let text = value;

  let uniqueList = "";

  for (let x = 0; x < text.length; x++) {

    if (uniqueList.indexOf(text.charAt(x)) == -1) {

      uniqueList += text[x];

    }

  }

  return uniqueList;

} 