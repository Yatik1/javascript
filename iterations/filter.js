// filter

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
})

console.log(values);  // -->> undefined , we can use another approach 

/* ------------ filter --------------------------- */

const numbers = [1,2,3,4,5,6,7,8,9]

const newNums = numbers.filter((num) => {
    return num > 4
})
 
console.log(newNums); // --> [ 5, 6, 7, 8, 9 ]

// or forEach approach

const nums =[]
numbers.forEach((num) => {
    if(num>=5) {
        nums.push(num)
    }
})

console.log(nums); // --> [ 5, 6, 7, 8, 9 ]