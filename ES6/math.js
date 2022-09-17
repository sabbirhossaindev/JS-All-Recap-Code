/*--------------------------
    Math.pow(), Math.abs(), Math.round(), Math.ceil(), Math.floor(), Math.random(),
---------------------------*/

const result = Math.pow(3, 8);
console.log(result); // 6561

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap); // 20

if (gap < 5) {
    console.log('you are my friend');
}
else {
    console.log('you are not a friend');
} // you are not a friend

// round();
var number = 5.49999;
var results = Math.round(number); // output = 5
console.log(results);

// round();
var number = 5.5;
var results = Math.round(number); // output = 6
console.log(results);

// ceil();
var number = 5.000001;
var results = Math.ceil(number); // output = 6
console.log(results);

// floor();
var number = 5.49999;
var results = Math.floor(number); // output = 6
console.log(results);

// random();
var numbers = Math.random() * 100;
var results = numbers;
console.log(results); //32.65234414260287