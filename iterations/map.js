// map : map() returns the value , thus we have to use new variable to use that output

const myNums = [1,2,3,4,5,6,7,8]

const newNums = myNums.map((num) => {
    return num*10
})

console.log(newNums); // --> [ 10, 20, 30, 40, 50, 60, 70, 80 ]

// we can multiple functions together as in follows : 

const newN = myNums.map((num) => num*10) // --> [ 10, 20, 30, 40, 50, 60, 70, 80 ]
                   .map((num) => num+1) // --> [ 11, 21, 31, 41, 51, 61, 71, 81 ]
                   .filter((num) => num >=50) // --> [ 51, 61, 71, 81 ]

console.log(newN);