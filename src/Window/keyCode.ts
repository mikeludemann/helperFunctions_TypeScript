document.onkeydown = getKeyCode();

function getKeyCode(e: any) {

  e = e || window.event;

  let keycode;

  if (window.event) keycode = window.event.keyCode;

  else if (e) keycode = e.which;

  return keycode;

}