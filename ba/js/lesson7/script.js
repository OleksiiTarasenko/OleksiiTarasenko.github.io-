"use strict";

//Task 1
let car = {
  make: "Ford",
  model: "Focus",
  year: 2005,
  "average speed": "60kph",
  info: function () {
    console.log(
      `Car is ${this.make} ${this.model}. It is made in ${this.year} and has average speed about ${this["average speed"]}`
    );
  },
  estimateTime: function (distance) {
    let pureTime = distance / Number.parseInt(this["average speed"]);
    let restTime =
      pureTime % 4 ? Math.floor(pureTime / 4) : Math.floor(pureTime / 4) - 1;
    console.log(
      `Estimated time of travel by ${this.make} ${this.model} is ${
        pureTime + restTime
      } hours`
    );
  },
};

car.info();
car.estimateTime(540);

//Task 2
let fraction = {
  numerator: 36,
  denominator: 6,
  print: function () {
    return `${this.numerator} / ${this.denominator}`;
  },
  gcd: function (anotherFraction = this) {
    let a = this.denominator;
    let b = anotherFraction.denominator;
    while (a != 0 && b != 0) {
      a > b ? (a = a % b) : (b = b % a);
    }
    return a + b;
  },
  lcm: function (anotherFraction = this) {
    return (
      (this.denominator * anotherFraction.denominator) /
      fraction.gcd(anotherFraction)
    );
  },
  reverse: function () {
    let fractionReverse = { ...this };
    fractionReverse.numerator = this.denominator;
    fractionReverse.denominator = this.numerator;
    return fractionReverse;
  },

  // pure methods
  add: function (anotherFraction) {
    return `${
      (this.numerator * this.lcm(anotherFraction)) / this.denominator +
      (anotherFraction.numerator * this.lcm(anotherFraction)) /
        anotherFraction.denominator
    } / ${this.lcm(anotherFraction)}`;
  },
  sub: function (anotherFraction) {
    return `${
      (this.numerator * this.lcm(anotherFraction)) / this.denominator -
      (anotherFraction.numerator * this.lcm(anotherFraction)) /
        anotherFraction.denominator
    } / ${this.lcm(anotherFraction)}`;
  },

  mul: function (anotherFraction) {
    return `${this.numerator * anotherFraction.numerator} / ${
      this.denominator * anotherFraction.denominator
    }`;
  },

  div: function (anotherFraction) {
    return `${this.numerator * anotherFraction.denominator} / ${
      this.denominator * anotherFraction.numerator
    }`;
  },

  simplify: function () {
    return this.numerator < this.denominator
      ? `${this.numerator / this.gcd(this.reverse())} / ${
          this.denominator / this.gcd(this.reverse())
        }`
      : !(this.numerator % this.denominator)
      ? `${this.numerator / this.denominator}`
      : `${Math.floor(this.numerator / this.denominator)} ${
          (this.numerator % this.denominator) / this.gcd(this.reverse())
        } / ${this.denominator / this.gcd(this.reverse())}`;
  },
  // changing initial object methods
  setAdd: function (anotherFraction) {
    this.numerator =
      (this.numerator * this.lcm(anotherFraction)) / this.denominator +
      (anotherFraction.numerator * this.lcm(anotherFraction)) /
        anotherFraction.denominator;
    this.denominator = this.lcm(anotherFraction);
    return this.print();
  },
  setSub: function (anotherFraction) {
    this.numerator =
      (this.numerator * this.lcm(anotherFraction)) / this.denominator -
      (anotherFraction.numerator * this.lcm(anotherFraction)) /
        anotherFraction.denominator;
    this.denominator = this.lcm(anotherFraction);
    return this.print();
  },
  setMul: function (anotherFraction) {
    this.numerator = this.numerator * anotherFraction.numerator;
    this.denominator = this.denominator * anotherFraction.denominator;
    return this.print();
  },
  setDiv: function (anotherFraction) {
    this.numerator = this.numerator * anotherFraction.denominator;
    this.denominator = this.denominator * anotherFraction.numerator;
    return this.print();
  },
};

let fraction2 = {
  numerator: 3,
  denominator: 14,
};

let fraction3 = {
  numerator: 7,
  denominator: 24,
};

let fraction4 = {
  numerator: 3,
  denominator: 2,
};

console.log(fraction.add(fraction2));
console.log(fraction.sub(fraction2));
console.log(fraction.mul(fraction2));
console.log(fraction.div(fraction2));
console.log(fraction.simplify());
console.log(fraction.setAdd(fraction2));
console.log(fraction.simplify());
console.log(fraction.setSub(fraction3));
console.log(fraction.simplify());
console.log(fraction.setMul(fraction4));
console.log(fraction.simplify());
console.log(fraction.setDiv(fraction));
console.log(fraction.simplify());

// Task 3

let date = new Date(Date.now());
console.log(date);

let ourTime = {
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  show: function () {
    return `Time is  ${String(this.hours).padStart(2, 0)} hr ${String(
      this.minutes
    ).padStart(2, 0)} min ${String(this.seconds).padStart(2, 0)} sec`;
  },
  setHours: function (deltaHr) {
    this.hours =
      this.hours + (deltaHr % 24) < 0
        ? (24 + this.hours + (deltaHr % 24)) % 24
        : (this.hours + (deltaHr % 24)) % 24;
  },

  setMinutes: function (deltaMin) {
    this.hours =
      this.minutes + deltaMin > 59 || this.minutes + deltaMin < 0
        ? this.hours + Math.floor((this.minutes + deltaMin) / 60)
        : this.hours;
    if (this.minutes + (deltaMin % 60) < 0) {
      this.minutes = (this.minutes + 60 + (deltaMin % 60)) % 60;
      return this;
    }

    this.minutes = (this.minutes + (deltaMin % 60)) % 60;

    return this;
  },

  setSeconds: function (deltaSec) {
    this.setMinutes(Math.trunc((this.seconds + deltaSec) / 60));
    if (this.seconds + (deltaSec % 60) < 0) {
      this.seconds = (this.seconds + 60 + (deltaSec % 60)) % 60;
      return this;
    }
    this.seconds = (this.seconds + (deltaSec % 60)) % 60;
    return this;
  },
};

console.log(ourTime.show());
ourTime.setHours(2);
console.log(ourTime.show());
ourTime.setMinutes(-11);
console.log(ourTime.show());
ourTime.setSeconds(-60025);
console.log(ourTime.show());

// Extra
// Initial object
let rect = {
  upperLeft: { x: 0, y: 0 },
  bottomRight: { x: 100, y: 100 },
  info: function () {
    return `Rectangle's top left coordinates x: ${this.upperLeft.x}, y: ${this.upperLeft.y}; bottom right coordinates x: ${this.bottomRight.x}, y: ${this.bottomRight.y}`;
  },
  getWidth: function () {
    return `${Math.abs(this.bottomRight.x - this.upperLeft.x)}`;
  },
  getHeight: function () {
    return `${Math.abs(this.bottomRight.y - this.upperLeft.y)}`;
  },
  getArea: function () {
    return `Area is ${this.getHeight() * this.getWidth()}`;
  },
  changeWidth: function (deltaX) {
    this.bottomRight.x += deltaX;
  },
};

// function
let area = (rectangle) => {
  return `Area of rectangle is ${
    Math.abs(rectangle.bottomRight.x - rectangle.upperLeft.x) *
    Math.abs(rectangle.bottomRight.y - rectangle.upperLeft.y)
  }`;
};

console.log(area(rect));
