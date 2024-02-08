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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* One Final Example of a pitfall of 'this' keyword is when we have function inside of a method*/
console.log('********************************************')
const newSohail = {
  firstName: 'sohail',
  year: 2002,

  calcAge: function(birthYear) {
    console.log(this)
    console.log(2024 - this.year)


    /* Solution 1 */
    console.log('------------With Normal---------------')
    const self = this // self or that
    const isMillenialWithNormal = function () {
      console.log(self)
      console.log(self.year >= 2000 && self.year <= 2010) // it returns true

      // console.log(this.year >= 2000 && this.year <= 2010) // it returns false
    }
    isMillenialWithNormal()

  console.log('------------With Arrow---------------')
    /* Solution 2 */
    const isMillenialWithArrow = () => {
      console.log(this)
      console.log(this.year >= 2000 && this.year <= 2010) // it returns false
    }
    isMillenialWithArrow() // this worked because this arrow function uses the 'this' keyword uses it's parent scope
  },

  greet: () => {
    console.log(`Hey, ${this.firstName}`)
  }
}

newSohail.calcAge()

// console.log(newSohail)

/* arguments Keyword 

  -> We learned that functions also gets access to an 'arguments' keyword, so not just 'this' keyword, but also an arguments keyword.
  -> Just like the 'this' keyword, the arguments keyword is only available in regular functions.
  ->
*/
console.log('+++++++++++++Argument Keyword+++++++++++++++++')
const addExpr = function(a,b) {
  console.log(arguments)
  return a + b
}

addExpr(3,8) // we get an array with 3 and 8, that's exactly two parameters that we passed in. (2 parameters----> 2 arguments)

addExpr(3,8,5,4,7) // this can be useful when we pass more parameters than we actually specified (2 parameters----> more than 2 arguments)


/* But what if we do this in Arrow Function */
const addArrow = (a,b) => {
  // console.log(arguments) // ReferenceError: arguments is not defined
  return a + b 
}

addArrow()

// NOTE - arguments keyword exist, but only exist in regular functions