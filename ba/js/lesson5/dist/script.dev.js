"use strict";

//Extra Task 1 Show reverse array
var arrShowReverse = function arrShowReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

arrShowReverse([12, 123, 1234, 12345, 123456]); //Extra Task 2 Fibonacci numbers

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
console.log(fibo(12)); //Task 1

var shoppingList = [{
  name: "bread",
  quantity: 3,
  bought: true
}, {
  name: "milk",
  quantity: 2,
  bought: true
}, {
  name: "meat",
  quantity: 1.5,
  bought: false
}, {
  name: "banana",
  quantity: 2.5,
  bought: true
}]; //1.1

function showList(shoppingList) {
  console.log("Goods to buy:\n");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = shoppingList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      if (!item.bought) console.log(item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log("Goods already bought:\n");
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = shoppingList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _item = _step2.value;
      if (_item.bought) console.log(_item);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
} //1.2


function addToShoppingList(newItem, list) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var item = _step3.value;

      if (item.name === newItem.name) {
        item.quantity += newItem.quantity;
        item.bought = newItem.bought;
        return list;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  list.push(newItem);
  return list;
} //1.3


function buy(itemIsBought, list) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var item = _step4.value;

      if (item.name == itemIsBought) {
        item.bought = true;
        return list;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return console.log("".concat(itemIsBought, " not in the list"));
} // Output


showList(shoppingList);
console.log(addToShoppingList({
  name: "meat",
  quantity: 4,
  bought: false
}, shoppingList));
console.log(addToShoppingList({
  name: "eggs",
  quantity: 20,
  bought: false
}, shoppingList));
console.log(addToShoppingList({
  name: "lemons",
  quantity: 10,
  bought: false
}, shoppingList));
console.log(addToShoppingList({
  name: "pizza",
  quantity: 1,
  bought: false
}, shoppingList));
buy("meat", shoppingList);
buy("lemons", shoppingList);
buy("pizza", shoppingList);
buy("beer", shoppingList);
console.log(showList(shoppingList)); //Task 2

var check = [{
  name: "bread",
  quantity: 3,
  price: 1
}, {
  name: "milk",
  quantity: 2,
  price: 2
}, {
  name: "meat",
  quantity: 1.5,
  price: 5
}, {
  name: "banana",
  quantity: 2.5,
  price: 0.8
}]; //2.1

function print(check) {
  console.log("-------JS-MARKET-------");
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = check[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var item = _step5.value;
      console.log("".concat(item.name.padEnd(18, " "), ": ").concat(item.quantity * item.price, "$"));
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  console.log("Total             : ".concat(total(check), "$"));
  console.log("Average price     : ".concat(average(check).toFixed(2), "$"));
  console.log(new Date(new Date().getTime()).toLocaleDateString("en-US"));
} //2.2


function total(checkToSum) {
  return checkToSum.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);
} //2.3


function spentMost(check) {
  var greatestValue = 0,
      greatestName;
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = check[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var item = _step6.value;

      if (item.quantity * item.price > greatestValue) {
        greatestValue = item.quantity * item.price;
        greatestName = item.name;
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return "You have spent most on ".concat(greatestName, " - ").concat(greatestValue, "$!");
} //2.4


function average(check) {
  var totalQuantity = check.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.quantity;
  }, 0);
  return total(check) / totalQuantity;
} // Output


print(check);
console.log(spentMost(check)); //Task 3

var stylesArray = [{
  color: "yellow"
}, {
  "text-align": "center"
}, {
  "text-decoration": "overline"
}, {
  "text-transform": "uppercase"
}, {
  "text-indent": "80px"
}, {
  "letter-spacing": "4px"
}, {
  "line-height": "40px"
}, {
  "text-shadow": "3px 1px purple"
}, {
  "word-spacing": "15px"
}, {
  "font-size": "2rem"
}];

var textDisplay = function textDisplay() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : stylesArray;
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "p";
  styles = styles.map(function (el) {
    return "".concat(Object.keys(el)[0], ": ").concat(Object.values(el)[0], ";");
  }).join("");
  document.write("<".concat(tag, " style = \"").concat(styles, "\">").concat(text, "</").concat(tag, ">"));
};

textDisplay("Welcome to Beetroot Academy!"); //Task 4

var academy = [{
  room: "101",
  seats: 10,
  faculty: "Technical"
}, {
  room: "102",
  seats: 12,
  faculty: "Technical"
}, {
  room: "405",
  seats: 20,
  faculty: "Technical"
}, {
  room: "406",
  seats: 18,
  faculty: "Design"
}, {
  room: "201",
  seats: 15,
  faculty: "Design"
}, {
  room: "202",
  seats: 11,
  faculty: "Technical"
}, {
  room: "204",
  seats: 14,
  faculty: "Non-Technical"
}, {
  room: "203",
  seats: 17,
  faculty: "Non-Technical"
}, {
  room: "206",
  seats: 19,
  faculty: "Design"
}, {
  room: "205",
  seats: 15,
  faculty: "Non-Technical"
}, {
  room: "301",
  seats: 19,
  faculty: "Design"
}, {
  room: "302",
  seats: 20,
  faculty: "Non-Technical"
}, {
  room: "303",
  seats: 20,
  faculty: "Technical"
}, {
  room: "306",
  seats: 12,
  faculty: "Technical"
}, {
  room: "305",
  seats: 10,
  faculty: "Technical"
}, {
  room: "304",
  seats: 12,
  faculty: "Technical"
}];
var groups = [{
  name: "Frontend",
  students: 12,
  faculty: "Technical"
}, {
  name: "Frontend PostPay",
  students: 15,
  faculty: "Technical"
}, {
  name: "Backend",
  students: 18,
  faculty: "Technical"
}, {
  name: "QA",
  students: 12,
  faculty: "Technical"
}, {
  name: "React",
  students: 20,
  faculty: "Technical"
}, {
  name: "Wordpress",
  students: 10,
  faculty: "Technical"
}, {
  name: "Python",
  students: 17,
  faculty: "Technical"
}, {
  name: "Backend Postpay",
  students: 14,
  faculty: "Technical"
}, {
  name: "UI/UX",
  students: 13,
  faculty: "Design"
}, {
  name: "Web Design",
  students: 17,
  faculty: "Design"
}, {
  name: "UI/UX Postpay",
  students: 10,
  faculty: "Design"
}, {
  name: "HR",
  students: 16,
  faculty: "Non-technical"
}, {
  name: "English for IT",
  students: 10,
  faculty: "Non-technical"
}, {
  name: "Entrepreneurship",
  students: 11,
  faculty: "Non-technical"
}, {
  name: "Digital Marketing",
  students: 17,
  faculty: "Non-technical"
}, {
  name: "Project Management in IT",
  students: 12,
  faculty: "Non-technical"
}];
var h1Style = [{
  color: "green"
}, {
  "font-size": "2rem"
}, {
  "text-align": "center"
}, {
  "text-indent": "80px"
}, {
  "letter-spacing": "4px"
}, {
  "text-decoration": "underline"
}];
var pStyle = [{
  color: "darkblue"
}, {
  "font-size": "1.25rem"
}, {
  "text-align": "left"
}, {
  "text-indent": "30px"
}];

var printRooms = function printRooms(rooms) {
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = rooms[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var room = _step7.value;
      roomInfo = "Room \u2116".concat(room.room, " is equiped with ").concat(room.seats, " work places and belongs to ").concat(room.faculty, " faculty");
      textDisplay(roomInfo, pStyle);
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
        _iterator7["return"]();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }
};

var printRoomsFull = function printRoomsFull(rooms) {
  textDisplay("Our classrooms", h1Style, "h1");
  printRooms(rooms);
};

printRoomsFull(academy); //4.2

var printRoomsFilterFaculty = function printRoomsFilterFaculty(rooms) {
  var faculty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Design";
  var roomsFiltered = rooms.filter(function (room) {
    return room.faculty == faculty;
  });
  textDisplay("Classrooms of ".concat(faculty, " faculty"), h1Style, "h1");
  printRooms(roomsFiltered);
};

printRoomsFilterFaculty(academy, "Technical");
printRoomsFilterFaculty(academy); //4.3

var printRoomsFilterGroup = function printRoomsFilterGroup(rooms) {
  var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : groups[1];
  var roomsFiltered = rooms.filter(function (room) {
    return room.seats >= group.students;
  });
  textDisplay("Classrooms with seats enough for ".concat(group.name, " group"), h1Style, "h1");
  printRooms(roomsFiltered);
};

printRoomsFilterGroup(academy); //4.4 & 4.5 - Universal sort

var sortRooms = function sortRooms(rooms) {
  var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "seats";
  var roomsSorted;
  Number(sortBy) ? roomsSorted = rooms.sort(function (prev, next) {
    return prev[sortBy] - next[sortBy];
  }) : roomsSorted = rooms.sort(function (prev, next) {
    if (prev[sortBy] < next[sortBy]) return -1;
    if (prev[sortBy] > next[sortBy]) return 1;
  });
  return roomsSorted;
};

printRoomsFull(sortRooms(academy, "faculty"));
printRoomsFull(sortRooms(academy));