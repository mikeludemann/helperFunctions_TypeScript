function isPrimeNumber(value: number) {

	if (value === 1) {

		return false;

	}

	else if (value === 2) {

		return true;

	} else {

		for (let x = 2; x < value; x++) {

			if (value % x === 0) {

				return false;

			}

		}

		return true;

	}

}
