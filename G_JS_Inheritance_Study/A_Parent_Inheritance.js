
module.exports= class Person
{
    age = 25;

    // getter 
    get location()
    {
        return "Canada";
    }

    //constructor -> why we use constuctor in java script
    
    constructor(firstName,lastName)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    //Method

    fullName()
    {
        return this.firstName+this.lastName;
    }


}
