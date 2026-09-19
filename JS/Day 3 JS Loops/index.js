// Ques 1 Print counting 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Ques 2 Reverse Counting

for (let i = 10; i > 0; i--) {
    console.log(i)
}


// Ques 3 Print Even no 1 to 20 usinf for loop

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// Ques 4 Print Odd no 1 to 20 usinf for loop


for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}


// Ques 5 Find sum of number 1 to 10


let n = 0
for (let i = 1; i <= 10; i++) {
    n = n + i
}
console.log(n)


// Ques 6 Find the square of no 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i * i)
}

// Ques 7 Print the table to taking input from the user


let a = Number(prompt("Enter a Number"))
for (let i = 1; i <= 10; i++) {
    console.log(a + " X " + i + " = " + a * i)
}

// Ques 8 Use a for loop to print numbers from 1 to 20. For each number, check whether it is even or odd using an if...else statement.


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even!")
    } else {
        console.log(i + " is Odd!")
    }
}