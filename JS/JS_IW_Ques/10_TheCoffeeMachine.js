// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and return a promise. The Promise should resolve with a message indicating that the coffee is ready after a random delay.


async function brewCoffee(str) {

    const order = str
    if (order === "latte") {
        const delay = Math.random() * 10000
        await new Promise ((resolve) => {
        setTimeout(resolve, delay)
    });
        return "Your Latte Sir! Keep Enjoy Sir."
    }

    else if (order === "cappuccino") {
        const delay = Math.random() * 5000
        await new Promise ((resolve) => {
        setTimeout(resolve, delay)
    });
        return "Your Cappuccino Sir! Keep Enjoy Sir."
    }

    else if (order === "espresso") {
        const delay = Math.random() * 8000
        await new Promise ((resolve) => {
        setTimeout(resolve, delay)
    });
        return "Your Espresso Sir! Keep Enjoy Sir."
    }

    else{
        return "Sorry Sir! It's not available now."
    }
}

let a = brewCoffee("CaPPuccino".toLowerCase())
.then((message)=>{
    console.log(message)
})
