// Function is block of code combile together to acheive desired output

/* There are three ways of declaring functions
        1. Function Declaration
        2. Function Expression
        3. Arrow Function
*/

// 1. Function declaration

        // declare function to add two numbers

    function add(a,b)
    {
       return a+b
    }
        //calling function

    console.log(add(10,3))

// 2. function expression

    let sum= function(a,b)
    {
        return a+b
    }

        // calling function

        console.log(sum(20,40))

// 3. Arrow Function

    let sum1=((a,b)=>a+b)

        //calling function

        console.log(sum1(100,20))
