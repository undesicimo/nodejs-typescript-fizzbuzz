import { generateMessage } from './generateMessage';

describe('Check for generateMessage return value', () => {
	it('should return FizzBuzz for divison of 3 and 5', () => {
		const input = 15;
		const result = generateMessage(input);
		expect(result).toBe('FizzBuzz');
	});
	it('should return Fizz for division of 3', () => {
		const input = 9;
		const result = generateMessage(input);
		expect(result).toBe('Fizz');
	});
	it('should return Buzz for division of 5', () => {
		const input = 10;
		const result = generateMessage(input);
		expect(result).toBe('Buzz');
	});
	it('should return the number for non dividable to 3 and 5', () => {
		const input = 8;
		const result = generateMessage(input);
		expect(result).toBe('8');
	});
});
