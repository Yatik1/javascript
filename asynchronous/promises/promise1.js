
// Promise : The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    } , 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
})  
/*
Async task is complete
Promise consumed
*/

/* ------------------------------------------------------ */

new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Task2 promise is resolved");
})
/*
Async task 2
Task2 promise is resolved
*/

/*-------------------------------------------------------- */

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username:"Yatik" , emaik:"yatik1@example.com"})
    },1000)
})

promiseThree.then((user) => {
    const {username} = user
    console.log(user);
    console.log(username);
})
/*
{ username: 'Yatik', emaik: 'yatik1@example.com' }
Yatik
*/

/*-------------------------------------------------------- */

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"Yatik" , emaik:"yatik1@example.com"})
        } else{
            reject("ERROR : Something went wrong !")
        }
    } , 1000)
})

promiseFour.then((user) => {
    console.log(user);
    // return user.username
}).then((username) => {
    console.log(username);
}).catch(function(err) {
    console.log("There is an error : ",err);
}).finally(() => console.log("The promise is either resolved or rejected"))
/*
Yatik
There is an error :  ERROR : Something went wrong !
The promise is either resolved or rejected
*/

/*-------------------------------------------------------- */

const promiseFive  = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiveFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiveFive() // ERROR: JS went wrong



