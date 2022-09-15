// Template Literals use back-ticks (``) rather than the quotes ("") to define a string

// 1. template string:

const numbers = [23, 53, 87, 243, 22];
const student = {
    name: 'sabbir',
    age: 20,
    sura: ['mulk, fatiya, takasur'],
}
const about = `my name is ${student.name} age of ${student.age} has number${numbers[2]} also like sura${student.sura[0]}`;
console.log(about); //my name is sabbir age of 20 has number87 also like suramulk, fatiya, takasur