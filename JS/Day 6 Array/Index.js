// Question 1 — Create and Access an Array

let fruit = ["Apple", "Banana", "Grapes", "Mango", "Lichi"]

console.log(fruit[0], fruit[2])


// Question 2 — Array Length

let number = [20, 48, 51, 84, 25, 65, 42, 35]

console.log(number.length)


// Question 3 — Update an Array Element

let fruits = ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits.indexOf("Mango"))
fruits[2] = ("Grapes")
console.log(fruits.push("Pomegranate"), fruits) //push array ka last ma value ko add karta hai
console.log(fruits.pop(), fruits) // pop fetch last value of an array
console.log(fruits.shift(), fruits) // Shift method is used fetch first value of an array
console.log(fruits.unshift("Apple"), fruits) // unshift method is used to add value to the begnning of an array
console.log(fruits.includes("Mango"))
console.log(fruits.indexOf("Orange"))


// slice()  → original array ko change NAHI karta ✅
// splice() → original array ko CHANGE karta hai ❗

console.log(fruits.splice(2, 1), fruits) // splice method ma pahali value batati hai ki kis index sa start karna hai or second value batati hai ki kitni value remove karni hai
console.log(fruits.slice(1, 3), fruits) // slice() ka main kaam hai array ke ek part ko nikal kar ek new array banana.



// Question — Sum of Array

number = [20, 48, 51, 84, 25, 65, 42, 35]
let add = 0

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    add = add + element

}
console.log(add)


// Question — Find Maximum Number

number = [20, 48, 51, 84, 25, 65, 42, 35]
let max = number[0]

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (max < element) {
        max = element
    }
}
console.log(max)

// Question — Find Minimum Number

number = [20, 48, 51, 84, 25, 65, 42, 35]
let min = number[0]

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (min > element) {
        min = element
    }
}
console.log(min)


// Question — Count Even & Odd Numbers
number = [20, 48, 51, 84, 25, 65, 42, 35, 75, 32, 63, 95, 62]
let even = 0
let odd = 0

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element%2===0) {
        even = even + 1
    }   
    else{
        odd = odd + 1
    }
}
console.log(even)
console.log(odd)


// Question — Reverse an Array

number = [20, 48, 51, 84, 25, 65, 42, 35, 75, 32, 63, 95, 62]

console.log(number.reverse())


// Question — Find an Element
let name = ["Rahul", "Prem", "Harish", "Rahim", "Robert"]
let found = false

for (let i = 0; i < name.length; i++) {
    const element = name[i];
    if(element === "Harish"){
        found = true;
        break;
    }   
}
console.log(found)


// Question — Count an Element 10

let numbers = [10, 20, 10, 30, 10, 40, 20, 10, 10, 50, 90, 10, 80, 60, 10, 20, 40, 30, 10];
let find10 = 0

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element === 10){
        find10 = find10 + 1 
    }   
}

console.log(find10)


