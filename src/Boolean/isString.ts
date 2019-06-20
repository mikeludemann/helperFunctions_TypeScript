function isString(value: string) {

	if (Object.prototype.toString.call(value) === '[object String]') {

		return true;

	} else {

		return false;

	}

};
