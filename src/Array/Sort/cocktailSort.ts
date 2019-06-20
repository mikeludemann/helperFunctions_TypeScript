function cocktailSort(arr: Array<any>) 
{
	let switcher;

	do {

		for (let i = 0; i < arr.length - 2; i++) {

			if (arr[i] > arr[i + 1]) {

				let temp = arr[i];
				arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        
				switcher = true;

			}

		}

		if (!switcher) {

			break;

		}

		switcher = false;

		for (let i = arr.length - 2; i > 0; i--) {

			if (arr[i] > arr[i + 1]) {

				let temp1 = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp1;
				switcher = true;

			}

		}

	} while (switcher);

	return arr;

}
