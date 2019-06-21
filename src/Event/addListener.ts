/*!
	* Add an event listener
	* 
	* @param {String} event The event type
	* @param {Node} elementAdd The element to attach the event to (optional, defaults to window)
	* @param {Function} callback The callback to run on the event
	* @param {Boolean} bool If true, forces bubbling on non-bubbling events
	*/

function addListener(event: any, elementAdd: any, callback: any, bool: Boolean) {

	if (typeof (elementAdd) === 'function') {

		bool = callback;
		callback = elementAdd;
		elementAdd = window;

	}

	bool = bool ? true : false;

	elementAdd = typeof elementAdd === 'string' ? document.querySelector(elementAdd) : elementAdd;

	if (!elementAdd) return;

	elementAdd.addEventListener(event, callback, bool);

}
