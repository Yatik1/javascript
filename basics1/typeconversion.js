 let v='yatik'
 console.log(typeof v) // string  

 let vNumber = Number(v)
 console.log(typeof vNumber)  // number
 console.log(vNumber);       // Nan 


let v=31
let vNumber = String(v) 
console.log(typeof vNumber)  // string
console.log(vNumber);       // string  


let name='yatik'
console.log(typeof name);

const boolValue = Boolean(name)
console.log(typeof boolValue) // boolean
console.log(boolValue);  // true

const numBool = Number(boolValue)
console.log(typeof numBool); // number
console.log(numBool); // 1

const fValue=false
console.log(Number(fValue));  // 0 => type:Number 

/*  operations  */

let a=10;
let b = a++;
console.log(b);  //10
console.log(a);  //11

let c=b++;
console.log(c); //10
console.log(b); //11 

let c=++b;
console.log(c); //11
console.log(b); //11 


console.log(2+2) //4
console.log("2" + "2") //22

console.log(+"2") //2 => num
console.log(1+ +"8") //9
console.log(1+"2"); //12
console.log(1+2+"2"); //32
console.log(1+2+"2"+3); //323

console.log("2"+1) //21
console.log(2+"1") //21
console.log(2+3+"1") //51
console.log(2+3+"1"+1) //511

console.log(true)
console.log(+true) //1
console.log(+false) //0  

const s1='Hello' , s2=' World'
const s3 = s1+s2
console.log(s3); //Hello World

