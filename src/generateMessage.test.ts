import { generateMessage } from './generateMessage';

const testCases = [
	{
		title: 'should return the same number for minimum(1) boundary value',
		inputNumber: 1,
		expectedResult: '1',
	},
	{
		title: 'should return FizzBuzz for maximum(30) boundary value',
		inputNumber: 30,
		expectedResult: 'FizzBuzz',
	},
	{
		title: 'should return the number for non dividable to 3 and 5',
		inputNumber: 8,
		expectedResult: '8',
	},
	{
		title: 'should return FizzBuzz for divison of 3 and 5',
		inputNumber: 15,
		expectedResult: 'FizzBuzz',
	},
	{
		title: 'should return Fizz for division of 3',
		inputNumber: 9,
		expectedResult: 'Fizz',
	},
	{
		title: 'should return Buzz for division of 5',
		inputNumber: 5,
		expectedResult: 'Buzz',
	},
];

test.each(testCases)(' it $title', ({ inputNumber, expectedResult }) => {
	const fizzBuzzOutput = generateMessage(inputNumber);
	expect(fizzBuzzOutput).toBe(expectedResult);
});

test.each`
	inputNumber | expectedResult | title
	${1}        | ${'1'}         | ${'(table)should return the same number for minimum(1) boundary value'}
	${8}        | ${'8'}         | ${'(table)should return the number for non dividable to 3 and 5'}
	${30}       | ${'FizzBuzz'}  | ${'(table)should return FizzBuzz for maximum(30) boundary value'}
	${15}       | ${'FizzBuzz'}  | ${'(table)should return FizzBuzz for divison of 3 and 5'}
	${9}        | ${'Fizz'}      | ${'(table)should return Fizz for division of 3'}
	${5}        | ${'Buzz'}      | ${'(table)should return Buzz for division of 5'}
`(' it $title', ({ inputNumber, expectedResult }) => {
	const fizzBuzzOutput = generateMessage(inputNumber);
	expect(fizzBuzzOutput).toBe(expectedResult);
});
