// 1. JSON => stringify, parse
const students = {
    name: 'sabbir',
    age: 20,
    sura: ['mulk, fatiya, takasur'],
}
// JSON.stringify diya JSON a convert korta pari.
const studentJSON = JSON.stringify(students); // dubule cotation diya hoy
console.log(studentJSON); // {"name":"sabbir","age":20,"sura":["mulk, fatiya, takasur"]}
console.log(students); // { name: 'sabbir', age: 20, sura: [ 'mulk, fatiya, takasur' ] }

// JSON.parse dita JSON ka  normal obj banano jay;
const studentObj = JSON.parse(studentJSON);
console.log(studentObj); // { name: 'sabbir', age: 20, sura: [ 'mulk, fatiya, takasur' ] }