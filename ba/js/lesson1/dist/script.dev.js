"use strict";

//Task 1
var yourName = prompt("Your name..");
console.log("Hello " + yourName + " !"); //Task 2

var CURRENT_YEAR = 2020;
var birthYear = prompt("When your were born?   ");
var age = CURRENT_YEAR - birthYear;
console.log("You are " + age + " years old!"); //Task 3

var side = prompt("Enter length of side of square");
console.log("The perimetr equals: ".concat(side * 4)); //Task 4

var radius = prompt("Enter radius of the circle");
console.log("The area of circle: " + Math.pow(radius, 2) * 3.14); //Task 5

var distance = prompt("What is distance of the trip in kilometers?  ");
var time = prompt("How long the trip would be in hours?  ");
console.log("You should mantain average speed: " + distance / time + " kph!"); //Task 6

var EXCHANGE_RATE = 1.11;
var sum = prompt("Enter sum in USD: ");
console.log("You have " + sum * EXCHANGE_RATE + " euros!"); //Task 7

var flash = prompt("Enter a size of flash drive in GB: ");
console.log("You can place " + Math.trunc(flash * 1024 / 820) + " files on flashdrive"); //Task 8

var money = prompt("How much money do you have?  ");
var price = prompt("How much is chocolate bar?  ");
console.log("You can buy: " + Math.trunc(money / price) + " chocolates and here is " + money % price + " your change"); //Task 9 - Now works correct for numbers  like 100

var num = prompt("Enter a 3-digit number: ");
alert((num % 10 != 0 ? 100 * (num % 10) : "0") + ((Math.trunc(num / 10) % 10 != 0 ? 10 * (Math.trunc(num / 10) % 10) : "0") + Math.trunc(num / 100))); //Task 10

var deposit = prompt("Enter a sum of deposit: ");
console.log("You percent is " + deposit * 0.05 / 12); //Extra 1

var admin, name;
name = "Джон";
admin = name;
alert(admin);
/* //Extra 2

let name = "Ilya";

alert(`hello ${1}`); // ?   'hello 1'

alert(`hello ${"name"}`); // ?  'hello name'

alert(`hello ${name}`); // ?  'hello Ilya
*/
//Extra 3

var a = prompt("Первое число?", 1);
var b = prompt("Второе число?", 2);
alert(+a + +b);