 /* ++++++++++++++++++ Arrays ------------------- */

 const arr = [0,1,2,3,4]
 console.log(arr);  // --> [ 0, 1, 2, 3, 4 ]
 console.log(arr[3]);  // --> 3
 console.log(typeof arr)  // --> object

 const students = ['yatik' , 'mayank' , 'rohit']
 console.log(students);  // --> [ 'yatik', 'mayank', 'rohit' ]
 
 // Arrays Methods

 const myArr = [1,5,7,4,6]
 console.log(myArr); // --> [ 1, 5, 7, 4, 6 ]

 myArr.push(9)   // insert the value at the last in the array
 console.log(myArr);  // --> [ 1, 5, 7, 4, 6, 9 ]

 myArr.push(11,34)
 console.log(myArr);  // --> [1, 5,  7,  4, 6, 9, 11, 34]

 myArr.pop()   // defaulty removes or deletes the last index value from the Array 
console.log(myArr);  // --> [1, 5,  7,  4, 6, 9, 11]

 myArr.unshift(2)  // --> add the value 2 at the first index : but it is not a good practice cuz it changes the index of every element of an array which not good for time and space complexity
 console.log(myArr); // --> [2,1, 5,  7,  4, 6, 9, 11]

 myArr.shift() // --> shifts the element in an array to the right side
console.log(myArr);  // --> [1, 5,  7,  4, 6, 9, 11]

console.log(myArr.includes(5));  // --> true : since myArr contains element value :-> 5
console.log(myArr.includes(19));  // --> false : since myArr doesn't contains element value :-> 19

console.log(myArr.indexOf(7)); // 2
console.log(myArr.indexOf(19)); // -1

const newArr = myArr.join()
console.log(newArr);  // --> 1,5,7,4,6,9,11
console.log(typeof newArr);  // --> string

console.log( typeof myArr) // --> object

// slice and splice
  
const A = [1,2,3,4,5,6,7]
console.log(A);  // --> [1,2,3,4,5,6,7]

const newA = A.slice(1,4) 
console.log(newA); // --> [2,3,4]

console.log(A); // --> [1,2,3,4,5,6,7]

const anotherA = A.splice(1,4)
console.log(anotherA);  // --> [2,3,4,5]

console.log(A); // --> [1,6,7]

/* The main differce betwewen slice and splice is that on slice operation it doesn't mutate the original array , 
  However , on the otherhand; splice did mutate the original array as per above code */