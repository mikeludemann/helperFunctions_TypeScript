function isSameType(valueFirst: any, valueSecond: any) {

	if (isNan(valueFirst) || isNan(valueSecond)) {

		return isNan(valueFirst) === isNan(valueSecond);

	}

	return toString.call(valueFirst) === toString.call(valueSecond);

}

function isNan(value: number) {

	return value !== value;

}
