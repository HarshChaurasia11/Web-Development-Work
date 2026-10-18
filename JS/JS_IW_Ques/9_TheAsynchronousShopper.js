// The Asynchronous Shopper: Imagin you are building an online shopping application. Write an asynchronous function called placeaorder that simulates placing an order and return a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeHolder () {
    const delay = Math.random() * 5000
    await new Promise ((resolve) => {
        setTimeout(resolve, delay)
    });
    return "Order placed successfully! Order is Confirmed."
    
}

placeHolder().then((message) => {
    console.log(message)
})