// The password validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 character long contains both uppercase and lowercase letter, include at least one digit.


// Approach 1: Multiple conditions with &&
// function passwordValidator(Password){
//     if(Password.length >= 8 && /[A-Z]/.test(Password) && /[a-z]/.test(Password) && /[0-9]/.test(Password)){
//         return "Password Accepted"
//     }else{
//         return "Password Invalid"
//     }
// }



// Approach 2: Nested if-else
function passwordValidator(Password){
    if(Password.length >= 8){
        if (/[A-Z]/.test(Password)) {
            if (/[a-z]/.test(Password)) {
                if (/[0-9]/.test(Password)) {
                    return "Password Accepted"
                } else {
                    return "Give some Number to create Password"
                }
            } else {
                return "Give atleast one small letter to make Strong Password"
            }
        } else {
            return "Give atleast one capital letter to make Strong Password"
        }
    }else{
        return "Password is less than 8 Characters"
    }
}

let password = passwordValidator("Harsh7841")
console.log(password)