// Class declaration
class Person{ // class ka naam Person hai

    // constructor method se object initialize hoga
    constructor(name, age){
        this.name = name
        this.age = age
    }

    // Method ye greet method object ke behaviour ko define karega
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

// Creating an object from the class 
const person1 = new Person('Sohail', 21)
person1.greet() // Output: Hello my name is Sohail and I am 21 years old.

// Another object
const person2 = new Person('Jamil', 20)
person2.greet()