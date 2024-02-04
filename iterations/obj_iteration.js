
// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//    console.log(key);
// }


for (const key in myObject) {
    // console.log(`${key} is key shortcut for ${myObject[key]}`);
 }

 /*
  js is key shortcut for javascript
  cpp is key shortcut for C++
  rb is key shortcut for ruby
  swift is key shortcut for swift by apple
 */

  const programming = ["js", "rb", "py", "java", "cpp"]

//   for (const key in programming) {
//     console.log(key);
//   }
   
for (const key in programming) {
    console.log(programming[key]);
  } 
  /*
   js
   rb 
   py
   java
   cpp
  */

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);  //--> there will be nothing to iterate since map can't be iterate like this we can use another approach such as for_of loop 
}