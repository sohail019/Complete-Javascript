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
// Undefined because this is not code block, and all are in global.. and pointing to the global there is no firstName declared, that's why it returns undefined