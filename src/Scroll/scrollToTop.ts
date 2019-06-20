let elem = document.body ||  document.documentElement;

function runScroll() {

  scrollTo(elem, 0, 1000);

}

let scrollme;

scrollme = document.querySelector("#top");
scrollme.addEventListener("click", runScroll, false)

function scrollTo(element: any, to: number, duration: number) {

  if (duration <= 0) return;

  let difference = to - element.scrollTop;
  let perTick = difference / duration * 10;

  setTimeout(function () {

    element.scrollTop = element.scrollTop + perTick;

    if (element.scrollTop == to) return;

    scrollTo(element, to, duration - 10);

  }, 10);

}

