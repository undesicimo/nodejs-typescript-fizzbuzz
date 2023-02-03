import { generateMessage } from './generateMessage';

// test('it should return FizzBuzz for divison of 3 and 5', () => {
// 	const inputNumber = 15;
// 	const result = generateMessage(inputNumber);
// 	expect(result).toBe('FizzBuzz');
// });

describe('Check for generateMessage return value', () => {
	it('should return FizzBuzz for divison of 3 and 5', () => {
		const inputNumber = 15;
		const result = generateMessage(inputNumber);
		expect(result).toBe('FizzBuzz');
	});
	it('should return Fizz for division of 3', () => {
		const inputNumber = 9;
		const result = generateMessage(inputNumber);
		expect(result).toBe('Fizz');
	});
	it('should return Buzz for division of 5', () => {
		const inputNumber = 10;
		const result = generateMessage(inputNumber);
		expect(result).toBe('Buzz');
	});
	it('should return the number for non dividable to 3 and 5', () => {
		const inputNumber = 8;
		const result = generateMessage(inputNumber);
		expect(result).toBe('8');
	});
});
