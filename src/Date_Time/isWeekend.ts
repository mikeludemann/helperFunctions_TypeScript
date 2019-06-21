let isWeekend = function (value: Date) {

	let d = new Date(value);

	if (d.getDay() == 6 || d.getDay() == 0) {

		return "weekend";

	} else {

		return "not weekend"

	}

}
