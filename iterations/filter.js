// filter

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
})

console.log(values);  // -->> undefined , we can use another approach 

/* ------------ filter --------------------------- */

// filter returns the value , thus we have to use new variable to use that output

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

/* ------------------------------------------------- */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBooks = books.filter((book) => book.genre === 'History')
  console.log(userBooks); 
  /*
  
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]

  */

 userBooks=books.filter((book) => book.publish >=1995 && book.genre === 'History')
 console.log(userBooks);
 /*
 
 [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
 
 */