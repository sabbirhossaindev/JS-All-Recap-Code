/*
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
2.2 spread (...)
        2.2.1 copy an array then add a new element to an array.
        2.2.2 use filter to remove an element from an array.
*/
// spread operator:
const numbers = [23, 53, 87, 243, 22];
const newNumber = [...numbers];
console.log(newNumber); //[ 23, 53, 87, 243, 22 ]


   // create a new array from an add an element
const currentNumbers = [...numbers, 66];
console.log(currentNumbers); // [ 23, 53, 87, 243, 22, 66 ]
numbers.push(99)
numbers.push(99)
numbers.push(66)
console.log(numbers);  /*[
    23, 53, 87, 243,
    22, 99, 99,  66
  ]*/