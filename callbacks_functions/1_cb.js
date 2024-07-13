// callBack functions

function sum(a,b,func1,func2) {
    let c=a+b
    func1(c)
    func2(c)
}

function displayResult(data) {
    console.log(`Result of sum is ${data}`);
}

function displayResultPassive(data) {
    console.log(`Sum's result is ${data}`);
}

// only allowed to call one function after this
// we have to call both function shows the result 

let ans = sum(1,2,displayResult,displayResultPassive)
/*
Result of sum is 3
Sum's result is 3
*/ 

//this is what callback functions are used for : In other words , call functions are those functions that accepts other function as arguments to performs its functionality 

