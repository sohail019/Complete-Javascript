// 1 - Functions 'this' keyword in Object

const person = {
  first: 'Sohail',
  last: 'Shaikh',
  fullName() {
    return `${this.first} ${this.last}`
  }
}
console.log(person)
console.log(person.fullName()) // Sohail Shaikh
person.last = 'Khan'
console.log(person.fullName()) // Sohail Khan

// NOTE --> The Value of 'this' depends on the invocation context of the function it is used in

// Same Function? Different Result?
const newFullName = person.fullName
console.log(newFullName()) // undefined undefined

// Answer --> The Value of 'this' depends on the [INVOCATION CONTEXT] of the function it is used in.


// Copies properties from one object into another object

const obj1 = {
  1: 'a',
  2: 'b'
}

const obj2 = {
  3: 'c',
  4: 'd'
}

// Merging Objects
const objAssignMethod = Object.assign( {}, obj1, obj2)
console.log(objAssignMethod)

// But! But! But! Spread is better

const obj3 = {...obj1, ...obj2}
console.log(obj3)