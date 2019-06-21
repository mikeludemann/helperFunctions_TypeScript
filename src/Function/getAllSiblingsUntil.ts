function getAllSiblingsUntil(element: any, stopElement: any, filter: any) {

	if (!Element.prototype.matches) {

		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

	}

	let parents = [];

	for (; element && element !== document; element = element.parentNode) {

		if (stopElement) {

			if (element.matches(stopElement)) break;

		}

		if (filter) {

			if (element.matches(filter)) {

				parents.push(element);

			}

			continue;

		}

		parents.push(element);

	}

	return parents;

}
