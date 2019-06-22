function globallyUniqueIdentifier(input: any) {

  let arr = [],
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charactersLength = characters.length,
    length = input;

  for (let i = 0; i < length; i++) {

    arr[i] = characters.charAt(Math.floor(Math.random() * charactersLength));

  }

  return arr.join('');

}