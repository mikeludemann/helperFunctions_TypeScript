Object.getObjectSize = function (obj: object) {

	let size = 0,
		key;

	for (key in obj) {

		if (obj.hasOwnProperty(key)) size++;

	}

	return size;

};
