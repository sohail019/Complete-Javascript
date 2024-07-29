# Prototypes

## Intro to Prototypes
- JavaScript mein har object ka ek internal prototype hota hai, jo ek aur object ko refer karta hai.
- Prototype based programming mein , objects dusre objects se properties aur methods inherit kar sakte hai.

### 1. Prototype Chain
- JavaScript mein objects ka prototype chain hota hai.
- Agar object mein koi property nahi milti, to JavaScript prototype chain mein search karta hai.

```javascript
// Prototype Chain

const animal = {
    speak(){
        console.log("Animal Speaks");
    }
};

const dog = Object.create(animal)

dog.bark = function(){
    console.log("Dog Barks");
}

dog.speak() // Output: Animal Speaks (from prototype)
dog.bark() // Output: Dog Barks (from own property)
```

### 2. Prototypes in Function
- JavaScript functions ke paas bhi ek prototype object hota hai.
- Ye object instances jo function se create kiye jaate hai, unke prototypes ko define karta hai.

```javascript
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
```

### 3. Inheritance with Prototypes
JS mein prototype based inheritance ka use karke ek object se dusre object ko properties aur method inherit kiya jaa sakta hai.
```javascript
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
```

### 4. Prototype Methods and Properties
Prototype mein methods aur properties define kar sakte hai jo derived objects ke liye accessible hote hai.

```javascript
// Prototype Methods and Properties

function Car(brand, model){
    this.brand = brand
    this.model = model
}

// Create Prototype Method
Car.prototype.start = function(){
    console.log(`${this.brand} ${this.model} starts.`);
}

// Create Prototype Property
Car.prototype.year = 2024


// Object
const myCar = new Car("Mahindra", "Scorpio-N")

// Call method
myCar.start() // Output: Mahindra Scorpio-N starts

// Call property
console.log(myCar.year) // Output : 2024
```

### 5. Modifying Prototypes
Prototypes ko dynamically modify kiya jaata hai, jisse existing objects ko nae methods aur properties mil sakte hai.

```javascript
// Modifying Prototypes

function Vehicle(type){
    this.type = type
}

// Prototype method
Vehicle.prototype.describe = function(){
    console.log(`This is a ${this.type}`);
}

// Object
const bike = new Vehicle('bike')
bike.describe() // This is a bike


Vehicle.prototype.describe = function(){
    console.log(`The type of the Vehicle is ${this.type}`);
}

bike.describe() // The type of the Vehicle is bike
```

### 6. Object.setPrototypeOf()
- **Object.setPrototypeOf()** method ko use karke ek object ka prototype dynamically set kiya jaa sakta hai.
```javascript
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
```

### 7. Object.getPrototypeOf()
**Object.getPrototypeOf()** method ko use karke kisi bhi object ka prototype retrieve kar sakte hai.

```javascript
const animal = {
    speak(){
        console.log("Animal speaks");
    }
}

const dog = Object.create(animal)

console.log(Object.getPrototypeOf(dog)); // Output {speak : [Function speak]}
```

### 8. Object.hasOwnProperty()
**Object.hasOwn()** method se aap check kar sakte hai ki property object ke apne prototype se hai ya parent prototype se inherited hai.

```javascript
// Object.hasOwn()

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
```

### 9. Object Composition
Object composition ka use karke ham multiple objects ki properties aur methods ko combine kar sakte hai.
```javascript
const vehicle = {
    start(){
        console.log("Vehicle started");
    }
}

// Object.assign({}, vehicle, {drive(){}})
// Pehla argument {} ek empty object hai, jis mein saari properties copy hogi.
// Dusra argument vehicle hai, jisse start method copy hoga
// Teesra argument ek naya object hai jisme drive method define kiya jaega.
const car = Object.assign({}, vehicle, {
    drive(){
        console.log("Car is Driving");
    }
})

car.start() // Output: Vehicle started
car.drive() // Output: Car is driving
```