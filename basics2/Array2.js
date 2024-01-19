const marvelHeros = ['Spiderman' , 'Hulk' , "Thor" ]
const dcHeros = ['Superman' , 'Batman' , "flash" ]

marvelHeros.push(dcHeros)
console.log(marvelHeros);  // --> [ 'Spiderman', 'Hulk', 'Thor', [ 'Superman', 'Batman', 'flash' ] ] : whole dc array becomes an single element in the marvel array 
console.log(marvelHeros[3]); // --> [ 'Superman', 'Batman', 'flash' ]
console.log(marvelHeros[3][2]); // --> flash


const marvel = ['Spiderman' , 'Hulk' , "Thor" ]
const dc = ['Superman' , 'Batman' , "flash" ]

const allHeros = marvel.concat(dc)
console.log(allHeros); // --> [ 'Spiderman', 'Hulk', 'Thor', 'Superman', 'Batman', 'flash' ] 

/* Here we can see that concat combining each element of dc into marvel and returns a new array , meaning it doesn't apply changes in existing or original array */

/* ++++++++ Spread Operator --------- */
// what spread operator do is it shatters or spread array elements ::
console.log(...marvel); // --> Spiderman Hulk Thor

const all_Heros = [...marvel , ...dc]
console.log(all_Heros);  // --> [ 'Spiderman', 'Hulk', 'Thor', 'Superman', 'Batman', 'flash' ] 

const nestedArray = [1,2,3,[4,5],6,7,[6,7,[4,5]]]

const singleArray = nestedArray.flat() // --> converts the nested array into a singular array : default it is set to the 1 depth of nested array means every nested array of depth 1 will converted into a single array
console.log(singleArray); // --> [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

const singleArray2 = nestedArray.flat(2) 
console.log(singleArray2); // --> [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

const singleArray3 = nestedArray.flat(Infinity) // --> let just assume we don't know the depth of nested array , thus to convert into singular array we can use infinity prop which access the maxinun depth and converts the nested array 
console.log(singleArray3); // --> [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray(marvel)); // --> true
console.log(Array.from(marvel)); // --> [ 'Spiderman', 'Hulk', 'Thor' ]

console.log(Array.from("Yatik")); // --> [ 'Y', 'a', 't', 'i', 'k' ]

let str = "YatikSrivastava"
console.log(Array.from(str));  
/* [
    'Y', 'a', 't', 'i',
    'k', 'S', 'r', 'i',
    'v', 'a', 's', 't',
    'a', 'v', 'a'
  ] */

console.log(Array.from({name:"yatik"})); // --> [] :  we have to specify to convert key or value from the object into array

let score1=100
let score2=200
let score3=300

console.log(Array.from([score1,score2,score3])); // --> [100,200,300]
console.log(Array.of(score1,score2,score3)); // --> [100,200,300]