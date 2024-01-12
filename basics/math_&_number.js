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
