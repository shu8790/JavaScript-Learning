// scope of var keyword
//      1. at global and functional level

var continent = "Asia"

// block working of var

if (1==1)
{
    var continent ="America"
}

function nameOfContinent()
{
    var continent = "Africa"
}

console.log(continent)
console.log("-----------------------------------")

let state = "MH"

// block working of var

if (1==1)
{
    let state ="MP"
}

function nameOfContinent()
{
    let state = "TN"
}

console.log(state)


