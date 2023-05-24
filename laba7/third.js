function sumOfSeries(n) {
	let sum = 0;
	let num = 0;
	for (let i = 0; i < n; i++) {
		num = num * 10 + 1;
		sum += num;
	}
	return sum;
}
