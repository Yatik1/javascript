function myName() {
    console.log("Yatik");
}
 
myName()   // --> Yatik

function add(n1,n2) {
    console.log(n1+n2)
}

add(2,3) // --> 5

const result = add(4,3)
console.log(result);  // --> undefined :  as add() doesn't returning anything ! 

function add(n1,n2) {
    return n1+n2
    console.log("Hurry")  //--> after return in function , no code will execute inside the same function , but if its before return it'll executes 
}

const resultNew = add(41,3)
console.log(resultNew); // --> 44


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

/* ------------------------------------------------------- */

function numbers(nums) {
    return nums
}

console.log(numbers(100,200,300)); // --> 100


function numbers(...nums) {    // --> "...nums" is not a spread operator here it is rest operator
    return nums
}

console.log(numbers(100,200,300,78)); // --> [ 100, 200, 300, 78 ]

function n1(var1,var2,...nums) {

    return nums
}

console.log(n1(12,34,45,6,7,8,44,89));  // --> [ 45, 6, 7, 8, 44, 89 ]

/* --------------------------------------------------------- */

function handleObjects(obj) {
    console.log(`Welcome ${obj.username} , age is ${obj.age}`);
}

const User1 = {
    username:"Yatik",
    age: 21
}

handleObjects(User1)   // --> Welcome Yatik , age is 21

const User2 = {
    username:"Yatik",
    rollno: 21
} 

handleObjects(User2) // --> Welcome Yatik , age is undefined

//or

handleObjects({
    username:"Mayank",
    age: 16
})  // --> Welcome Mayank , age is 16

/* ------------------------------------------------------------ */

const newArr = [200,300,400,500]

function getArray(gArr) {
     return gArr[1]
}

console.log(getArray(newArr)); // --> 300 
console.log(getArray([566,324,677,33])); // --> 324 

function newArr1(...arr) {
    return arr
}

console.log(newArr1([1,2,3,4]));  // --> [ [ 1, 2, 3, 4 ] ]