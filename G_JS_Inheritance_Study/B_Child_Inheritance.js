const Person=require("./A_Parent_Inheritance.js");

// inherit he properties of parent class 

class Pet extends Person
{
    // when inheriting parent calss property child class must have parent class constructor

    constructor(firstName,lastName)
    {
        // now you need to call the parent class constructor by using super keyword

        super(firstName,lastName);
    }

    // change the parent class property location 

    get location()
    {
        return "Mumbai";
    }

    // now create the object of sub class and access the method of parent class

}

let petDog =new Pet("Sheru"," Kale");
console.log(petDog.fullName());
console.log(petDog.age);
console.log(petDog.location);