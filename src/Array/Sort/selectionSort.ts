function selectionSort(arr: Array<any>, cFunction: (...element: Array<any>) => void) {

	function compare(a: any, b: any) {
		return a - b;
	}

	let min = 0,
		index = 0,
		temp = 0;

	cFunction = cFunction || compare;

	for (let i = 0; i < arr.length; i += 1) {

		index = i;
		min = arr[i];

		for (let j = i + 1; j < arr.length; j += 1) {

			if (cFunction(min, arr[j]) > 0) {

				min = arr[j];
				index = j;

			}

		}

		temp = arr[i];
		arr[i] = min;
		arr[index] = temp;

	}

	return arr;

}
