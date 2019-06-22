function getPairKeyValue(obj: any) {

	let keys = getKeys(obj),
		length = keys.length,
		pairs = Array(length);

	for (let i = 0; i < length; i++) {

		pairs[i] = [keys[i], obj[keys[i]]];

	}

	return pairs;
}

function getKeys(obj: object) {

	if (!isObject(obj)) return [];

	if (Object.keys) return Object.keys(obj);

	let keys = [];

	for (let key in obj) if (obj.hasOwnProperty(key)) keys.push(key);

	return keys;

}

function isObject(obj: object) {

	let type = typeof obj;

	return type === 'function' || type === 'object' && !!obj;

}
