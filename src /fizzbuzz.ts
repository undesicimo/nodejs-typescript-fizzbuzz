function fizzBuzz(num: number): void {
	for (let i = 1; i <= num; i++) {
		if (i % 3 == 0) {
			console.log(`${i} is Fizz`);
		} else if (i % 5 == 0) {
			console.log(`${i} is Buzz`);
		} else if (i % 5 == 0 && i % 3 == 0) {
			console.log(`${i} is FizzBuzz`);
		} else {
			console.log(i);
		}
	}
}

fizzBuzz(30);
