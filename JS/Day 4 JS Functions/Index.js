// Write a function greet() that prints "Hello, Harsh!" to the console. 

function greet(name) {
    console.log("Hello! " + name)
}

greet("Harsh")


// Write a function add(a, b) that returns the sum of two numbers

function add(a, b) {
    return a + " + " + b + " = " + a + b
}

console.log(add(54, 65))


// Write a function square(n) that returns the square of a number.

function square(a) {
    console.log("Square of " + a + " is : " + a * a)
}

square(5)


// Write a function isEven(n) that checks whether a number is even. It should return true or false.

function isEven(n) {
    let m;
    if (n % 2 === 0) {
        m = true
    }
    else {
        m = false
    }

    return m
}

console.log(isEven(58))


// Write a function max(a, b) that returns the larger of two numbers.

function max(a, b) {
    if (a > b) {
        console.log("a is greater")
    }
    else {
        console.log("b is greater")
    }
}

max(4851, 5463)


// Q6. Calculator Function

// Write a function calculate(a, b, operation) that performs the operation given by the user.

// The function should support:

// "+" → addition
// "-" → subtraction
// "*" → multiplication
// "/" → division


function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b
            break;

        case "-":
            return a - b
            break;

        case "*":
            return a * b
            break;

        case "/":
            if (b === 0) {
                return "Can't Divide"
            } else {
                return a / b
            }
        default:
            break;
    }
}

console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "-"))
console.log(calculate(10, 5, "*"))
console.log(calculate(10, 5, "/"))


// Write a function countVowels(str) that returns the number of vowels in a string.

function countVowels(str) {
    let arr = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let i = 0; i <= str.length; i++) {
        if (arr.includes(str[i])) {
            count = count + 1
        }
    }
    return count
}

console.log(countVowels("hello"))


// Write a function reverseString(str) that returns the reverse of a given string.


function reverseString(str) {
    let r = ""
    for (let i = str.length - 1; i >= 0; i--) {
        r = r + str[i]
    }
    return r
}

console.log(reverseString("harsh"))


// that returns true if the string reads the same forwards and backwards, otherwise false.

function isPalindrome(str){
    let rev = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i]
    }
    if (rev == str) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("harsh"))
console.log(isPalindrome("madam"))


// Write a function factorial(n) that returns the factorial of a number.

function factorial(num){
    let fact = 1
    for (let i = num; i > 0; i--) {
        fact = fact * i
    }
    return fact
}

console.log(factorial(10))


// Prime Number Checker 


function prime(num){
    for (let i = 2; i < num; i++) {
        if(num%i===0){
            return false
        }        
    }
    return true
}

console.log(prime(8))