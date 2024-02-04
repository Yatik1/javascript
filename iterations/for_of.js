// for of loop 

const arr = [1,2,3,4,5]

for (const num of arr) {
   console.log(num)
} 
/*
1
2
3
4
5
*/

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
}
/*
H
e
l
l
o

W
o
r
l
d
!
*/

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
/*

Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}

*/

for (const key of map) {
    console.log(key);
} /* --> 
    [ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for(const [key,value] of map) {
    console.log(key , ":" , value);
} /* --> 
   IN : India
USA : United States of America
Fr : France
*/

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,val] of myObject) {
    console.log(key , ":" , val); // --> Error , object can't iterable like this , there is another approach 
}