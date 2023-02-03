"use strict";
exports.__esModule = true;
var generateMessage_1 = require("./generateMessage");
var fizzbuzz = function () {
    var input = 30;
    for (var i = 1; i <= input; i++) {
        console.log((0, generateMessage_1.generateMessage)(i));
    }
};
fizzbuzz();
