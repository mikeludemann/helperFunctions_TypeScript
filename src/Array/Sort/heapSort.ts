let array_length: number;

function heapMain(input: any, i: number) {

	let left = 2 * i + 1,
		right = 2 * i + 2,
		max = i;

	if (left < array_length && input[left] > input[max]) {

		max = left;

	}

	if (right < array_length && input[right] > input[max]) {

		max = right;

	}

	if (max != i) {

		swap(input, i, max);
		heapMain(input, max);

	}

}

function swap(input: any, firstIndex: number, secondIndex: number) {

	let temp = input[firstIndex];

	input[firstIndex] = input[secondIndex];
	input[secondIndex] = temp;

}

function heapSort(arr: Array<any>) {

	array_length = arr.length;

	for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {

		heapMain(arr, i);

	}

	for (let i = arr.length - 1; i > 0; i--) {

		swap(arr, 0, i);
		array_length--;


		heapMain(arr, 0);

	}

}
