function products() {
    const productPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("All the products")

            resolve()
        }, 2000)
    })

    return productPromise
}

function processOrder() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order processed")

            reject()
        } , 3000)
    })

    return promise
}

function main() {
    products().then(() => {
        return processOrder().catch(() => {
            console.log("Error Handled")
        })
    })
}

main()