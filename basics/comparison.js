console.log("2" == 2); // --> true : just check value  
console.log("2" === 2); // --> false : check both value and type of value , also called strict equality 

// console.log(2>1);
// console.log(2==1);
// console.log(2>=1);

// console.log("2" > 1);
// console.log("02" < 1);

// the working of equality operator and comaprison operator are different , the comparison op. >,<,>=,<= converts the null to 0
console.log(null > 0); // --> false  
console.log(null == 0); // -->false
console.log(null >= 0); // --> true

console.log(undefined > 0); // --> false  
console.log(undefined == 0); // -->false
console.log(undefined < 0); // --> false