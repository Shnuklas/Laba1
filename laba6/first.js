function checkNumber(num) {
	if (isNaN(num)) {
		return "";
	}
	if (num % 2 === 0) {
		return "парне";
	} else {
		return "непарне";
	}
}
