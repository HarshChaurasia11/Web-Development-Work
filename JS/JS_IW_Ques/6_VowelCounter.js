// The Vowel counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function vowelCounter(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if ("aeiou".includes(element.toLowerCase())) {
            count++;
        }
    }
    return count
}

console.log(vowelCounter("qwertyuioplasdfghjklkmnbvxxzaserfgyuijnoknbv"))