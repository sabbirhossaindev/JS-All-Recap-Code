// 2.8 Date declare
// These methods can be used for getting information from a date object

// 1. getTime()
const d = new Date();
console.log(d.getTime()); //1663255679649

// 2. getFullYear()
const da = new Date();
console.log(da.getFullYear()); //2022

// 3. getMonth()
const m = new Date();
console.log(m.getMonth()); //8

// 4. getMonth() to return the month as a name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const my = new Date();
let month = months[my.getMonth()];
console.log(month); //September

// getDate()(1-31)
const n = new Date();
console.log(n.getDate()); //16

//getHours()
const h = new Date();
console.log(h.getHours()); //8

/*

Method	Description
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()

*/