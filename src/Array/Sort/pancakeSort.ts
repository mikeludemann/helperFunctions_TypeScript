function pancakeSort(arr: Array<any>) {

	for (let i = arr.length - 1; i >= 1; i--) {

		let maxID = 0,
			max = arr[0];

		for (let j = 1; j <= i; j++) {

			if (arr[j] > max) {

				max = arr[j];
				maxID = j;

			}

		}

		if (maxID == i)

			continue;

		let new_slice;

		if (maxID > 0) {

			new_slice = arr.slice(0, maxID + 1).reverse();

			for (let j = 0; j <= maxID; j++)

				arr[j] = new_slice[j];

		}

		new_slice = arr.slice(0, i + 1).reverse();

		for (let j = 0; j <= i; j++)

			arr[j] = new_slice[j];

	}

	return arr;

}
