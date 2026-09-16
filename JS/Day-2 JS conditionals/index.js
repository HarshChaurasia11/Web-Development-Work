// Ques 1 find tempreature is less than 30 using if function 

let temp = 45;

if (temp > 30) {
    console.log("Temprature is greater than 30")
}


// Ques 2 Check the number is even or odd 


let num = 841

if (num%2==0) {
    console.log(num+" is even!")
    
} else {
    console.log(num+" is odd!")
}


// Ques 3 find the grade of according to their Marks 

let marks = 95;

if(marks >= 90){
    console.log("According to their marks : "+marks+", Your grade is A ")
}
else if(marks < 90 && marks >= 75){
    console.log("According to their marks : "+marks+", Your grade is B ")
}
else if(marks < 75 && marks >= 50){
    console.log("According to their marks : "+marks+", Your grade is C ")
}
else{
    console.log("According to their marks : "+marks+", Your grade is Fail ")
}


