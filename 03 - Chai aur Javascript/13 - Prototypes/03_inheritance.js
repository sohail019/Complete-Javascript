// Inheritance with Prototypes

// constructor function define
function Animal(name){
    // har new Animal object jo create hoga uske paas ek name property hogi, jo hamein constructor ke argument se milegi.
    this.name = name;
}

// ek method define karte hai jo kisi bhi Animal object ke liye available hoga
Animal.prototype.speak = function(){
    console.log(`${this.name} makes noise`);
}

// ek Dog constructor define karte hai
function Dog(name){
    // Animal constructor ko Dog ke context mein call kar rahe hai, jisse Dog object bhi name property le sake.
    Animal.call(this, name) // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype) // Isse ham Dog ko Animal se inherit kar rahe hai, matlab Dog ke objects Animal ke methods ko access kar sakenge

Dog.prototype.constructor = Dog; // Isse ham ensure kar rahe hai ki Dog object ka constructor properly Dog function ko point karey


// ek naya method define karte hai Dog.prototype pe
Dog.prototype.barks = function(){
    console.log(`${this.name} barks.`);
}

const myDog = new Dog('Boozo') // Dog class ka ek naya instance(object) bana rahe hai jiska naam Boozo hai

// speak() method call hoga jo Animal se inherit hua
myDog.speak() // Boozo makes noise

// barks() method call hoga jo Dog prototype pe define kiya gaya hai
myDog.barks() // Boozo barks