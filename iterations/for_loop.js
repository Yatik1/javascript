// for

for (let i = 0; i < 10; i++) {
    const element = i
    console.log(element);
}  /* --> 
      0
      1
      2
      3
      4
      5
      6
      7
      8
      9
   */



for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //   console.log(`Inner loop value ${j} and outer loop ${i}`);
    //   console.log(i + '*' + j + ' = ' + i*j );  --> will print table of 1 to 10 
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length); //--> 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); 
      /* flash
         batman
         superman 
      */
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    /* --> Value of i is 1
           Value of i is 2
           Value of i is 3
           Value of i is 4
           Detected 5 
    */
}

for (let index = 1; index <= 7; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    /* --> Value of i is 1
           Value of i is 2
           Value of i is 3
           Value of i is 4
           Detected 5
           Value of i is 6
           Value of i is 7 */
}
