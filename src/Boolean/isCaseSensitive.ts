function isCaseInsensitive(value: string, searchString: string) {

	var result = value.search(new RegExp(searchString, "i"));

	if (result > 0) {

		return true;

	} else {

		return false;

	}

}
