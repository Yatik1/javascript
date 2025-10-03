function pendingCheck() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const IsPending = false
            if(!IsPending) {
                reject("payment is pending")
            }
            else {
                resolve("Payment is completed")
            }
        }, 2000)
    })

    return promise
}

function order() {
    setTimeout(() => {
        console.log("Order is placed")
    }, 1500)
}

pendingCheck().then(order).catch((error) => {
    console.error(error)
})