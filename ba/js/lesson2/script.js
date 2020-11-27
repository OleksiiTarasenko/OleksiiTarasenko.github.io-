/* //Task 1
let age = prompt("How old are you?  ");
age = +age;

alert(
  0 <= age && age < 2
    ? "Infant"
    : 2 <= age && age < 12
    ? "Kid"
    : 12 <= age && age < 19
    ? "Teenager"
    : 19 <= age && age < 60
    ? "Adult"
    : 60 <= age && age < 125
    ? "Pensioner"
    : "Are you kidding me?"
);

//Task 2

let btnPressed = prompt("Press a button from 0 to 9...");

switch (btnPressed) {
  case "0":
    console.log(")");
    break;
  case "1":
    console.log("!");
    break;
  case "2":
    console.log("@");
    break;
  case "3":
    console.log("#");
    break;
  case "4":
    console.log("$");
    break;
  case "5":
    console.log("%");
    break;
  case "6":
    console.log("^");
    break;
  case "7":
    console.log("&");
    break;
  case "8":
    console.log("*");
    break;
  case "9":
    console.log(")");
    break;
  default:
    console.log("Wrong button!!!");
    break;
}


//Task 3

let number = prompt("Enter 3-digit number...");
console.log(
  number[0] == number[1] || number[0] == number[2] || number[1] == number[2]
    ? "You have got same digits"
    : "No same digits"
);

//Task 4

let year = prompt("Enter a year...");
console.log(
  year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
    ? "It's a leap year"
    : "It's a common year"
);

//Task 5

let number5d = prompt("Enter 5-digit number...");
console.log(
  number5d[0] == number5d[4] && number5d[1] == number5d[3]
    ? "A palindrome"
    : "Not a palindrome"
);


//Task 6

const EX_RATE_EUR = 0.9;
const EX_RATE_UAH = 28.5;
const EX_RATE_AZN = 1.8;
let sum = prompt("Enter sum in USD: ");
let currency = prompt("Enter a currency (EUR, UAH, AZN): ");

switch (currency) {
  case "EUR":
    console.log(`You have got ${sum * EX_RATE_EUR} euros!`);
    break;
  case "UAH":
    console.log(`You have got ${sum * EX_RATE_UAH} hryvnyas!`);
    break;
  case "AZN":
    console.log(`You have got ${sum  EX_RATE_AZN} manats!`);
    break;
}


//Task 7

let flash = prompt('Enter a size of flash drive in GB: ');

console.log('You can place ' + Math.trunc(flash*1024/820) +' files on flashdrive');


//Task 8

let total = prompt("How much have you spent? ...");

console.log(
  `Total with discount applied
  ${
    total < 200
      ? total
      : total < 300
      ? total * 0.97
      : total < 500
      ? total * 0.95
      : total * 0.93
  }
   UAH`
);

//Task 9

let circleLength = prompt("Enter a lentgh of circle: ");
let perimter = prompt("Enter a perimter of square: ");

console.log(
  circleLength / Math.PI <= perimter / 4
    ? " You can fit the circle to the square"
    : "You can't fit the circle to the square"
);
*/

//Task 10
let score = 0;
let quest = {
  question1: {
    task: "2+4 = ?",
    answers: ["3", "4", "6"],
    correct: "C",
  },
  question2: {
    task: "2+5 = ?",
    answers: ["7", "4", "6"],
    correct: "A",
  },
  question3: {
    task: "6+4 = ?",
    answers: ["10", "4", "6"],
    correct: "A",
  },
};

for (let key of Object.keys(quest)) {
  let userAnswer = prompt(
    `Question: ${quest[key].task}
     A: ${quest[key].answers[0]} 
     B: ${quest[key].answers[1]} 
     C: ${quest[key].answers[2]} 
     Enter your choice... `
  );

  if (userAnswer == quest[key].correct) {
    score += 2;
  }
}

console.log(`Your score is - ${score}`);

//Task 11

let day = prompt("Enter a day");
let month = prompt("Enter a month");
let year = prompt("Enter a year");
let nextDay;
day == "31" && month != "12"
  ? (nextDay = `1/${+month + 1}/${year}`)
  : day == "31" && month == "12"
  ? (nextDay = `1/1/${+year + 1}`)
  : (day == "28" && month == "2" && year % 400 == 0) ||
    (year % 4 == 0 && year % 100 != 0)
  ? (nextDay = `${+day + 1}/${+month}/${+year}`)
  : (day == "29" && month == "2" && year % 400 == 0) ||
    (year % 4 == 0 && year % 100 != 0)
  ? (nextDay = `1/${+month + 1}/${year}`)
  : (day == "28" && month == "2" && year % 400 != 0) ||
    (year % 4 != 0 && year % 100 != 0)
  ? (nextDay = `1/${+month + 1}/${year}`)
  : day == "30" &&
    (month == "1" ||
      month == "3" ||
      month == "5" ||
      month == "7" ||
      month == "8" ||
      month == "10" ||
      month == "12")
  ? (nextDay = `${+day + 1}/${+month}/${+year}`)
  : day == "30" &&
    (month == "4" || month == "6" || month == "9" || month == "11")
  ? (nextDay = `1/${+month + 1}/${year}`)
  : (nextDay = `${+day + 1}/${+month}/${+year}`);

alert(`Next day is ${nextDay}`);
