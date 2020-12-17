//Extra Task 1 Show reverse array

const arrShowReverse = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

arrShowReverse([12, 123, 1234, 12345, 123456]);

//Extra Task 2 Fibonacci numbers

function fibo(n) {
  if (n == 0) return 0;
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(6));
console.log(fibo(12));

//Task 1

const shoppingList = [
  { name: "bread", quantity: 3, bought: true },
  { name: "milk", quantity: 2, bought: true },
  { name: "meat", quantity: 1.5, bought: false },
  { name: "banana", quantity: 2.5, bought: true },
];

//1.1
function showList(shoppingList) {
  console.log("Goods to buy:\n");
  for (let item of shoppingList) {
    if (!item.bought) console.log(item);
  }

  console.log("Goods already bought:\n");
  for (let item of shoppingList) {
    if (item.bought) console.log(item);
  }
}

//1.2
function addToShoppingList(newItem, list) {
  for (let item of list) {
    if (item.name === newItem.name) {
      item.quantity += newItem.quantity;
      item.bought = newItem.bought;
      return list;
    }
  }
  list.push(newItem);
  return list;
}

//1.3
function buy(itemIsBought, list) {
  for (let item of list) {
    if (item.name == itemIsBought) {
      item.bought = true;
      return list;
    }
  }

  return console.log(`${itemIsBought} not in the list`);
}

// Output
showList(shoppingList);
console.log(
  addToShoppingList({ name: "meat", quantity: 4, bought: false }, shoppingList)
);
console.log(
  addToShoppingList({ name: "eggs", quantity: 20, bought: false }, shoppingList)
);
console.log(
  addToShoppingList(
    { name: "lemons", quantity: 10, bought: false },
    shoppingList
  )
);
console.log(
  addToShoppingList({ name: "pizza", quantity: 1, bought: false }, shoppingList)
);

buy("meat", shoppingList);
buy("lemons", shoppingList);
buy("pizza", shoppingList);
buy("beer", shoppingList);

console.log(showList(shoppingList));

//Task 2
const check = [
  { name: "bread", quantity: 3, price: 1 },
  { name: "milk", quantity: 2, price: 2 },
  { name: "meat", quantity: 1.5, price: 5 },
  { name: "banana", quantity: 2.5, price: 0.8 },
];

//2.1
function print(check) {
  console.log(`-------JS-MARKET-------`);

  for (let item of check) {
    console.log(`${item.name.padEnd(18, " ")}: ${item.quantity * item.price}$`);
  }
  console.log(`Total             : ${total(check)}$`);
  console.log(`Average price     : ${average(check).toFixed(2)}$`);
  console.log(new Date(new Date().getTime()).toLocaleDateString("en-US"));
}

//2.2
function total(checkToSum) {
  return checkToSum.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);
}

//2.3
function spentMost(check) {
  let greatestValue = 0,
    greatestName;

  for (let item of check) {
    if (item.quantity * item.price > greatestValue) {
      greatestValue = item.quantity * item.price;
      greatestName = item.name;
    }
  }
  return `You have spent most on ${greatestName} - ${greatestValue}$!`;
}

//2.4
function average(check) {
  let totalQuantity = check.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.quantity;
  }, 0);
  return total(check) / totalQuantity;
}

// Output
print(check);
console.log(spentMost(check));

//Task 3

const stylesArray = [
  { color: "yellow" },
  { "text-align": "center" },
  { "text-decoration": "overline" },
  { "text-transform": "uppercase" },
  { "text-indent": "80px" },
  { "letter-spacing": "4px" },
  { "line-height": "40px" },
  { "text-shadow": "3px 1px purple" },
  { "word-spacing": "15px" },
  { "font-size": "2rem" },
];

const textDisplay = (
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  styles = stylesArray,
  tag = "p"
) => {
  styles = styles
    .map(function (el) {
      return `${Object.keys(el)[0]}: ${Object.values(el)[0]};`;
    })
    .join("");

  document.write(`<${tag} style = "${styles}">${text}</${tag}>`);
};

textDisplay("Welcome to Beetroot Academy!");

//Task 4

const academy = [
  { room: "101", seats: 10, faculty: "Technical" },
  { room: "102", seats: 12, faculty: "Technical" },
  { room: "405", seats: 20, faculty: "Technical" },
  { room: "406", seats: 18, faculty: "Design" },
  { room: "201", seats: 15, faculty: "Design" },
  { room: "202", seats: 11, faculty: "Technical" },
  { room: "204", seats: 14, faculty: "Non-Technical" },
  { room: "203", seats: 17, faculty: "Non-Technical" },
  { room: "206", seats: 19, faculty: "Design" },
  { room: "205", seats: 15, faculty: "Non-Technical" },
  { room: "301", seats: 19, faculty: "Design" },
  { room: "302", seats: 20, faculty: "Non-Technical" },
  { room: "303", seats: 20, faculty: "Technical" },
  { room: "306", seats: 12, faculty: "Technical" },
  { room: "305", seats: 10, faculty: "Technical" },
  { room: "304", seats: 12, faculty: "Technical" },
];

const groups = [
  { name: "Frontend", students: 12, faculty: "Technical" },
  { name: "Frontend PostPay", students: 15, faculty: "Technical" },
  { name: "Backend", students: 18, faculty: "Technical" },
  { name: "QA", students: 12, faculty: "Technical" },
  { name: "React", students: 20, faculty: "Technical" },
  { name: "Wordpress", students: 10, faculty: "Technical" },
  { name: "Python", students: 17, faculty: "Technical" },
  { name: "Backend Postpay", students: 14, faculty: "Technical" },
  { name: "UI/UX", students: 13, faculty: "Design" },
  { name: "Web Design", students: 17, faculty: "Design" },
  { name: "UI/UX Postpay", students: 10, faculty: "Design" },
  { name: "HR", students: 16, faculty: "Non-technical" },
  { name: "English for IT", students: 10, faculty: "Non-technical" },
  { name: "Entrepreneurship", students: 11, faculty: "Non-technical" },
  { name: "Digital Marketing", students: 17, faculty: "Non-technical" },
  { name: "Project Management in IT", students: 12, faculty: "Non-technical" },
];

let h1Style = [
  { color: "green" },
  { "font-size": "2rem" },
  { "text-align": "center" },
  { "text-indent": "80px" },
  { "letter-spacing": "4px" },
  { "text-decoration": "underline" },
];
let pStyle = [
  { color: "darkblue" },
  { "font-size": "1.25rem" },
  { "text-align": "left" },
  { "text-indent": "30px" },
];

const printRooms = (rooms) => {
  for (let room of rooms) {
    roomInfo = `Room №${room.room} is equiped with ${room.seats} work places and belongs to ${room.faculty} faculty`;
    textDisplay(roomInfo, pStyle);
  }
};

const printRoomsFull = (rooms) => {
  textDisplay("Our classrooms", h1Style, "h1");
  printRooms(rooms);
};

printRoomsFull(academy);

//4.2
const printRoomsFilterFaculty = (rooms, faculty = "Design") => {
  let roomsFiltered = rooms.filter((room) => room.faculty == faculty);
  textDisplay(`Classrooms of ${faculty} faculty`, h1Style, "h1");
  printRooms(roomsFiltered);
};

printRoomsFilterFaculty(academy, "Technical");
printRoomsFilterFaculty(academy);

//4.3
const printRoomsFilterGroup = (rooms, group = groups[1]) => {
  let roomsFiltered = rooms.filter((room) => room.seats >= group.students);
  textDisplay(
    `Classrooms with seats enough for ${group.name} group`,
    h1Style,
    "h1"
  );
  printRooms(roomsFiltered);
};

printRoomsFilterGroup(academy);

//4.4 & 4.5 - Universal sort
const sortRooms = (rooms, sortBy = "seats") => {
  let roomsSorted;
  Number(sortBy)
    ? (roomsSorted = rooms.sort((prev, next) => prev[sortBy] - next[sortBy]))
    : (roomsSorted = rooms.sort((prev, next) => {
        if (prev[sortBy] < next[sortBy]) return -1;
        if (prev[sortBy] > next[sortBy]) return 1;
      }));
  return roomsSorted;
};

printRoomsFull(sortRooms(academy, "faculty"));
printRoomsFull(sortRooms(academy));
