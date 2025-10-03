/*
Ecommerce main functionality : 
 - Product listing 
 - Add to cart
 - Order Conifirmation 
 - Payment completion 
*/

function products(callback) {
    setTimeout(() => {
        console.log("All the products are listed here.");
        let error = new Error("Failed to add product to cart ")
        callback(error)
    }, 2000)
}

function cart(callback) {
    setTimeout(() =>{
        console.log("Product add to cart")
        callback()
    }, 1000)
}

function order(callback) {
    setTimeout(() => {
        console.log("Order confirmed")
        let error = null
        let chargedAmount = 10000
        callback(error, chargedAmount)
    }, 3000)
}

function payment(callback) {
    setTimeout(() => {
        console.log("payment completed successfully");
        callback()
    }, 1500)
}

function commerce() {

    // this is callback hell and not a good practice 
    products((error) => {
        if(error) {
            console.error(error)
        }
        cart(() => {
            order((error, chargedAmount) => {
                if(error) {
                    console.error(error)
                }
                console.log("Charged Amount is", chargedAmount)
                payment(() => {
                    console.log("Order placed")
                })
            })
        })
    })
    console.log("---------------- Processing operations ---------------")
}

commerce()
