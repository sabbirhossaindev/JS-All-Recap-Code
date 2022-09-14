// 1.5 function (return, parameter)

// function explore...

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5); // 10
doubleIt(100); // 200
doubleIt(1000); // 2000

// sob gula totel kora sob valu sumation korar joonno 
function doubleIts(num){
    var mathResult = num * 2;
    return mathResult;
}
var first = doubleIts(5);
var secoud = doubleIts(100);
var thard = doubleIts(1000);
var total = first + secoud + thard;
console.log(total); // 2210

// more example return:
function add(num1, num2, num3){
    var result = num1 + num2 + num3;
    return result;
}
var sum = add(50, 10, 100);
console.log(sum); // 160