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
  get getCircleDiameter() {
    console.log(`The diameter of the circle is ${this.radius * 2}`);
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
mediumCircle.getCircleDiameter;
console.log(mediumCircle.circleArea());
largeCircle.getCircleDiameter;
console.log(largeCircle.circleLength());

//Task 2

class Marker {
  constructor(color, fill) {
    this.color = color;
    this.fill = parseFloat(fill);
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

let myMarker = new Marker("blue", "1%");
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

let refillMarker = new reusableMarker("green", "0.25%");

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

// EXtra task
/* Реализовать класс, описывающий новость
 (заголовок, текст, массив тегов, дата публикации).
В классе необходимо реализовать один метод print, 
который выводит всю информацию через document.write()
Если с даты публикации прошло менее дня, то выводится «сегодня»,
если с даты публикации прошло менее недели, то выводится «N дней назад»,
в остальных случаях, полная дата в формате «дд.мм.гггг». */

class News {
  constructor(header, text, tags, date) {
    this.header = header;
    this.text = text;
    this.tags = tags;
    this.date = new Date(date);
  }
print() {
  let tagString = `${this.tags.reduce(
    (tagsHTML, currentValue) => tagsHTML + ` <span>${currentValue}</span> `
  )}`;
  let dateString =
    Date.now() - this.date < 86400000
      ? "Today"
      : Date.now() - this.date < 86400000 * 2
      ? `${Math.floor((Date.now() - this.date) / 86400000)} day ago`
      : Date.now() - this.date < 86400000 * 7
      ? `${Math.floor((Date.now() - this.date) / 86400000)} days ago`
      : this.date.toLocaleDateString("en-GB");
  
  let newsString = `<h1> ${this.header}</h1>
  <p>${this.text}</p>${tagString} <p>${dateString}`;
  document.write(newsString);
}
}

let recentNews = new News(
  "Boris Johnson Considers Locking Down More of England to Curb Virus",
  "Boris Johnson’s government is examining whether to move more areas of England into lockdown to counter a faster-spreading variant of coronavirus.Ministers are considering whether to apply the highest Tier 4 restrictions -- forcing non-essential shops and leisure facilities to close -- to more regions, according to a person familiar with the matter.Ministers and scientific experts met late Tuesday after cases of the new Covid-19 strain were identified outside London and southeast England, which were placed into Tier 4 last weekend.The Sun newspaper first reported the meeting and said an announcement on the new tier designations could come as soon as Wednesday and take effect on Dec. 26, without saying where it obtained the information.",
  ["Boris Johnson", "England", "lockdown"],
  "2020, 12, 22"
);

let weekNews = new News(
  "UK experts are 'highly confident' that a new coronavirus variant is more contagious. Here's what that means",
  "The new mutation is being called VUI-202012/01 -- the first \"Variant Under Investigation\" in the UK in December 2020. While scientists hunt for more information about the variant, its impact is already being felt, with dozens of countries imposing restrictions on travelers from the UK.",
  ["coronavirus", " mutation", "VUI-202012/01"],
  "2020, 12, 18"
);

let breakingNews = new News(
  "Lufthansa sends special cargo flight to UK with fresh food on board",
  "France and the UK have now reached an agreement to reopen ports but no trucks or truck drivers had crossed into France from the main port of Dover early Wednesday morning. UK supermarkets had warned that supplies of fresh food could be hit if the issues were not resolved soon.",
  ["Lufthansa", "UK", "France"],
  "2020, 12, 23"
);



let oldNews = new News(
  "Nepal's Organ Trail: How traffickers steal kidneys",
  "Kathmandu, Nepal (CNN)On the streets of Kathmandu, the sight of people begging for kidney treatment has become common.The capital of Nepal is no different from many places in the world where aging populations, poor diets and no health insurance systems mean increased organ disease. The organ in highest demand is the kidney and black market traffickers are meeting that demand. Up to 7,000 kidneys are obtained illegally every year, according to a report by Global Financial Integrity. Organ trafficking is an illegal, yet thriving trade around the globe. That same report shows the illegal organ trade generates profits between $514 million to $1 billion a year. In Kathmandu, we spotted a couple begging on the street for their son's kidney treatment. Jeet Bahadur Magar and his wife spent their entire savings to treat their son's kidney disease. Out of money and options, they are now out on the street hoping to raise enough funds to cover the medical bills.\"I pray to God that no one has to ever go through kidney failure problems,\" Jeet Bahadur said. But many Nepalis do.",
  ["Nepal", "Katmandu", "organ trafficking"],
  "2015, 07, 15"
);
breakingNews.print();
recentNews.print();
weekNews.print();
oldNews.print();


