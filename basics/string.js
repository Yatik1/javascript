const name = 'Yatik'
let age = 34

// console.log("My name is " + name + " and my age is " + age)  /* this is old practice */

console.log(`Name is ${name} and age is ${age}`)

const newString = new String("yatik-srivastava")

console.log(typeof newString);   // -> object
console.log(newString[1]) // --> y

console.log(newString.__proto__)  // --> {} , but if we write this code in browser console we get object of various function to perform different operations with string
 
console.log(newString.length);  // -->16 
console.log(newString.toUpperCase()) //YATIK-SRIVASTAVA , but the initial value doesn't change a bit 
console.log(newString) // --> yatik-srivastava

console.log(newString.charAt(3)); // --> i , 3 represent to the key (index , PS :- its not an index)
console.log(newString.indexOf('k')); // --> 4

const newSubStr=newString.substring(0,5)
console.log(newSubStr); // --> yatik , returns a sub-string from original string from i to n-1 : eg:- (0-3)

const anotherString1 = newString.slice(5)
console.log(anotherString1); // --> -srivastava 

const anotherString2 = newString.slice(5,8)    //from i to n-1
console.log(anotherString2);  // --> -sr 

const anotherString3 = newString.slice(-9) // on reverse starts with -1
console.log(anotherString3)  // --> rivastava

const anotherString = newString.slice(-5,-1) // from i to n-1
console.log(anotherString);  // --> stav

const newName = "     Yatik    "
console.log(newName);   // -->      Yatik    : includes spaces
console.log(newName.trim()) // --> Yatik

console.log(newString.replace("-" , " ")) // --> yatik srivastava

let url='https://yatik.com/user%20id'
console.log(url.replace("%20","-")); // --> https://yatik.com/user-id

console.log(url.includes(8)) // --> false
console.log(url.includes("yatik")) // --> true

console.log(url.split())  // --> ['https://yatik.com/user%20id'] : split() converts string to an array

console.log(newString.split("-"));  //--> ['yatik' , 'srivastava']
