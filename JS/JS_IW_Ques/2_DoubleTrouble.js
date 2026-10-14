// The Double Trouble : You are tasked with writing a function that double each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.



function doubleTrouble(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===arr[i+1]){
            arr2.push(arr[i] * 2);
            arr2.push(arr[i]);
            i++;
        }else{
            arr2.push(arr[i] * 2);
        }
    }
    return arr2
}

let a = doubleTrouble([5, 4, 8, 16, 16, 84, 67])
console.log(a)
