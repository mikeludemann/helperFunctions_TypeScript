function dump(arr: Array<any>, level: number) {

	let output = "";

	if (!level)
		level = 0;

	let text = "";

	for (let i = 0; i < level + 1; i++)
		text += "  ";

	if (typeof(arr) == 'object') {

		for (let item in arr) {

			let value = arr[item];

			if (typeof(value) == 'object') {

				output += text + "'" + item + "'\n";
				output += dump(value, level + 1);


			} else {
				output += text + "'" + item + "' => \"" + value + "\"\n";

			}

		}

	} else {

		output = "(" + typeof(arr) + ") => \n" + arr;

	}

	return output;

}
