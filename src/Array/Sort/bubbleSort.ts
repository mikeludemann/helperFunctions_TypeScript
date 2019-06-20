function swapping(arr: Array<any>, firstIndex: number, secondIndex: number) {

	let temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;

}

function bubble_Sort(arr: Array<any>) {

	let len = arr.length,
		i, j, stop;

	for (i = 0; i < len; i++) {

		for (j = 0, stop = len - i; j < stop; j++) {

			if (arr[j] > arr[j + 1]) {

				swapping(arr, j, j + 1);

			}

		}

	}

	return arr;

}
