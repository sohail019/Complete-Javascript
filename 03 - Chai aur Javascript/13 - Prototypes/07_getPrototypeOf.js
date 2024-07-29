// Object.getPrototypeOf.js

const animal = {
    speak(){
        console.log("Animal speaks");
    }
}

const dog = Object.create(animal)

console.log(Object.getPrototypeOf(dog)); // Output {speak : [Function speak]}