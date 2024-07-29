// Binding this with call, apply and bind

// JavaScript mein aap this ka value manually set kar sakte hain

// call method

function greet(){
    console.log(`Hello ${this.name}`);
}

const person = {name: 'Sohail'}
greet.call(person) // Hello Sohail


// apply method
greet.apply(person) // Hello Sohail


// bind method
const boundGreet = greet.bind(person)
boundGreet() // // Hello Sohail