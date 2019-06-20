function mediaqueries(querySize: any) {
  if (querySize.matches) {
    // Matching Code
  } else {
    // Default Code
  }
}

let size = window.matchMedia("(max-width: 700px)");

myFunction(size);

size.addListener(myFunction);