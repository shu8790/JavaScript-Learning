
let marks = Array(6)

// initialisation with new keyword 
//marks = new Array(10,20,30,40,50,60)

// initialisation without new keyword
marks=[20,40,60,80,100,120]

// different methods to use from array

    //1. change value of any element
        marks[1]=140
        console.log("changed value of 1st element ->"+marks[1])
    
    //2. find the lenght of Array
        console.log("Lenght of Array is ->"+marks.length)
    
    //3. Append array / add element at the end of the array
        marks.push(150)
        console.log(marks)

    //4. remove element from array from last
        marks.pop()
        console.log(marks)

    //5. add element at the beginning of the Array
        marks.unshift(200)
        console.log(marks)
    
    //6. to find the index of sepcific element 
        marks.indexOf(200)
        console.log(marks.indexOf(200))

    //7. if element present in array
        marks.includes(200)
        console.log("arrray have element 200 ->"+marks.includes(200))

for ( let i=0; i<=marks.length-1;i++)
{
    console.log(marks[i])
}

