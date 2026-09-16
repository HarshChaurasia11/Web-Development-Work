// Ques 1 number Checker

let num = 0

if (num > 0) {
    console.log("Number is Positive!")
}

else if (num === 0) {
    console.log("Number will be Zero!")
}

else if (num < 0) {
    console.log("Number is Negative!")
}
else {
    console.log("Invalid or Undefined!")
}


// Ques 2: Check whether a number is Positive Even, Positive Odd, Negative, or Zero

let num1 = 41

if (num1 > 0) {
    if (num1 % 2 === 0) {
        console.log("Number will be positive and Even!")
    }
    else {
        console.log("Number is positive or Odd!")
    }
}
else if (num1 === 0) {
    console.log("Number will be Zero")
}
else if (num1 < 0) {
    console.log("Number is Negative!")
}
else {
    console.log("Invalid or Undefined")
}


// Ques 3: Check whether a person can vote and drive based on their age

let age = 20

if (age >= 21) {
    console.log("You Can Vote or drive!")
}
else if (age >= 18) {
    console.log("You can vote but Cannot drive!")
}
else {
    console.log("You can't vote and drive!")
}


// Ques 4: Find the largest number among three given numbers

let a = 461
let b = 485
let c = 446

if (a > b && a > c) {
    console.log(a + " is Greatest!")
}
else if (b > a && b > c) {
    console.log(b + " is Greatest!")
}
else {
    console.log(c + " is Greatest!")
}


// Ques 5: Check whether a student is eligible for the exam based on marks and attendance

let marks = 79
let attandance = 60

if (marks >= 75 && attandance >= 75) {
    console.log("You are eligible for Exam!")
}
else {
    console.log("You are not eligible for Exam!")
}


// Ques 6: Check whether a number is divisible by 3, 5, both, or neither

let num2 = 33

if (num2 % 3 === 0 && num2 % 5 === 0) {
    console.log("Number is divisible by both 3 and 5")
}

else if (num2 % 3 === 0) {
    console.log("Number is only divisble by 3")
}

else if (num2 % 5 === 0) {
    console.log("Number is only divisble by 5")
}

else {
    console.log("Number is not divisible by both 3 and 5")
}


// Ques 7: Calculate the electricity bill based on the number of units consumed

let units = 250

if (units <= 100) {
    console.log("Unit (" + units + ") and Rate is 5 =" + units * 5)
}
else if (units <= 200){
    console.log("Unit (" + units + ") and Rate is 7 =" + units * 7)
}
else if(units <= 300){
    console.log("Unit (" + units + ") and Rate is 10 =" + units * 10)
}
else{
    console.log("Unit (" + units + ") and Rate is 12 =" + units * 12)
}


// Ques 8: Check username and password to validate a login attempt

let username = "admins";
let password = "1235";

if(username == "admin" && password == "12345"){
    console.log("Login Successfully!")
}
else if(username == "admin" && password != "12345"){
    console.log("Password is Wrong!")
}
else{
    console.log("Invalid UserName")
}


// Ques 9: Check whether a given year is a Leap Year or Not

let year = 2025;

if(year%4 === 0){
    console.log(year + " is Leap Year!")
}
else{
    console.log("Is not a Leap Year!")
}


// Ques 10: Determine whether a person can drive based on age, license, and vehicle

let yourage = 22;
let hasLicense = true;
let hasVehicle = false;

if(yourage >= 18){
    if(hasLicense == true && hasVehicle == true){
        console.log("You can Drive!")
    }
    else if(hasLicense == false){
        console.log("Get a Driving License!")
    }
    else{
        console.log("You need a Vehicle!")
    }
}
else{
    console.log("You are Too Young!")
}