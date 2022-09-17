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
