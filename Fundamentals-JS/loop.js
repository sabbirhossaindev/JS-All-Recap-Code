// 1.4 loop (for loop, while loop)....for in, for of,

/*
Loops are handy, if you want to run the same code over and over again, each time with a different value
Different Kinds of Loops.
JavaScript supports different kinds of loops:

1. for - loops through a block of code a number of times
2. for/in - loops through the properties of an object
3. for/of - loops through the values of an iterable object
4. while - loops through a block of code while a specified condition is true
5. do/while - also loops through a block of code while a specified condition is true
*/

// 1 loop example:
//Loops can execute a block of code a number of times.
const myLoop = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myLoop.length; i++){
    console.log(i); // 0 1 2 3 4 5
}


// for in loop:
//The JavaScript for in statement loops through the properties of an Object:

  
const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
    const man = person[x];
    console.log(man); // John // Doe // 25
}


const numbers = [45, 4, 9, 16, 25];
for (let number in numbers) {
    const result = numbers[number];
    console.log(result); //45 //4 //9 //16 //25
}


// for of loop:
// The JavaScript for of statement loops through the values of an iterable object.(step by step).
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:


const cars = ["BMW", "Volvo", "Mini"];

for (let car of cars) {
    const result = car;
    console.log(result) // BMW // Volvo //Mini
}


// while loop:
//Loops can execute a block of code as long as a specified condition is true.
// The while loop loops through a block of code as long as a specified condition is true.

var num = 0;
while(num < 15){
    console.log(num);
    num = num + 1;
}
// ami jodi 15 porjonto output dackta chai thola 
let num = 0;
while(num <= 15){
    console.log(num);
    num = num + 1;
}

// do while loop:
// The while loop loops through a block of code as long as a specified condition is true.


let result = '';
let i = 0;
do {
  i += 1;
  result += `${i} `;
}
while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test
console.log(result); // 1 2 3 4 5