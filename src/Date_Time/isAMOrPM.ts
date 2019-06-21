function isAMOrPM_UpperCase(value: Date) {

	return value.getHours() < 12 ? 'AM' : 'PM';

}

function isAMOrPM_LowerCase(value: Date) {

	return value.getHours() < 12 ? 'am' : 'pm';

}
