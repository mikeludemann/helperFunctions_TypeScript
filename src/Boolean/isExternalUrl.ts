function isExternalURL(value: string) {

  var a = document.createElement('a');

  a.href = value;

  if (!a.host || location.host == a.host) {

    return false;

  }

  return true;
    
}