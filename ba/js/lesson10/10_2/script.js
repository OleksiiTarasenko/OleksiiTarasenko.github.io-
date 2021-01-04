"use strict";

//Task 2
let sortDirect = false;

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
    const headers = [...document.querySelectorAll("th")];

    const sortCol = (event) => {
      console.log(this.sortDirect);
      let index = headers.indexOf(event.target);
      const rows = [...document.querySelectorAll("tr")];
      rows.shift(0);

      let arr = []; // Transform html to array to sort
      for (let row of rows) {
        const cells = [...row.querySelectorAll("td")];
        let arrEl = [];
        for (let cell of cells) {
          arrEl.push(cell.innerText);
        }
        arr.push(arrEl);
      }

      arr = parseInt(arr[0][index])
        ? arr.sort(function (a, b) {
            return parseInt(a[index]) - parseInt(b[index]);
          })
        : arr.sort(function (a, b) {
            var nameA = a[index].toLowerCase(),
              nameB = b[index].toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
      if (sortDirect) arr = arr.reverse();
      console.log(arr);
      sortDirect = !sortDirect;
      document.body.querySelector("table").remove();
      let employees = [];
      for (let person of arr) {
        employees.push(new Employee(...person));
      }

      let personelSorted = new EmpTable(employees);
      document.title = "Oleksii Tarasenko JS - 10-2 Sort Table";
      personelSorted.printHTML();
    };

    headers.map((item) => item.addEventListener("click", sortCol));
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
