function getTwoDigitsDay(value: Date) {

	return (value.getDate() < 10 ? '0' : '') + value.getDate();

}

function getTwoDigitsMonth(value: Date) {

	let m: any= "",
		n: any = value.getMonth() + 1;

	if (n < 10) {

		m += "0" + n;

	} else {

    m = n;
    
	}

	return m;

}

function getTwoDigitsYear(value: Date) {

	return ('' + value.getFullYear()).substr(2);

}

function getTwoDigitsHours(value: Date) {

	return (value.getHours() < 10 ? '0' : '') + value.getHours();

}

function getTwoDigitsMinutes(value: Date) {

	return (value.getMinutes() < 10 ? '0' : '') + value.getMinutes();

}

function getTwoDigitsSeconds(value: Date) {

	return (value.getSeconds() < 10 ? '0' : '') + value.getSeconds();

}
