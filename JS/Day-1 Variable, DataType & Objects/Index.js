// Ques 1 print name, age and isStudent

var name = "Harsh"
var age = 21
var isStudent = true

console.log(name)
console.log(age)
console.log(isStudent)


// Ques 2 print data type type of both

var name = "Rahul"
var age = 22
var price = 99.9
var isLoggedIn = false

console.log(name, typeof(name))
console.log(age, typeof(age))
console.log(price, typeof(price))
console.log(isLoggedIn, typeof(isLoggedIn))


// Ques 3 Print empty variable & give value null and tell what should be print

let x
console.log(x, typeof(x))

let y = null
console.log(y, typeof(y))

// Ques 4 Create a object and print their name and course only.

let a = {
    name : "Harsh",
    age  : 25,
    course : "B.tech"
}

console.log(a.name)
console.log(a.course)

// Ques 5 Print values of object

let mobile = {
    brand : "Samsung",
    model : "S24",
    price : 70000
}

console.log(mobile.brand)
console.log(mobile.model)
console.log(mobile.price)


// Ques 6 Print whole objects keys and Value Both

let car = {
    brand : "Audi",
    model : "A4",
    year : 2025,
    price : 8000000,
    isElectric : false
}

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(car, typeof(car))
console.log(typeof(car.brand))
console.log(typeof(car.model))
console.log(typeof(car.year))
console.log(typeof(car.price))
console.log(typeof(car.isElectric))


// Ques 7 reassign let variable

let n = "Harsh"
n = "Rahul"

console.log(n)


// Ques 7 Obj value ko reassign karna and city 

let student = {
    name: "Harsh",
    age: 21,
    course: "B.Tech"
};

student.age = 22

student.city = "Kanpur"

console.log(student)


// Ques 8 delete a key & value into an object 


let tab = {
    brand : "Samsung",
    model : "S24",
    price : 70000
}

console.log(tab)
delete(tab.price)

console.log(tab)

// Ques 9 reassign and add value in object 

let stud = {
    name : "Harsh",
    age : 22,
    course : "MBA",
    marks : 87,
    isPassed : true
}

console.log(stud)

stud.age = 21
stud.marks = 90
stud.city = "Agra"
stud.isPassed = false

console.log(stud)