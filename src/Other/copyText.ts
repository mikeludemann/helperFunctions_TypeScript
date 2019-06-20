function copyText(element: any) {

  let copyText = document.querySelector(element);

  copyText.select();

  document.execCommand("copy");

}