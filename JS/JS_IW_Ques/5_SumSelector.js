// The sum selector : You are Working on a function that should sun all number in an array until it encounter a negative number. Write a function that perform this summation.


function sumSelector(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element >= 0) {
            sum = sum + element
        } else {
            break
        }
    }
    return sum
}

let add = sumSelector([55, 45, 65, 36, -15, 85])
console.log(add)