export const generateMessage = (n: number): string => {
    const isFizzNumber = n % 3 === 0;
    const isBuzzNumber = n % 5 === 0;

    if (isFizzNumber && isBuzzNumber) {
        return 'FizzBuzz';
    }
    if (isFizzNumber) {
        return 'Fizz';
    }
    if (isBuzzNumber) {
        return 'Buzz';
    }
    return n.toString();
};
