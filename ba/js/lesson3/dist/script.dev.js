"use strict";

//Task 1
var start = prompt(" Enter start number");
var end = prompt("Enter end number");
var sum = 0;

for (var i = +start; i < +end + 1; i++) {
  sum += i;
}

alert("Total: ".concat(sum)); //Task 2

var numA = prompt(" Enter number A");
var numB = prompt("Enter number B");
var a = +numA;
var b = +numB;

while (a != 0 && b != 0) {
  a > b ? a = a % b : b = b % a;
}

alert("GCD of ".concat(numA, " and ").concat(numB, " is ").concat(a + b, " ")); //Task 3

dividers = [];
var number = prompt("Enter a number");

for (var _i = Math.trunc(number / 2); _i > 0; _i--) {
  if (number % _i == 0) {
    dividers.push(_i);
  }
}

alert(dividers); //Task 4

var number_ = prompt("Enter a number...");
console.log(number_.length); //Task 5

var positive = 0;
var negative = 0;
var zero = 0;
var odd = 0;
var even = 0;
console.log(positive, negative);

for (var _i2 = 0; _i2 < 10; _i2++) {
  var num = prompt("Enter a number....");
  num = +num;
  num == 0 ? zero++ : num > 0 ? positive++ : negative++;
  num % 2 ? odd++ : even++;
}

console.log(" You have entered:\nPositive numbers: ".concat(positive, "\nNegative numbers: ").concat(negative, "\nZeroes:           ").concat(zero, "\nOdd numbers:      ").concat(odd, "\nEven numbers:     ").concat(even)); //Task 6

do {
  var firstNum = +prompt("Enter a number: ");
  var secondNum = +prompt("Enter another number: ");
  var operationSign = prompt("Enter the operation sign (+ - * /): ");

  switch (operationSign) {
    case "+":
      console.log("".concat(firstNum, " ").concat(operationSign, " ").concat(secondNum, " = ").concat(firstNum + secondNum));
      break;

    case "-":
      console.log("".concat(firstNum, " ").concat(operationSign, " ").concat(secondNum, " = ").concat(firstNum - secondNum));
      break;

    case "*":
      console.log("".concat(firstNum, " ").concat(operationSign, " ").concat(secondNum, " = ").concat(firstNum * secondNum));
      break;

    case "/":
      console.log("".concat(firstNum, " ").concat(operationSign, " ").concat(secondNum, " = ").concat(firstNum / secondNum));
      break;

    default:
      break;
  }

  var continueCalc = prompt("Another calculation? (Y - continue/ any key - finish) ");
} while (continueCalc == "Y"); //Task 7


var numberToShift = prompt("Enter a number  ");
var shift = prompt("Enter a number of digits to shift  ");
console.log(numberToShift.slice(shift) + numberToShift.slice(0, shift)); //Task 8

var today = 0;
var day$;

do {
  switch (today) {
    case 0:
      day$ = "Monday";
      break;

    case 1:
      day$ = "Tuesday";
      break;

    case 2:
      day$ = "Wednesday";
      break;

    case 3:
      day$ = "Thursday";
      break;

    case 4:
      day$ = "Friday";
      break;

    case 5:
      day$ = "Saturday";
      break;

    case 6:
      day$ = "Sunday";
      break;
  }

  today = (today + 1) % 7;
  var exit = prompt("Today is ".concat(day$, ". Do you want to see the next day? (any key - yes / n- finish) "));
} while (exit != "n"); //Task 9


console.log(" Times table ");

for (var _i3 = 2; _i3 < 10; _i3++) {
  console.log("\n    by ".concat(_i3, " \n  "));

  for (var j = 1; j < 11; j++) {
    console.log("".concat(_i3, " x ").concat(j, " = ").concat(_i3 * j));
  }
} //Task 10


var secret = 48;
var factor = 32;

do {
  var condition = prompt("  Your number is ".concat(secret, " ( = )\n  Your number is greater than  ").concat(secret, "  ( > )\n  Your number is less than  ").concat(secret, "  ( < ) "));
  condition == ">" ? secret = Math.min(secret + factor, 100) : condition == "<" ? secret = secret - factor : {};
  factor = Math.max(factor / 2, 1);
} while (condition != "=");

console.log("Your number is ".concat(secret));