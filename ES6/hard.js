const jim = 69;
const dela = 97;
const chinku = 99;

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if (dela > jim && dela > chinku){
    console.log('Dela will eat cake in this bela');
}
else{
    console.log('Chinku will get the cake');
}

Math.max(12, 45); //Chinku will get the cake


// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
/* 
    fibo[3] = fibo[2] + fibo[1]
    fibo[4] = fibo[3] + fibo[2]
    fibo[5] = fibo[4] + fibo[3]
    fibo[50] = fibo[49] + fibo[48]
    fibo[487] = fibo[486] + fibo[485]
    fibo[n] = fibo[n-1] + fibo[n-2]
    fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo = [0 , 1];
for(let i = 2; i <= 25; i++ ){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
/*
output:-
[
      0,     1,     1,     2,     3,
      5,     8,    13,    21,    34,
     55,    89,   144,   233,   377,
    610,   987,  1597,  2584,  4181,
   6765, 10946, 17711, 28657, 46368,
  75025
]
*/
// creating a multiplication table of function 13 problem 1;
function multiplication(number) {
    for(let i = 1; i <= 10; i++) {
        // multiply i with number
        let result = i * number;
        // display the result
        console.log(`${number} * ${i} = ${result}`);
    }
}
multiplication(13);

/*
13 * 1 = 13
13 * 2 = 26
13 * 3 = 39
13 * 4 = 52
13 * 5 = 65
13 * 6 = 78
13 * 7 = 91
13 * 8 = 104
13 * 9 = 117
13 * 10 = 130
*/
// Homework: 1
// write a function that will take 3 numbers will return the max number
// Write a function that will take 3 parameters and will return the min number

// first time do it using if-else
// second time do it using Math.min or Math.max