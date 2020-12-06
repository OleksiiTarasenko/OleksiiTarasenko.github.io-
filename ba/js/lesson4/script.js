//Task 1

const greaterThan = (numA, numB) => (numA > numB ? 1 : numA == numB ? 0 : -1);

console.log(greaterThan(96, 6));
console.log(greaterThan(0, 6));
console.log(greaterThan(-4, -4));

//Task 2

const factorial = (n) => (n == 0 || n == 1 ? 1 : n * factorial(n - 1));

console.log(factorial(6));

//Task 3

const threeNumbers = (num1, num2, num3) => +(num1.toString() + num2 + num3);

console.log(threeNumbers(9, 4, 8));

//Task 4
function area(a, b) {
  if (b === undefined) return a ** 2;
  return a * b;
}

console.log(area(10));

console.log(area(6, 3));

//Task 5

function dividersList(num) {
  let dividers = [];

  for (let i = Math.trunc(num / 2); i > 0; i--) {
    if (num % i == 0) {
      dividers.push(i);
    }
  }
  return dividers;
}

function perfectNumber(num) {
  return (
    num ==
    dividersList(num).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  );
}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(496));
console.log(perfectNumber(8128));
console.log(perfectNumber(8129));

//Task 6  v.1

function listGen(start, finish) {
  let arr = [];
  for (let i = start; i <= finish; i++) arr.push(i);
  return arr;
}
function allPerfect(start, finish) {
  let perfectList = [];
  for (let i = start; i <= finish; i++) {
    if (perfectNumber(i)) {
      perfectList.push(i);
    }
  }
  return perfectList;
}
console.time("Execution Time");
console.log(allPerfect(2, 10000));
console.timeEnd("Execution Time");

//Task 6  v.2 filter method about 10% faster

filterPerfect = (start, finish) =>
  listGen(start, finish).filter((j) => perfectNumber(j));

console.time("Execution Time");
console.log(filterPerfect(2, 10000));
console.timeEnd("Execution Time");

// Task 7

function timeOutput(hr, min = "00", sec = "00") {
  return `${String(hr).length < 2 ? (hr = "0" + hr) : hr}:${
    String(min).length < 2 ? (min = "0" + min) : min
  }:${String(sec).length < 2 ? (sec = "0" + sec) : sec}`;
}

console.log(timeOutput(3, 9));

// Task 8

const toSeconds = function (hr, min, sec) {
  return hr * 3600 + min * 60 + sec;
};

console.log(toSeconds(1, 5, 14));

// Task 9

const secondsToTime = function (sec) {
  let hrs = (sec - (sec % 3600)) / 3600;
  let mins = ((sec % 3600) - ((sec % 3600) % 60)) / 60;
  let secs = sec % 60;
  return timeOutput(hrs, mins, secs);
};

console.log(secondsToTime(3914));

//Task 10
function timeDifference(hr1, min1, sec1, hr2, min2, sec2) {
  return secondsToTime(toSeconds(hr2, min2, sec2) - toSeconds(hr1, min1, sec1));
}

console.log(timeDifference(2, 30, 0, 22, 15, 1));
console.log(timeDifference(23, 30, 0, 22, 15, 1));
