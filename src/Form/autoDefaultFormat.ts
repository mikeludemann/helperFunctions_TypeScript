// Setting styles in a CSS File

function autoDefaultFormat(field: any) {

	field.style.height = 'inherit';

	let computed = window.getComputedStyle(field);

	let height = parseInt(computed.getPropertyValue('border-top-width'), 20)
		+ parseInt(computed.getPropertyValue('padding-top'), 20)
		+ field.scrollHeight
		+ parseInt(computed.getPropertyValue('padding-bottom'), 20)
		+ parseInt(computed.getPropertyValue('border-bottom-width'), 20);

	field.style.height = height + 'px';

}
