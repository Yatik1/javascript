// objects --> by literals or constructors 

// object literals

const mySym = Symbol("key")   // --> symbol

const User = {
    name: "Yatik",
    "fullname": "Yatik Srivastava",
    [mySym]:"key1" , // --> this is syntax to define symbol key in an object
    mySym:"key string",
    age:21,
    local: "Delhi",
    email : "yatik@mail.com",
    isLoggedin : false,
    loggedInDays: ['Monday' , 'Friday']
}

console.log(User);   
 /* --> {
  name: 'Yatik',
  fullname: 'Yatik Srivastava',
  mySym: 'key string',
  age: 21,
  local: 'Delhi',
  email: 'yatik@mail.com',
  isLoggedin: false,
  loggedInDays: [ 'Monday', 'Friday' ],
  [Symbol(key)]: 'key1'
} */

console.log(User.email); // --> yatik@mail.com
console.log(User['email']); // --> yatik@mail.com

console.log(User["fullname"]); // --> Yatik Srivastava
console.log(User.fullname); // --> Yatik Srivastava
console.log(User[mySym]); // --> key1
console.log(User.mySym); // --> key string

console.log(User.email); // --> yatik@mail.com

User.email = "yatik1@mail.com"
console.log(User.email); // --> yatik1@mail.com

console.log(User);
/* 
 {
  name: 'Yatik',
  fullname: 'Yatik Srivastava',
  mySym: 'key string',
  age: 21,
  local: 'Delhi',
  email: 'yatik1@mail.com',
  isLoggedin: false,
  loggedInDays: [ 'Monday', 'Friday' ],
  [Symbol(key)]: 'key1'
}
*/

User.greeting = function() {
    console.log("Hello User")
}

console.log(User);  /* {
    name: 'Yatik',
    fullname: 'Yatik Srivastava',
    mySym: 'key string',
    age: 21,
    local: 'Delhi',
    email: 'yatik1@mail.com',
    isLoggedin: false,
    loggedInDays: [ 'Monday', 'Friday' ],
    greeting: [Function (anonymous)],
    [Symbol(key)]: 'key1'
  } 
*/

console.log(User.greeting); // --> [Function (anonymous)] : gives refrence of the function
console.log(User.greeting()); 
/*
 Hello User
undefined 
*/

User.greetingUser = function(){
    console.log(`Hello user , ${this.name}`)  // here "this" refers to the local object , which in this case the object is User
}

console.log(User.greetingUser());
/* 
Hello user , Yatik
undefined
*/


Object.freeze(User) // --> this will not let the updation in javascript
User.email = "yatik134@mail.com"
console.log(User.email); // --> yatik1@mail.com

console.log(User);  // --> here we can see that the email has not change due to the object freezing
/*
{
  name: 'Yatik',
  fullname: 'Yatik Srivastava',
  mySym: 'key string',
  age: 21,
  local: 'Delhi',
  email: 'yatik1@mail.com',
  isLoggedin: false,
  loggedInDays: [ 'Monday', 'Friday' ],
  [Symbol(key)]: 'key1'
}
*/

