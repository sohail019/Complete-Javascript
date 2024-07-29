# this Keyword
- JavaScript mein 'this' keyword kaafi important hai aur iska behaviour context par depend karta hai.
- Iska main purpose hai function ya object ka current execution context refer karna.

## 'this' Keyword kya hai?
- 'this' keyword ek special keyword hai jo current execution context ko point karta hai.
- Iska matlab ye hota hai ki ye refer karta hai us object ko jisse current function ya method call horaha hai.

### Global Context
Agar 'this' keyword global scope mein use hota hai (strict mode mein nahi), to ye global object (**window** in browsers) ko refer karta hai.

```javascript
console.log(this) // Output: {} in node and window object in browser.
```

### Function Context
Function ke andar 'this' keyword function ko call karne wale object ko refer karta hai.
```javascript
function show() {
    console.log(this)
}

show() // Global object ko refer karta hai
```
Output: 
```javascript
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
```

### Function Context in strict mode
```javascript
'use strict'
function showInStrict(){
    console.log(this);
}

showInStrict() // undefined
```

### Method Context
Method ke andar 'this' keyword us object ko refer karta hai jis mein method define kiya gaya hai.

```javascript
const person = {
    name: 'Sohail',
    age: 21,
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

person.greet() // Output: Hello Sohail
```

### Constructor Context
Constructor function ke andar 'this' keyword nae object ko refer karta hai jo create horaha hai.

```javascript
function Car(brand, model){
    this.brand = brand
    this.model = model
}

const myCar = Car('Tata', 'Safari')
console.log(myCar.brand) // Tata
console.log(myCar.model) // Safari
```

### Event Handlers
Event Handler ke andar 'this' event ko trigger karne wale element ko refer karta hai.

*index.html*
```html
<!-- Event Handler -->
    <button id="myBtn">Click Me!</button>
```
*script.js*
```javascript
// Event Handlers
const myBtn = document.querySelector('#myBtn')

myBtn.addEventListener('click', function(){
    console.log(this); // this refers to the button element
})
```

## Arrow Function and 'this'
Arrow function mein 'this' lexically scoped hota hai, yaani ki ye function define hone wale context se 'this' inherit karta hai.

```javascript
const obj = {
    name: 'Sohail',
    regularFunction: function(){
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
}

console.log(obj.name) // Sohail
obj.regularFunction() // Sohail
obj.arrowFunction() // undefined
```

## Binding 'this' with 'call', 'apply' and 'bind'
JavaScript mein aap this ka value manually set kar sakte hain

### 1. call() method
'call()' method kisi function ko ek specific 'this' value ke sath call karne ke liye hota hai.

```javascript
function greet(){
    console.log(`Hello ${this.name}`);
}

const person = {name: 'Sohail'}
greet.call(person)
```

### 2. apply() method
'apply()' method bhi call ki tarah hi hota hai, bas ye arguments ko array ke room mein leta hai.
```javascript
// apply method
greet.apply(person) // Hello Sohail
```

### 3. bind() method
'bind()' method ek naya function create karta hai jis mein 'this' ka value set hota hai.
```javascript
const boundGreet = greet.bind(person)
boundGreet() // Hello Sohail
```

## Using 'this' in Classes and Methods
Javascript mein 'this' keyword ka use methods ke andar objects ko refer karne ke liye hota hai.

```javascript
class Person{
    constructor(username){
        this.username = username
    }

    greet(){
        console.log(`Hello ${this.username}`);
    }
}


const person1 = new Person("Sohail")
person1.greet() // Hello Sohail

// Is mein greet method 'this.username' ko refer karta hai jo Person class ke instance ki property hai.
```

## Common Mistakes with this

### 1. Loosing Context:
JavaScript mein 'this' keyword ko kabhi kabhi expected context mein use karna tricky ho sakta hai, jaise ki event handlers ke andar ya callback functions mein
```javascript
const person = {
    name: 'Sohail',
    greet: function(){

        setTimeout(function() {
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
}

person.greet() // Hello undefined
```

**Solution**
```javascript
const person2 = {
    name: 'Sohail',
    greet: function(){

        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
}

person2.greet()
```

### Using 'this' in Event Listener
```javascript
class Button{
    constructor(element){
        this.element = element
        this.element.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick(){
        console.log("Button Clicked: ", this.element.id)
    }
}

const button = new Button(document.getElementById("myButton")); 
// Is example mein, handleClick method ko this ke correct context ke saath bind kiya gaya hai using bind method, taaki this.element event ke waqt correct button element ko refer kare.
```

### Using 'this' in Nested Functions
```javascript
const obj = {
    value: 42,
    showValue: function(){
        function innerFunction(){
            console.log(this.value);
        }
        innerFunction.call(this) // 42
    }
}

obj.showValue()

// Yahan innerFunction.call(this) ka use context ko explicitly set karne ke liye kiya gaya hai, taaki this obj ko refer kare.
```