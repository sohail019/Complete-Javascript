/* This behavior became very dangerous if we use var, var actually creates property in global object */
var firstName = 'sohail'

const sohail = {
  firstName: 'sohail',
  year: 2002,

  // It is from normal functions, 'this' keyword works properly
  calcAge: function(birthYear) {
    console.log(this)
    console.log(2024 - this.year)
  },

  // here I am creating method in a object via arrow function and try to access firstName with 'this' keyword 
  greet: () => {
    console.log(`Hey, ${this.firstName}`)
  }
}

sohail.calcAge() // 22
sohail.greet() // Hey, undefined
// Undefined because this is not code block, and all are in global.. and pointing to the global there is no firstName declared, that's why it returns 

console.log(this) // window object
console.log(this.firstName) // undefined



/* Hence, we should never ever use  an arrow function as a method, always use normal function expression*/

// ---------------------------- TRYING WITH NORMAL FUNCTION SAME EXAMPLE
const sohail2 = {
  firstName: 'sohail',
  greet: function () {
    console.log(`Hey, My name is ${this.firstName}`) // this will take firstName property from sohail2 object
  }
}
sohail2.greet() // this will print : Hey, My name is sohail
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

