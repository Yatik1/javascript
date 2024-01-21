const a=10
var b=20
let c=30

console.log(a);  // -->10
console.log(b);  // -->20
console.log(c);  // -->30

/* ----------------------------------------------------- */

if(true) {
    const a=10
    var b=20
    let c=30
}

console.log(a);   // Error
console.log(b);   // Error
console.log(c);   // Error

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