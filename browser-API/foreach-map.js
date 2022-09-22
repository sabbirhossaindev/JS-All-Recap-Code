// for most use
const numbers = [23, 43, 65, 76, 98];
numbers.forEach(num => console.log(num)); // return na hola forEach use hoba
numbers.map(num => num * 2); // return korta hola map hoba

// for of on array like object
// loop on an object using for in

// add of remove from an array.
const products = [
    { name: 'laptop', price: 32000, brand: 'dell', color: 'black' },
    { name: 'phone', price: 32000, brand: 'tecno', color: 'gray' },
    { name: 'keyBoard', price: 2000, brand: 'hp', color: 'red' },
    { name: 'maous', price: 1000, brand: 'dell', color: 'grenn' },
    { name: 'sungaless', price: 300, brand: 'cc', color: 'black' },
];

const newProduct = { name: 'lalu', price: 3000, color: 'orange' };
// copy old product array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);
/*
[
  { name: 'laptop', price: 32000, brand: 'dell', color: 'black' },
  { name: 'phone', price: 32000, brand: 'tecno', color: 'gray' },
  { name: 'keyBoard', price: 2000, brand: 'hp', color: 'red' },
  { name: 'maous', price: 1000, brand: 'dell', color: 'grenn' },
  { name: 'sungaless', price: 300, brand: 'cc', color: 'black' },
  { name: 'lalu', price: 3000, color: 'orange' }
]
*/
// create a new array without one specific item.
// removed phone mens create a new array withOut the phone.
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);
/*
[
  { name: 'laptop', price: 32000, brand: 'dell', color: 'black' },
  { name: 'keyBoard', price: 2000, brand: 'hp', color: 'red' },
  { name: 'maous', price: 1000, brand: 'dell', color: 'grenn' },
  { name: 'sungaless', price: 300, brand: 'cc', color: 'black' }
]
*/