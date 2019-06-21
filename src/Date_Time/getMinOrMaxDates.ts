function getMinDate(arr: Array <any>): any {

	let dateMin = arr[0],
		objectMin = new Date(arr[0]);

	arr.forEach(function (d, index) {

		if (new Date(d) < objectMin) {

			dateMin = d;
      objectMin = new Date(d);
      
		}

	});

	return dateMin;

}

function getMinDate(arr: Array <any>): any {

	let dateMax = arr[0],
		objectMax = new Date(arr[0]);

	arr.forEach(function (d, index) {

		if (new Date(d) > objectMax) {

			dateMax = d;
      objectMax = new Date(d);
      
		}

	});

	return dateMax;

}
