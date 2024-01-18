// Dates

let myDate = new Date()
console.log(myDate);  // --> 2024-01-18T17:12:02.249Z  : Today's date
console.log(typeof myDate);  // --> object
console.log(myDate.toString()); // --> Thu Jan 18 2024 22:42:57 GMT+0530 (India Standard Time) 
console.log(myDate.toDateString());  // --> Thu Jan 18 2024
console.log(myDate.toLocaleDateString());  // --> 1/18/2024

let CreateDate = new Date(2023,0,23)
console.log(CreateDate); //--> 2023-01-22T18:30:00.000Z
console.log(CreateDate.toLocaleDateString()); //--> 1/23/2023


let createDate = new Date("2023-01-14")
console.log(createDate); //--> 2023-01-14T00:00:00.000Z
console.log(createDate.toLocaleDateString()); //--> 1/14/2023
console.log(createDate.getTime());  // --> 1673654400000 ms

let myTimeStamp = Date.now()
console.log(myTimeStamp);   // --> 1705598380434 : this is in milliseconds
console.log(typeof myTimeStamp);  // --> number

console.log(Math.floor(Date.now()/1000));  // --> 1705598546 seconds

let newDate = new Date()
console.log(newDate.getMonth())  // --> 0 : represents Jan
console.log(newDate.getMonth() + 1)  // --> 1 : represents Jan
console.log(newDate.getDay())  // --> 4 : represents Thrusday


