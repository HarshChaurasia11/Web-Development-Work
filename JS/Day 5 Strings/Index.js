// Question 1 — String Creation

var name = "Harsh"
var course = "Javascript"
var message = "I am learning Javascript"

console.log(name, course, message)


// Question 2 — Find String Length

var word = "JavaScript"

console.log(word.length) 


// Question 3 — String Indexing

var word = "JavaScript"

console.log(word[0])
console.log(word[2])
console.log(word[9])


// Question 4 — Using charAt()

var word = "TypeScript"

console.log(word.charAt(0))
console.log(word.charAt(2))
console.log(word.charAt(9))


// Question 5 — toUpperCase() & toLowerCase()

let word_1 = "TypeScript"

console.log(word_1.toUpperCase())
console.log(word_1.toLowerCase())


// Question 7 — includes() use to find some part are present inside the variable or not

word = "I am learning Javascript"
console.log(word.toLowerCase().includes("javascript"))



word = "JavaScript and TypeScript"
console.log(word.startsWith("Java"))
console.log(word.endsWith("TypeScript"))
console.log(word.indexOf("t"))
console.log(word.lastIndexOf("r"))
console.log(word.slice(0,4))
console.log(word.substring(4, 11))
console.log(word.replace("JavaScript", "Python"))
console.log(word.trim())



let sent = "JavaScript is awesome"

console.log(sent.split(" "))


// Write a program to join the elements of the array ["JavaScript", "is", "awesome"] into a single string.

word = ["JavaScript", "is", "awesome"]

console.log(word.join(" "))


// Question 18 — Strings with Loops

word = "JavaScript"

for (let i = 0; i < word.length; i++) {
    console.log(word[i])
}

// Question 19 — Character Counting

let fruit = "banana"
let count = 0

for (let i = 0; i < fruit.length; i++) {
    if(fruit[i]==="a"){
        count++;
    }
}
console.log(count)


word = "experience"
count = 0

for(let i = 0; i < word.length; i++){
    if(word[i]==="e"){
        count++
    }
}
console.log(count)


word = "Pneumonoultramicroscopicsilicovolcanoconiosis" // It's a lungs disease name

vowel = 0
consonent = 0
let empty = ""

for (let i = 0; i < word.length; i++) {
    if(word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u"){
        vowel++
    }
    else{
        consonent++
        empty += word[i]
    }
}

console.log(vowel)
console.log(consonent)
console.log(empty)


