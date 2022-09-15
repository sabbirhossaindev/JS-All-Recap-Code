// 5 function:
//2.6 function parameter default value (a, b=7)

function multiple(num1, num2=7) {
    const result = num1 * num2;
    return result;
}
const output = multiple(20);
console.log(output);  // 140