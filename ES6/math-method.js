// 2.7 Math use with:  min, max, ceil, floor, abs, round, random. apply ???
// The JavaScript Math object allows you to perform mathematical tasks on numbers.

/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/

/*
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

console.log(Math.ceil(4.9)); //5
console.log(Math.ceil(4.1)); //5

console.log(Math.floor(4.9)); //4

console.log(Math.trunc(4.5)); // 4

console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200

console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

console.log(Math.random() * 100); // 30.971916750271046

// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10)); // 6

// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1); // 8