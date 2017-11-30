export default {
	enableElements(elements) {
		elements.forEach(element => (element.disabled = false));
	},
	disableElements(elements) {
		elements.forEach(element => (element.disabled = true));
	}
};
