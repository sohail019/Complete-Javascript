// this Keyword
// 'use strict'

// Global Context
console.log(this) // Output: {} in node and window object in browser.

// ----------------------------------------
// Function Context
function show(){
    console.log(this);
}

show() // Global object ko refer karta hai

// Function context in strict mode
// function showInStrict(){
//     console.log(this);
// }

// showInStrict() // undefined

// ------------------------------------------------
// Method Context

const person = {
    name: 'Sohail',
    age: 21,
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

person.greet() // Output: Hello Sohail

// ------------------------------------------------
// Constructor Context

function Car(brand, model){
    this.brand = brand
    this.model = model
}

const myCar = new Car("Tata", "Safari")
console.log(myCar.brand); // Tata
console.log(myCar.model); // Safari

// ------------------------------------------------
// Event Handlers
const myBtn = document.querySelector('#myBtn')

myBtn.addEventListener('click', function(){
    console.log(this); // this refers to the button element
})


