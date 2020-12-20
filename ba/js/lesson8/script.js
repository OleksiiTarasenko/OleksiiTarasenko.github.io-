"use strict";

//Task 1
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get getRadius() {
    console.log(`The radius of the circle is ${this.radius}`);
  }
  set setRadius(newRadius) {
    this.radius = newRadius;
  }
  get getCircleLength() {
    console.log(`The length of the circle is ${this.radius * Math.PI * 2}`);
  }
  circleLength() {
    return (2 * Math.PI * this.radius).toFixed(3);
  }
  circleArea() {
    return (Math.PI * this.radius ** 2).toFixed(3);
  }
}

let smallCircle = new Circle(5);
let mediumCircle = new Circle(20);
let largeCircle = new Circle(100);
smallCircle.getRadius;
smallCircle.setRadius = 3;
smallCircle.getRadius;
mediumCircle.getRadius;
console.log(mediumCircle.circleArea());
mediumCircle.getCircleLength;
console.log(largeCircle.circleLength());

//Task 2

class Marker {
  constructor(color, fill) {
    this.color = color;
    this.fill = parseInt(fill);
  }
  get getStatus() {
    console.log(`The ${this.color} marker  is ${this.fill}% full`);
  }

  print(str) {
    let fillForGo = str.split(" ").join("").length * 0.005;

    while (this.fill > fillForGo) {
      document.write(`<p style = "color: ${this.color}">${str}</p>`);
      this.fill -= fillForGo.toFixed(3);
    }
    if (this.fill > 0.005) {
      let lettersLeft4Print = Math.floor(this.fill / 0.005);
      document.write(
        `<p style = "color: ${this.color}">${str.slice(
          0,
          lettersLeft4Print
        )}</p>`
      );
      this.fill -= lettersLeft4Print * 0.005;
    }
  }
}

let myMarker = new Marker("blue", "3%");
myMarker.getStatus;
myMarker.print("Yahoo! Ya-ha - ha -  hoo !!!");
myMarker.getStatus;

class reusableMarker extends Marker {
  constructor(color, fill) {
    super(color, fill);
  }

  reflill(fillAmount) {
    this.fill = String(Math.min(100, this.fill + parseInt(fillAmount)));
  }
}

let refillMarker = new reusableMarker("green", "2%");

refillMarker.getStatus;
refillMarker.print("Hello!!!! World!!!!");
refillMarker.getStatus;

refillMarker.reflill("150%");
refillMarker.getStatus;

// Task 3

class Employee {
  constructor(name, surname, age, position, salary) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }
  getHTML() {
    let tableBody = "";
    for (let item of this.employees) {
      tableBody += `<tr><td>${item.name}</td><td>${item.surname}</td><td>${item.age}</td><td>${item.position}</td><td>${item.salary}</td></tr>`;
    }
    return `<table><caption>------------ Bank Employees List -----------</caption> <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Age</th>
    <th>Position</th>
    <th>Salary</th>
   </tr> ${tableBody}</table>`;
  }
  printHTML() {
    document.write(this.getHTML());
    return this;
  }
}

let john = new Employee("John", "Brown", 32, "Teller", "2100$");
let mary = new Employee("Mary", "Smith", 22, "Manager", "1400$");
let karl = new Employee("Karl", "Morgan", 50, "CEO", "15000$");
let peter = new Employee("Peter", "Terry", 42, "Head of Security", "5100$");
let lisa = new Employee("Lisa", "Onyriuiba", 36, "Chief Accountant", "7400$");
let sam = new Employee("Sam", "Lee", 44, "Collector", "5770$");
let jim = new Employee("Jim", "Stark", 34, "Loan Officer", "4200$");
let kate = new Employee("Kate", "Mason", 27, "Financial Advisor", "3600$");

let bankEmployees = [john, mary, karl, peter, lisa, sam, jim, kate];
console.log(bankEmployees);
let personel = new EmpTable(bankEmployees);
console.log(personel);
console.log(personel.getHTML());
personel.printHTML();
