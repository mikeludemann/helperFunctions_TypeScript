function webWorker(url: any, element: any) {

  let w: any;

  function starting() {

    if (typeof (Worker) !== "undefined") {

      if (typeof (w) == "undefined") {

        w = new Worker(url);

      }

      w.onmessage = function (event: any) {

        document.querySelector(element).innerHTML = event.data;

      };

    } else {

      document.querySelector(element).innerHTML = "Not supporting Browser for Web Worker";

    }

  }

  function stopping() {

    w.terminate();

    w = undefined;

  }

}