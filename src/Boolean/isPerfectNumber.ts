function isPerfectNumber(value: number) {

	let tmp = 0;

	for (let i = 1; i <= value / 2; i++) {

		if (value % i === 0) {

			tmp += i;

		}

	}

	if (tmp === value && tmp !== 0) {

		return true;
	}

	else {

		return false;

  }
  
} 
