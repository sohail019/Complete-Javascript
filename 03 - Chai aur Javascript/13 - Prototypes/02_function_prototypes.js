// Function Prototypes

function Person(name){
    this.name = name
}

// ye method Person constructor se create kiye gae saare objects ke liye available hoga
Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`);
}

const person1 = new Person('Sohail')
person1.greet()

const person2 = new Person('Sohail Shaikh')
person2.greet()