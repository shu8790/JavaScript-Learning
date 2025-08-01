// Array Reduce -> do the sum of all elements present in the Array

let score =[23,42,54,66]

sumOfArrayElements=score.reduce((sum,i)=>sum+i,0);

console.log("sum of array elements is -> "+sumOfArrayElements)
console.log("------------------------------------------------------------")

// Array filter -> filter out the even number from the array and creat new array of it

let arrayOfEvenNumber=score.filter(i=>i%2==0)

console.log(/*"Array of Even Number is \n"*/ arrayOfEvenNumber)
console.log("------------------------------------------------------------")

// Array Map => multiple array elements of even array by 3 and store it in one array

let mulEvenArray =arrayOfEvenNumber.map(i=>i*3)

console.log(mulEvenArray)



