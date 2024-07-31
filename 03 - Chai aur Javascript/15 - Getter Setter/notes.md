# Getter Setter
- JavaScript mein getters aur setters hamein object properties ko access aur modify karne ka ek controlled way dete hai.
- Ye OOP ke concepts hai jo encapsulation ko support karte hai.

## Getters aur Setters Kya Hai?
### Getters: 
- Getters hamein object ki properties ko access karneka ek method provide karta hai.
- Jab ham kisi property ko read karte hai to getter method automatically call hota hai.

### Setters:
- Setters hamein object ki properties ko update karneka ek method provide karta hai.
- Jab ham kisi property ko set karte hai, to setter method automatically call hota hai.

<!-- Syntax -->
## Syntax
Getters aur Setters ko object mein define karne ke liye **get** aur **set** keywords use kiya jata hai.

```javascript
const obj = {

    // Getter
    get propertyName(){
        // return value
    }

    // Setter
    set propertyName(value){
        // set value
    }
}
```

## Basic Example
```javascript
const person = {
    firstName: 'Sohail',
    lastName: 'Shaikh',

    // Getter
    get fullName(){
        // return value
        return `${this.firstName} ${this.lastName}` // first name aur last name ko combine karke full name return karega
    },

    // Setter
    set fullName(name){
        // set value
        const parts = name.split(' ') // full name ko split karke first name aur last name properties ko update kar sakenge
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

console.log(person.fullName); // Sohail Shaikh

person.fullName = 'Salman Khan'
console.log(person.firstName); // Salman
console.log(person.lastName); // Khan
```

## Getter Setter with Classes
JavaScript classes mein bhi getters aur setters ko use kar sakte hain. Yeh encapsulation aur data hiding ko aur easy banata hai.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.width * this.height;
  }

  // Setter for area (assuming a fixed width)
  set area(newArea) {
    this.height = newArea / this.width;
  }
}

const rect = new Rectangle(10, 20)
console.log(`Area of Rectangle is ${rect.area}`);

rect.area = 300
console.log(`Width of Rectangle is ${rect.height}`); // height becomes 30
```

## Benefits of Getters and Setters
1. **Encapsulation:** Ye data ko protect karne ke liye aur unwanted modifications se protect karne mein help karta hai.
2. **Validation:** Setters mein validation logic implement karke properties ko invalid values se protect kiya jaa sakta hai.
3. **Computed Properties:** Ye calculated values ko properties ki tarah expose karne mein madad karta hai.

## Advanced Use Cases of Getter and Setter

### 1. Data Validation in Setter
- Setter mein ham validation logic implement kar sakte hai taaki koi invalid data properties ko set na kar sake
```javascript
// Data Validation

class BankAccount{
    constructor(balance){
        this.balance = balance
    }

    // getter for balance
    get balance(){
        return this.balance
    }

    // Setter balance with validation

    set balance(amount){
        if(amount < 0){
            console.log('Amount cannot be negative');
        } else{
            this._balance = amount
        }
    }
}


const account = new BankAccount(1000);
console.log(account._balance); // 1000

account.balance = 500 // updates balance
console.log(account._balance); // 500

account.balance = -300 // Attempt to set invalid balance
// Output: // Amount cannot be negative
```

### 2. Private Properties using Symbol
```javascript
// Private Properties using Symbol

const _salary = Symbol('salary')

class Employee{
    constructor(name, salary){
        this.name = name
        this[_salary] = salary
    }

    // Getter for salary
    get salary(){
        return this[_salary]
    }

    // Setter for salary
    set salary(amount){
        if (amount > 0) {
            this[_salary] = amount
        } else{
            console.log(`Salary must be positive`);
        }
    }
}

const emp = new Employee('Sohail', 10000)
console.log(emp.salary); // Output: 10000

emp.salary = 6000
console.log(emp.salary); // Output: 6000

emp.salary = -1000; // Attempt to set invalid salary
// Output: Salary must be positive
```

### 3. Lazy Evaluation using Getter
Getters ka use lazy evaluation ke liye kiya jaa sakta hai jismein value tabhi calculate hoti hai jab wo access hoti hai.

```javascript
// Lazy Evaluation with Getter

class ExpensiveCalculation{
    constructor(){
        this._result = null
    }

    // Getter for result with lazy evaluation
    get result(){
        if(this._result === null){
            console.log(`Calculating result......`);
            this._result = this.performExpensiveCalcualtion()
        }
        return this._result
    }

    performExpensiveCalcualtion(){
        // Simulating a time consuming calculation
        let sum = 0
        for(let i = 0; i <= 1e6; i++){
            sum += i
        }
        return sum
    }
}

const calc = new ExpensiveCalculation()
console.log(calc.result) // Output: Calculating result...... 500000500000

console.log((calc.result)); // 500000500000 (without recalculating)
```