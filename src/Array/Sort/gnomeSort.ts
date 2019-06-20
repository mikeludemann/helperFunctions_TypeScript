function gnomeSort(arr: Array<any>) {

	function moveBack(i: number) {

		for (; i > 0 && arr[i - 1] > arr[i]; i--) {

			let t = arr[i];
			arr[i] = arr[i - 1];
			arr[i - 1] = t;

		}

	}

	for (let i = 1; i < arr.length; i++) {

		if (arr[i - 1] > arr[i]) moveBack(i);

	}

	return arr;

}
