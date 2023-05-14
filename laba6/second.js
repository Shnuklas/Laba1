function sumOfFirstFivePrimes() {
	const primes = [];

	for (let i = 2; primes.length < 5; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}

	return primes.reduce((acc, cur) => acc + cur, 0);
}

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	const sqrt = Math.sqrt(num);
	for (let i = 2; i <= sqrt; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
