// 1.1 variable (var, let, const) three type variable.

// var explore:

// var is a function & global scope. can be Redeclare can be reassign initialized with undefined.
var js = 'i am learning javaScript'
console.log(js); //i am learning javaScript

// let explore:

// let is a block scope. can't be Redeclare, can be reassign initialized.
let my = 100;
my = 10;
console.log(my); // 10


// const explore:

// const is a block scope. can't be Redeclare, can't be reassign initialized.
const isSabbir = 'student';
const str = isSabbir + ' ' + 'HPI';
const total = str;
console.log(total); // student HPI