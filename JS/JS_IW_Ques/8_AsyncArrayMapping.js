// Async Array Mapping: Write an asynchronous function that takes an array of numbers and return a new array of promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function AsyncArrayMapping(arr) {
    return arr.map(num => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    });
}


Promise.all(AsyncArrayMapping([5, 7, 9, 3])).then(result => console.log(result));
