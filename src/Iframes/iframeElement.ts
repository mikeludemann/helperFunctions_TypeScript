function iframeElement(frameName: any, element: any) {

  let iframe = document.querySelector(frameName);
  let elem = iframe.contentWindow.document.querySelector(element);

  return elem;
  
}