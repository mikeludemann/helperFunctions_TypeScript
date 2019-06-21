function getHoursAndMinutes(value: number) {

	let num = value,
		hours = (num / 60),
		restHours = Math.floor(hours),
		minutes = (hours - restHours) * 60,
		restMinutes = Math.round(minutes);

	return restHours + " hour(s) and " + restMinutes + " minute(s).";

}
