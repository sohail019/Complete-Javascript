// Parent Class
class Vehicle{

    // constructor
    constructor(brand, model){
        this.brand = brand
        this.model = model
        
    }

    // Method in parent class
    startEngine(){
        console.log("Engine Started");
    }
}

// Child class
class Car extends Vehicle{

    constructor(brand, model, doors){
        super(brand, model) // call parent class constructor
        this.doors = doors
    }

    // Method in child class
    honkHorn(){
        console.log("Beep! Beep!");
    }
}

// Creating an instance of the child class
const myCar = new Car("Toyota", "Fortuner", 4);

myCar.startEngine() // Output: Engine Started
myCar.honkHorn() // Output: Beep! Beep!

// data dekhte hai
console.log(`Car Brand Name is ${myCar.brand} and Model Name is ${myCar.model}, Plus it has ${myCar.doors} doors.`)


// --------------------------------------------------

// Method Overriding

class Animal{
    speak(){
        console.log("Animal Speaks.");
    }
}

class Dog extends Animal{
    // Overriding the speak method
    speak(){
        console.log("Bow! Bow!");
    }
}

const dog = new Dog();

dog.speak(); // Output: Bow! Bow!


// ----------------------------------------------------
// Prototypal Inheritance

// Parent object
const vehicle = {
    startEngine: function(){
        console.log("Engine Started");
    }
}

// Child object
const car = Object.create(vehicle)

car.honkHorn = function(){
    console.log("Beep! Beep!");
}

car.startEngine() // Output: Engine started
car.honkHorn() // Output: Beep! Beep!