const user = {
    username: "yatik",
    age: 21,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

} 


user.welcomeMessage()  /* yatik , welcome to website
{
  username: 'yatik',
  age: 21,
  welcomeMessage: [Function: welcomeMessage]
}
 */

user.username = "Mayank"
user.welcomeMessage() 
/*
 Mayank , welcome to website
{
  username: 'Mayank',
  age: 21,
  welcomeMessage: [Function: welcomeMessage]
} 
*/

console.log(this);  // --> {}

function name() {
    let username = "yatik"
    console.log(this.username);  // --> undefined : we can't use 'this' in function , we have to use it in objects
}
name()

// or

const name2 = function() {
    let username = "yatik"
    console.log(this.username);  // --> undefined
}

name2()

// ------------ arrow function -------------

const name3 = () => {
    // let username = "yatik"
    console.log(this);  //--> {}
}
name3()

const addTwo = (num1, num2) => {
        return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(1,7) ); // -->8

const add = () => ({name:"yatik"})
console.log(add());  // --> { name: 'yatik' }

// const add = (a,b) => ({name:"yatik"})
// console.log(add(1,3));  // --> { name: 'yatik' }