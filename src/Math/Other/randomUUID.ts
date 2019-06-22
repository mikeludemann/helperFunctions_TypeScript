function randomUUID() {

  let time = new Date().getTime();

  let UUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {

    let randomValue = (time + Math.random() * 16) % 16 | 0;

    time = Math.floor(time / 16);

    return (char == 'x' ? randomValue : (randomValue & 0x3 | 0x8)).toString(16);

  });

  return UUID;

}