// The Magical sorting Hat : Imagin you are create a magical sorting hat for a wizard school. Implement a Javascriptfunction that takes an array of student names and assigns them to one of four houses (White (length less than 6), Yellow(length less than 8), Green(length less than 12) or Red(length greater than or equals to 12)) based on the length of their names.

let houses = ["ShukadevSinghSandhu", "Tywin", "Drogon", "Shivangi", "Robb", "Thor", "Freddy", "DenarysTargarion", "Anjali", "Priya", "Siya", "Emalia", "Tony", "Aegon", "FirstMan"]

let housess = []

for (const house of houses) {
    if (house.length < 6) {
        housess.push("White")
    }
    else if (house.length < 8) {
        housess.push("Yellow")
    }
    else if (house.length < 12) {
        housess.push("Green")
    }
    else {
        housess.push("Red")
    }
}

console.log(housess)