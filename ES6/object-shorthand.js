// 2.5 object shorthand
// Object property shorthand enables us to simply pass in the name of the key as opposed to repeating the name and the key

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


// Object property shorthand
const names = 'Raj'
const ages = 20
const location = 'India'

// User with ES6 shorthand
// property
const user = {
	names,	
	ages,
	location
}

console.log(user); // { names: 'Raj', ages: 20, location: 'India' }
    
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

// array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi:32,
    kazi: 14
}


var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys); // [ 3, 1, 5, 1, 25, 2 ]

const values = Object.values(shoppingCart);
console.log(values); /*books 3
sunglass 1
keyboard 5
mouse 1
pen 25
shoes 2 */


