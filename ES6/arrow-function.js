/*
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
2.3 arrow function(const myArrow = () => console.log();)
        2.3.1 no parameter()
        2.3.2 single parameter.
        2.3.3 multiple parameter.
        2.3.4 multiline
*/
// 2. arrow function:
const getFiftyFive = () => 55;
const getSixtyFive = nun => nun + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
console.log(doMath(20, 12)); //32