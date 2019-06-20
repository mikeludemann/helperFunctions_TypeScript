function quickSort(arr: Array<any>) {

	if (arr.length <= 1) {

		return arr;

	} else {

		let left = [],
			right = [],
			newArray: any = [],
			pivot = arr.pop(),
			length = arr.length;

		for (let i = 0; i < length; i++) {

			if (arr[i] <= pivot) {

				left.push(arr[i]);

			} else {

				right.push(arr[i]);

			}

		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));

	}
}
