// Classes and Methods

class Person{
    constructor(username){
        this.username = username
    }

    greet(){
        console.log(`Hello ${this.username}`);
    }
}


const person1 = new Person("Sohail")
person1.greet() // Hello Sohail

// Is mein greet method 'this.username' ko refer karta hai jo Person class ke instance ki property hai.
