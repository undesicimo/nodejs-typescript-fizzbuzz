export const generateMessage = (n: number): string => {
	const fizzBuzzNumber = n % 3 === 0 && n % 5 === 0;
	const fizzNumber = n % 3 === 0;
	const buzzNumber = n % 5 === 0;

	if (fizzBuzzNumber) {
		return 'FizzBuzz';
	}
	if (fizzNumber) {
		return 'Fizz';
	}
	if (buzzNumber) {
		return 'Buzz';
	}
	return n.toString();
};
