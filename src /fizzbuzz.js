function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            console.log("".concat(i, " is Fizz"));
        }
        else if (i % 5 == 0) {
            console.log("".concat(i, " is Buzz"));
        }
        else if (i % 5 == 0 && i % 3 == 0) {
            console.log("".concat(i, " is FizzBuzz"));
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(30);
