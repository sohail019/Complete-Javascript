// Object.hasOwnProperty()

const animal = {
    speak(){
        console.log("Animal speaks");
    }
}

const dog = Object.create(animal)


dog.bark = function(){
        console.log("Dog barks");
}

dog.bark()
dog.speak()

console.log(dog.hasOwnProperty('bark')); // true (own property)
console.log(dog.hasOwnProperty('speak')); // false (inherited property)