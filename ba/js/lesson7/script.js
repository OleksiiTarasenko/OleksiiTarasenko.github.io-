"use strict";

let arr = [-1, 3, 7, 0, 12, 0, -88, 53, 50];
let arrStr = ["a", "asdfg", "fghjyu56", "rrrr", "yyyyyyy"];
let arrOfArrs = [1, "a", [1, 3, 6], ["a", "b"], [1, "b"]];
//forEach
//1
let arrSqr = [];
arr.forEach((item) => arrSqr.push(item ** 2));

console.log(arrSqr);

//2
let sum = 0;
arr.forEach((item) => (sum += item));

console.log(sum);

//map
//3
let arrSq = arr.map((item) => item ** 2);
console.log(arrSq);

//every, some
//4
console.log(arr.every((x) => x > 0));

//5
console.log(arr.some((x) => x < 0));

//filter
//6
console.log(arr.filter((x) => x < 0));
//7
console.log(arr.filter((x) => !(x % 2)));
//8
console.log(arrStr.filter((item) => item.length > 4));
//9
console.log(arrOfArrs.filter((item) => Array.isArray(item)));
//10
console.log(arr.filter((x) => x < 0).length);

//reduce, reduceRight
//11
console.log(
  arr.reduce((accumulator, currentValue) => (accumulator += currentValue))
);
//12
let zeroPosition = (array) => array.indexOf(0);
console.log(
  arr
    .slice(0, zeroPosition(arr))
    .reduce((accumulator, currentValue) => (accumulator += currentValue))
);

//13

let zeroLastPosition = (array) => array.lastIndexOf(0);

console.log(
  arr
    .slice(zeroLastPosition(arr) + 1)
    .reduceRight((accumulator, currentValue) => (accumulator += currentValue))
);

//14
const array = [1, 2, 3, 4, 5, 6];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

for (let i = 0; i < array.length; i++) {
  if (array.slice(0, i + 1).reduce(reducer, 0) > 10) {
    console.log(i + 1);
    break;
  }
}

//15
const arr2 = [1, 2, 8, 4, 5, 1];
for (let i = arr2.length - 1; i >= 0; i--) {
  if (
    arr2
      .slice(i)
      .reduce((accumulator, currentValue) => accumulator + currentValue) > 10
  ) {
    console.log(arr2.length - i);
    break;
  }
}

//16 Summary

const nums = [1, -4, 9, -36, 100, -144, 400];

console.log(nums.filter((x) => x > 0).map((x) => Math.sqrt(x)));
