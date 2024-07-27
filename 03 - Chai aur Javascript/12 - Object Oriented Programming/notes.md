# Object Oriented Programming

- Javascript Object Oriented paradigm mein bhi chal sakti hai jismein ham objects and classes ka use kar ke code ko modular and reusable bana sakte hai.
- Is ke 5 concepts hao
    - Classes and Objects
    - Encapsulation
    - Abstraction
    - Inheritance
    - Polymorphism

## Classes and Objects

### Classes
- Class ek blueprint hai jo objects create karne ke liye use hota hai.
- Is mein properties (data) and methods (functions) define kiye jaate hai.

```javascript
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
```

### Objects
- Objects ek instance hota hai class ka.
- Ismein class ke properties aur methods hote hai. \

```javascript
// Using the Person class
const person2 = new Person('Bob', 25);
person2.greet();  // Output: Hello, my name is Bob and I am 25 years old.
```

## Encapsulation
- Encapsulation ka matlab hai data aur methods ko ek unit (class) ke andar bundling karna aur unhe outer code se protect karna.
- Encapsulation ka matlab hai data ko private rakhna aur public methods ke through access provide karna.
- Isse aap data ko secured aur controlled tareeqe se access kar sakte hai.

### JavaScript mein Encapsulation Kaise Implement Karein?
- Ham private properties aur methods ka use kar sakte hai.
- ECMAScript 2022 se pehle, ham closures aur naming convention ka use karke private members implement karte the.
- Lekin ab ham modern syntax ke sath **'#'** prefix ka use karke private fields define kar sakte hai.

```javascript
class BankAccount{

    // #balance ek private field hai jo directly class ke bahar se accessible nahi hai.
    #balance

    constructor(initialBalance){
        this.#balance = initialBalance // initialize private field
    }

    // Public method banate hai money deposit karne ke liye
    deposit(amount){
        if(amount > 0){
            this.#balance += amount
        }
    }

    // Public method banate hai money withdraw karne ke liye
    withdraw(amount){
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount
        }
    }

    // Public method banate hai balance dekhne ke liye
    getBalance(){
        return `Balance is ${this.#balance}`
    }
}

const account1 = new BankAccount(1000);
account1.deposit(1000) // 1000 deposit hua to balance hua 2000
console.log(account1.getBalance()) // 2000

account1.withdraw(1200) // 1200 withdraw karne pe 800 balance hona chahiye
console.log(account1.getBalance())

/* Upar ka methods ke through private property access horahi hai par agar private property ko direct access karne ki koshish karenge to dekhte hai kya hota hai */

console.log(account1.#balance) // SyntaxError: Private field '#balance' must be declared in an enclosing class
```
### Advantages of Encapsulation:
1. **Security:** Data ko unauthorized access se protect karta hai.
2. **Modularity:** Code ko logical units mein organize karna easy hota hai.
3. **Flexibility:** Object ke internal implementation ko badle bina interface ko change kiya jaa sakta hai.
4. **Maintainability:** Code ko maintain aur update karna aasan hota hai.


## Abstraction
- Abstraction OOP ka ek important concept hai jo complexity ko manage karne aur systems ko simple aur user-friendly banane mein help karta hai.
- Iska purpose hai unncessary details ko hide karna aur sirf essential features ko highlight karna.

### Key Points:
1. **Simplicity:** Abstraction system ko simple aur easy to understand banata hai.
2. **Focus on What, Not How:** Abstraction ka focus what functionality provide ki ja rahi hai par hota hai, how implementation ki gayi hai par nahi.
3. **Improved Security:** By hiding details, abstraction sensitive data ko unauthorized access se protect karta hai.

### JavaScript mein Abstraction Kaise Implement Karein?
- JS mein abstraction ko achieve karne ke liye classes aur objects ka use hota hai.
- Ham methods and properties define karke implementation details ko hide kar sakte hai.

 
 ## Inheritance 
 - Inheritance OOP ka ek fundamental concept hai jo hamein class ke properties aur methods ko doosri class mein reuse karne ki facility deta hai.
 
 ### Keypoints:
 1. **Code Reusability:** Parent class ka code child class mein use kar sakte hain bina dubara likhe.
2. **Hierarchy:** Classes ke beech hierarchical relationship establish hota hai.
3. **Extensibility:** Child class parent class ke behavior ko extend aur override kar sakti hai.

### JavaScript mein Inheritance Kaise Implement Karein?
JavaScript mein inheritance ko implement karne ke liye **class** aur **extends** keywords ka use hota hai.

```javascript
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
```
### Method Overriding
Child class parent class ke method ko override kar sakti hai apne implementation ke saath.

```javascript
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
```

### Prototypal Inheritance
- JS mein inheritance ko achieve karne ka ek traditional tareeqa hai PI.
- Har object ek prototype se linked hota hai, jis ke through properties aur methods ko inherit kar sakte hai.

```javascript
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
```
