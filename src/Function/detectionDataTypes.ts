function detectionDataType(value: any) {

	let dataTypes: any = [Function, RegExp, Number, String, Boolean, Object, Array, Symbol, null, undefined],
		x,
		length;

	if (typeof value === "object" || typeof value === "function") {

		for (x = 0, length = dataTypes.length; x < length; x++) {

			if (value instanceof dataTypes[x]) {

				return dataTypes[x];

			}

		}

	}

	return typeof value;

}
