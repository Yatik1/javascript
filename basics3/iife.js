// Immediately Invoked Function Expressions (IIFE)

/* why we use IIFE ? To Avoid Polluting the Global namespace :--> our application could include many finction and 
 global variables from different source files , its important to limit the number of global 
 variables. If we have some initiation code that we don't need to use again , we could use IIFE pattern.
 As we will not reuse the code again , using IIFE in this case is better than using a function declaration or function expression */

(
 function water(){
    console.log('Drink water'); // --> Drink water
 })(); //--> It is required to use semicolon as we need to stop execution of IIFE function , since IIFE doen't know when to stop

 // with arrow function 

 (() => {
    console.log("Arrow function IIFE")
 })();


 // passing args in IIFE

((name) => {
    console.log(`Name is ${name}`);
})("Yatik");