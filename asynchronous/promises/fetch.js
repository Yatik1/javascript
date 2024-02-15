
// api fetch async - await 

async function getUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error : "  ,error);
    }
}

// getUsers() // we get the object response

/*--------------------------------------------------- */

fetch("https://api.github.com/users/yatik1")
 .then((res) => {
    return res.json()

 })
 .then((data) => {
    console.log(data);
 })
 .catch((error) => console.log(error))

// we'll get the data 