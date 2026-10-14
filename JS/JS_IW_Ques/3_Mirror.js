// The Mirror Mirror : Imagin you have a string, and you need to create a new String that is mirror image of the original. Write a function that append a reserved version of the original string to itself.


function mirrorMirror(str){
    // first I have use split function to convert string to arr after converting I can use reverse function to reverse an array at the last I also use join function to convert an array to string.
    let resStr = str.split("").reverse().join("")
    let mirror = str + resStr
    return mirror

}

console.log(mirrorMirror("first"))

