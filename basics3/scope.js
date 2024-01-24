var a=10
var b=20
var c=30

console.log(a);  // -->10
console.log(b);  // -->20
console.log(c);  // -->30

/* ------------------------------------------------- */

if(true) {
    const a=10
    var b=20
    let c=30
}

// console.log(a);   // Error
// console.log(b);   // Error
// console.log(c);   // Error

/* ----------------------------------------------------- */

var b=33

if(true) {
    const a=10
    var b=20
    let c=30
}

console.log(b);  // --> 20 : cuz of block scoping of var declaration , thats the reason we don't use var for declaration

/* ----------------------------------------------------- */


let c=33

if(true) {
    const a=10
    var b=20
    let c=30

    console.log(c);  // --> 30
}

console.log(c); // --> 33

/* ----------------------------------------------------------- */

function one() {
    const username = "Yatik"

    function two() {
        const age=21
        console.log(username); // --> Yatik
    }
    console.log(age); // --> error 
    two()   
}

one()

if(true) {
    const name ="Yatik"
    if(name === "Yatik") {
        const surname = "srivastava"
        console.log(name+surname); // --> Yatiksrivastava
    }
    console.log(surname); // --> Error
}

console.log(name); // --> error

/* ---------------------- Hoisting --------------------------- */

console.log(addOne(6)); // --> 7

function addOne(num) {
    return num+1
}

console.log(addOne(3))  // --> 4 

console.log(addTwo(8)); // --> error :  Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num+2
}

console.log(addTwo(7));  // --> 9