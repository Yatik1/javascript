const score=400
console.log(score) // --> 400 

const balance = new Number(100)
console.log(balance); // --> [Number:100] : for specifying that value will always be Number type 
console.log(balance.toString()); // --> 100
console.log(typeof balance.toString()) //--> string
console.log(balance.toFixed(1)) // --> 100.0 : shows value with deciminal precison
console.log(balance.toFixed(3)) // --> 100.000 


const otherNum=125.5564
console.log(otherNum.toPrecision(3)); // --> 126 : precise only to the specify number's length
console.log(otherNum.toPrecision(4)); // --> 125.6 

const standards = 10000000
console.log(standards.toLocaleString()); // --> 10,000,000 : mentions ',' for specifying the value :: by default it set to US standard
console.log(standards.toLocaleString('en-IN')); // --> 1,00,00,000 : set to IN standard


/* --------------------- Maths +++++++++++++++++++++++++++++++ */

console.log(Math); //object 
console.log(Math.abs(-4)); //--> 4 : only convert -ve value to +ve value
console.log(Math.round(4.6));  // --> 5
console.log(Math.ceil(4.6))  // --> 5 
console.log(Math.floor(4.6)); // --> 4

console.log(Math.min(4,5,3,4,6)); // -->3
console.log(Math.max(4,5,3,4,6)); // -->6

console.log(Math.random())   // --> return a random number between 0 and 1
console.log(Math.random() * 10);  // --> random decimal number between 0 and 9 
console.log((Math.random() * 10)+1);  // --> random decimal number between 1 and 10
console.log(Math.floor((Math.random() * 10))+1);  // --> random number between 1 and 10 and an whole number

/* Now what if we have a range between Min value and Max value for this random Number */

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min);  // --> random number between min and max range