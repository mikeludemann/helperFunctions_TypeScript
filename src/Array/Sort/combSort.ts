function combSort(arr: Array<any>) {

	function is_array_sorted(arr: Array<any>) {

		let sorted = true;

		for (let i = 0; i < arr.length - 1; i++) {

			if (arr[i] > arr[i + 1]) {

				sorted = false;
				break;

			}

		}

		return sorted;

	}

	let iteration_count = 0,
		gap = arr.length - 2,
		decrease_factor = 1.25;

	while (!is_array_sorted(arr)) {

		if (iteration_count > 0)
			gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

		let front = 0,
			back = gap;

		while (back <= arr.length - 1) {

			if (arr[front] > arr[back]) {

				let temp = arr[front];
				arr[front] = arr[back];
				arr[back] = temp;

			}

			front += 1;
			back += 1;
		}

		iteration_count += 1;

	}

	return arr;

}
