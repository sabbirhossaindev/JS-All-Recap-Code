// 1.3 array (declare, length, index, push, pop, indexOf, includes)...

// It is a common practice to declare arrays with the const keyword.

// array method declare:
const a = ["Saab", "Volvo", "BMW"];
console.log(a) // [ 'Saab', 'Volvo', 'BMW' ]

// The length Property:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length) // 4


// Accessing Array Elements
const b = ["Saab", "Volvo", "BMW"];
let car = b[0];
console.log(car) // Saab

// Changing an Array Element
const c = ["Saab", "Volvo", "BMW"];
c[0] = "Opel";
console.log(c); // [ 'Opel', 'Volvo', 'BMW' ]


// Adding Array Elements push:
const fru = ["Banana", "Orange", "Apple"];
fru.push("Lemon");
console.log(fru); // [ 'Banana', 'Orange', 'Apple', 'Lemon' ]

// pop():
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const result = fruit.pop();
console.log(result) // Mango

//  Array shift()
const fr = ["Banana", "Orange", "Apple", "Mango"];
fr.shift();
console.log(fr); //[ 'Orange', 'Apple', 'Mango' ]

// Array unshift()
const fts = ["Banana", "Orange", "Apple", "Mango"];
fts.unshift("Lemon");
console.log(fts); // [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

// Array splice()
const f = ["Banana", "Orange", "Apple", "Mango"];
f.splice(2, 0, "Lemon", "Kiwi");
console.log(f); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// Using splice() to Remove Elements:
const frui = ["Banana", "Orange", "Apple", "Mango"];
frui.splice(0, 1);
console.log(frui); // [ 'Orange', 'Apple', 'Mango' ]

// Array includes()
const food = ["Banana", "Orange", "Apple", "Mango"];
food.includes("Mango");
console.log(food); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]