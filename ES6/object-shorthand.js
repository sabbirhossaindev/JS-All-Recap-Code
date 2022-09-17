// 2.5 object shorthand

    // object declaration shorthand
    const name = 'sabbir';
    const age = 20;
    const objSabbir = {
        name: name,
        age: age
}
    
    // shortcut
    const obj1 = { name, age };
console.log(obj1);  // {name: 'sabbir', age: 20}
    
// object declaration
var student = {
    id: 477470,
    name: 'sabbir',
    class: '5th semester',
    marks: 3.86
}
console.log(student.class); // 5th semester

// 
var mobile = {
    brand: 'tacno',
    peice: 1500,
    storage: '128gb',
    camera: '16/48 MP'
}
console.log(mobile); // { brand: 'tacno', peice: 1500, storage: '128gb', camera: '16/48 MP' }
mobile.storage = '256gb'; 
console.log(mobile); // { brand: 'tacno', peice: 1500, storage: '256gb', camera: '16/48 MP' }