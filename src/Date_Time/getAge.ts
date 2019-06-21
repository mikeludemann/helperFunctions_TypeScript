function getAge(value: Date) {

	let today = new Date(),
		birthDate = new Date(value),
		age = today.getFullYear() - birthDate.getFullYear(),
		m = today.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {

		age = age - 1;

	}

	return age;

}
