function getAllSiblings(element: any) {

	let arr = [],
		firstElement = element.parentNode.firstChild;

	for (; firstElement; firstElement = firstElement.nextSibling) {

		if (firstElement.nodeType === 1 && firstElement !== element) {

			arr.push(firstElement);

		}

	}

	return arr;

}
