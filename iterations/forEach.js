// for Each 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    console.log(val);
}) 
/* --> 
 js
 ruby
 java
 python
 cpp
*/

coding.forEach((val) => {
    console.log(val);
})
/* --> 
 js
 ruby
 java
 python
 cpp
*/

function printVal(item) {
    console.log(item);
}
coding.forEach(printVal) // --> we are only going to give reference of the function, not calling the function 
/* --> 
 js
 ruby
 java
 python
 cpp
*/

coding.forEach((item,index,val) => {
    console.log(item,index,val);
})

/* 

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
}) 
/*
javascript
java
python
*/

myCoding.forEach((item) => {
    const spreadObj = {...item}
    const {languageFileName,languageName} = spreadObj
    console.log(`${languageName} is saved as ${languageFileName}`);
})

/*
  javascript is saved as js
  java is saved as java
  python is saved as py
*/