/* reduce() method in JavaScript is used to reduce the array to a single value
  and executes a provided function for each value of the array (from left to right) and the return value
  of the function is stored in an accumulator.  */

const myNums = [1,2,3]

let intialVal = 0

const myTotal = myNums.reduce(function(acc,currVal) {
    console.log(`acc: ${acc} and currval: ${currVal}`) 
    /* 
      acc: 0 and currval: 1
      acc: 1 and currval: 2
      acc: 3 and currval: 3 
    */

    return acc+currVal
} , intialVal)

/* 
  const myTotal = myNums.reduce( (acc,currVal) => acc+currVal , initialVal)
*/

console.log(myTotal); // --> 6 : 0+1+2+3


/* ---------------------------------------------------- */

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price , 0)
console.log(priceToPay); // --> 22996