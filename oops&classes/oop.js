
const user = {
    username:"yatik",
    age:21,
    isAdmin:true,

    getUserDetails: function(){
        console.log(`${this.age}`); // --> 21
        console.log(this);  // -> this object 
    }
}

console.log(user) // --> ⬆ object : user
console.log(this); // -> {}
console.log(user.getUserDetails()); // will call function from the object

/* -------------------------------------------- */

function User(username , age,isAdmin) {
    this.username = username,
    this.age = age,
    this.isAdmin = isAdmin

    this.greeting = function(){
        console.log(`Welcom! , ${this.username}`);
    }

    return this // this is implicit (built in) , thus we don't have to return , well its already returning the value even if we don't mention it
}

// const User1 = User("Yatik",21,true)

// console.log(User1);
/*
 username: 'Yatik',
  age: 21,
  isAdmin: true,
  greeting: [Function (anonymous)]
*/

// const User2 = User("mayank",13,false)
// console.log(User1);

/*
   username: 'mayank',
  age: 13,
  isAdmin: false,
  greeting: [Function (anonymous)]
*/

// To avoid the overwriting in object properties we use instance using "new" keyword

const User1 = new User("Yatik",21,true)
const User2 = new User("mayank",13,false)

console.log(User1); /*
User {
  username: 'Yatik',
  age: 21,
  isAdmin: true,
  greeting: [Function (anonymous)]
}
*/
console.log(User2); /*
User {
  username: 'mayank',
  age: 13,
  isAdmin: false,
  greeting: [Function (anonymous)]
}
*/

console.log(User1.constructor); // --> [Function: User]
console.log(User1.constructor()); /*
User {
  username: undefined,
  age: undefined,
  isAdmin: undefined,
  greeting: [Function (anonymous)]
}
*/
