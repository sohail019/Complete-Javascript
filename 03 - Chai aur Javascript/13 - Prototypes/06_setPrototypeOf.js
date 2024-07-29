// setPrototypeOf

const animal = {
    speak(){
        console.log("Animal Speaks.");
    }
}

const dog = {
    bark() {
        console.log("Dog barks.");
    }
}

Object.setPrototypeOf(dog, animal)

dog.speak() // Output: Animal speaks (inherited from prototype)

dog.bark() // Output: Dog barks

animal.speak() // Output : Animal speaks

animal.bark() // Error: animal.bark is not a function
