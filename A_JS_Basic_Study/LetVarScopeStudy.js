// scope of var keyword
/*1. at global and functional level 
->  it mean that if variable is define at global level then it is accessible anywhere in
    code
    if variable is define at functional level then it is accessible only in the specific function
-> Redeclaring variables is allowed.
        Redeclaring ->  let a= 4
			            let a= “shubham”
-> Reassigning of the variable is allowed.
        Reassigning ->  let a= 4
			                a=5

*/
var continent = "Asia"

// block working of var
if (1==1)
{
    var continent ="America"
}

// function working of var
function nameOfContinent()
{
    var continent = "Africa"
}

console.log(continent)
console.log("------------------------------------------------------------------------------------")

// scope of let keyword
/*1. at global and block level 
->  it mean that if variable is define at global level then it is accessible anywhere in
    code
    if variable is define at functional level then it is accessible only in the specific function
-> Redeclaring of variable is not allowed
        Redeclaring ->  let a= 4
			            let a= “shubham”
-> Reassigning variables is allowed.
        Reassigning ->  let a= 4
			                a=5

*/

let state = "MH"

// block working of let
if (1==1)
{
    let state ="MP"
}

// function working of let
function nameOfContinent()
{
    let state = "TN"
}

console.log(state)


