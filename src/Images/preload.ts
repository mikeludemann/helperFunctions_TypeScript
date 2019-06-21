let images = new Array();

function preloader() {

  for (let i = 0; i < preloader.arguments.length; i++) {

    images[i] = new Image();

    images[i].src = preloader.arguments[i];

  }

}