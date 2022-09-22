const students = {
    name: 'sabbir',
    age: 20,
    sura: ['mulk, fatiya, takasur'],
}

// keys, values
const keys = Object.keys(students);
const values = Object.values(students);
console.log(keys); // [ 'name', 'age', 'sura' ]
console.log(values); // [ 'sabbir', 20, [ 'mulk, fatiya, takasur' ] ]