function bogoSort(arr: Array<any>){

	let isSorted = function(arr: Array<any>){

		for(let i = 1; i < arr.length; i++){

			if (arr[i-1] > arr[i]) {

				return false;

			}

		}

		return true;

	};

	function shuffle(arr: Array<any>){

		let count = arr.length, temp, index;

		while(count > 0){

			index = Math.floor(Math.random() * count);
			count--;

			temp = arr[count];
			arr[count] = arr[index];
			arr[index] = temp;

		}

		return arr;

	}

	function sort(arr: Array<any>){

		let sorted = false;

		while(!sorted){

			arr = shuffle(arr);
			sorted = isSorted(arr);

		}

		return arr;

  }

  return sort(arr);

}
