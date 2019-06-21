function getUntilElement(element: any, stopElement: any, filter: any) {

	if (!Element.prototype.matches) {

		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

	}

	let arr = [];

	element = element.nextElementSibling;

	while (element) {

		if (element.matches(stopElement)) break;

		if (filter && !element.matches(filter)) {

			element = element.nextElementSibling;
			continue;

		}

		arr.push(element);

		element = element.nextElementSibling;

	}

	return arr;

}
