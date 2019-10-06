export default {
	formatTelephone(value) {
		return value.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
	},
};
