function stopScrollFunction(callback: () => void) {

	if (!callback || Object.prototype.toString.call(callback) !== '[object Function]') return;

	let isScrolling: any;

	window.addEventListener('scroll', function (event) {

		window.clearTimeout(isScrolling);

		isScrolling = setTimeout(function () {

			callback();

		}, 66);

	}, false);

}
