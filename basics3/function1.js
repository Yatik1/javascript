function myName() {
    console.log("Yatik");
}
 
// myName()   // --> Yatik

// function add(n1,n2) {
//     console.log(n1+n2)
// }

// add(2,3) // --> 5

// const result = add(4,3)
// console.log(result);  // --> undefined :  as add() doesn't returning anything ! 

function add(n1,n2) {
    return n1+n2
    console.log("Hurry")  //--> after return in function , no code will execute inside the same function , but if its before return it'll executes 
}

const result = add(41,3)
console.log(result); // --> 44


function User(username) {
    return `Welcome! ${username}`
}

console.log(User("yatik")); // --> Welcome! yatik 

const greet = User("mayank")
console.log(greet); // --> Welcome! mayank


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rohan")) // --> Rohan just logged in
console.log(loginUserMessage()) 
/* 
Please enter a username
undefined
 */
