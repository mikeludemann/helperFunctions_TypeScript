let getFullNameMonthLong = function (value: Date) {

	let list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	return list[value.getMonth()];

};

let getFullNameMonthShort = function (value: Date) {

	let list = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	return list[value.getMonth()];

};
