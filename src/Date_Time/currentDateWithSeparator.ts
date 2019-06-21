let currentDateWithSeparator = function (separator: any) {

	let today = new Date();

	let dd: any = today.getDate(),
		mm: any = today.getMonth() + 1,
		yyyy: any = today.getFullYear();

	if (dd < 10) {

		dd = '0' + dd;

	}

	if (mm < 10) {

		mm = '0' + mm;

	}

  return (mm + separator + dd + separator + yyyy);
  
};
