function paymentCheck() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const isPayementDone = false
            if(isPayementDone) {
                resolve("Payment is completed")
            } else {
                reject("Payment is not done")
            }
        }, 3000)
    })

    return promise
}

function order() {
    setTimeout(() => {
        console.log("Payment done, order is placed successfully")
    }) 
}

async function main() {
    try{
        const message = await paymentCheck()
        if(message) {
            console.log(message)
            order()
        }
    } catch(error) {
        console.error(error)
    }
}

main()