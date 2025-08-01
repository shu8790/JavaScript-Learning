
var myName="Shubham Kale  "

//1. To find the length of string 

    console.log("Length of the String is ->"+myName.length)


// 2. Create SubString of the string 

    console.log(myName.slice(0,7))

// 3. Access specific character of String

console.log(myName[1])

// 4. split the string into 2 string

let fullName=myName.split(/ (.+)/)
console.log(fullName)

// 5. trim left and right white space
console.log(fullName[1])
console.log("length of 2nd string ->"+fullName[1].length)

console.log(fullName[1].trim())
    
console.log("length of 2nd string ->"+fullName[1].length)

// 6. String date subtraction

let date ="23";
let nextDate ="27";

let diff= parseInt(nextDate)- parseInt(date);

console.log(diff)

console.log("string conversion of date difference ->"+diff.toString())