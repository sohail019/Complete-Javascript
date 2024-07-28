// Polymorphism

class Animal{
    //  ye class mein generic method makeSound() define karenge
    makeSound(){
        console.log("Animal Makes a Sound.");
    }
}

// Child classes mein Animal class ko extend karenge aur makeSound() method ko apni specific implementations ke sath override karenge

class Dog extends Animal{
    makeSound(){
        console.log("Dog Makes Sound of Bow! Bow!")
    }
}

class Cat extends Animal{
    makeSound(){
        console.log("Cat Makes Sound of Meow! Meow!");
    }
}

// ek function banaenge jo generic interface provide karega jo kisi bhi animal ke object ke liye makeSound() method ko call karega 
function animalSound(animal){
    animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

animalSound(dog)
animalSound(cat)