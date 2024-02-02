// while loop

let index=0
while(index<=10) {
    console.log(`Value is ${index}`);
    index++
}

/* --> 
Value is 0
Value is 1
Value is 2
Value is 3
Value is 4
Value is 5
Value is 6
Value is 7
Value is 8
Value is 9
Value is 10
*/


let i=0
while(i<=10) {
    console.log(`Value is ${i}`);
    i=i+2
} /* 

Value is 0
Value is 2
Value is 4
Value is 6
Value is 8
Value is 10

*/

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
} /* 
Value is flash
Value is batman
Value is superman
*/

/* -------------do while --------------------- */

let score = 0

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

/*

Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10

 */

/* ----------------------------------------------- */

let s=11
do{
    console.log(`Score is ${s}`);
    s++
}while(s<=10)
//--> Score is 11