/*--------------------------
    includes, toLowerCase(), toUpperCase(), toLocaleLowerCase()
---------------------------*/
const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase()); // blackpink
console.log(userInput.toUpperCase()); // BLACKPINK
console.log(userName.toLocaleLowerCase()); // blackpink
if (userName.toLowerCase() === userInput.toUpperCase()) {
    console.log('valid user');
}
else {
    console.log('invalid user');
} // invalid user


/*--------------------------
    split(' '), split('.'),split(''), slice(5, 10), substring(5, 10), join('. ');
---------------------------*/
const myString = 'tumi bondu kala paki ami jano ki. bosanyo kala tomi bolta paro ni. kala kala sada sada.';
const parts = myString.split(' ');
const sentences = myString.split('.');
const chars = myString.split('')
// console.log(chars);

const partial = myString.slice(5, 10); // start to end +1;
console.log(partial); // bondu

const partial2 = myString.substring(5, 10);
console.log(partial2); //bondu


const lines = [
    'tumi bondu kala paki ami jano ki',
    'bosanyo kala tomi bolta paro ni',
    'kala kala sada sada'
];
const newSong = lines.join('. ');
console.log(newSong); //tumi bondu kala paki ami jano ki. bosanyo kala tomi bolta paro ni. kala kala sada sada

/*--------------------------
            includes, toLowerCase()
---------------------------*/
const myStrings = 'tumi bondu kala paki ami jano  ki bosanyo kala tomi bolta paro ni';
const searchString = 'Paki';
// const doseExist = myString.includes('paki'); // khuja ber korta .includes
// const doseExist = myString.includes('paki');
// const doseExist = myString.includes(searchString);

const myStringLowerCase = myString.toLowerCase();
// const doseExist = myStringLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doseExist = myStringLowerCase.includes(searchStringLower);

const doseExistOneLine = myString.toLowerCase().includes(searchString.toLowerCase()); // All jinista aklaine a korer jono;

// console.log(doseExistOneLine);
// console.log(doseExist);

/*--------------------------
            indexOf, !== -1
---------------------------*/
console.log(myString.indexOf('tumi'));

if (myString.indexOf('kala') !== -1) {
    console.log('Exists inside the string');
}
else {
    console.log('cannot find it');
}

/*--------------------------
            startsWith
---------------------------*/
console.log(myString.startsWith('tumi')); // true
console.log(myString.startsWith('2mi')); // false

/*--------------------------
        endsWith
---------------------------*/
const fileName = 'sabbir.pdf';
const otherName = 'myPic.png';
const finalFile = fileName.endsWith('.pdf');
console.log(finalFile); //true