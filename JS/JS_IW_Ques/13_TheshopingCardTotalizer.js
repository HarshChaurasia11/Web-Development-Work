//  The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.


let cart = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Shoes", price: 2500, quantity: 10 },
    { name: "Cap", price: 200, quantity: 3 }
];

function calculateTotal(cart){
    let amount = 0
    for (const element of cart) {
        let a = element.price * element.quantity
        amount = amount + a
    }

    return amount
}

console.log(calculateTotal(cart))
