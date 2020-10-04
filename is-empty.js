module.exports = value => {
	if (Array.isArray(value)) {
		return !value.length;
	}

	for (const key in value) {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			return false;
		}
	}

	return true;
};
