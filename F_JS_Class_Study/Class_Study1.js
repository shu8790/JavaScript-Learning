
class Person
{
    age = 25;

    get location()
    {
        return "canada";
    }

    constructor(firstName,lastName)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    fullname()
    {
        return this.firstName+" "+this.lastName;
    }
}

// let person= new Person("shubham","kale");
// console.log("full name -> "+person.fullname());
// console.log("age of "+person.firstName+" is "+person.age);
// console.log("Location of "+person.firstName+" is "+person.location);
module.exports = Person;