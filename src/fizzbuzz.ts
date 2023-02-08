import { generateMessage } from './generateMessage';

const fizzbuzz = () => {
	const input = 30;

	for (let i = 1; i <= input; i++) {
		console.log(generateMessage(i));
	}
};

fizzbuzz();