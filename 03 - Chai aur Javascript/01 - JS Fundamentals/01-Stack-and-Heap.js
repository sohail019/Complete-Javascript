//  Stack (Primitives Data Types) and Heap (Non Primitive DT)


/* STACK */

// First in First Out Concept hai! // JavaScript uses the stack data structure to store static or fixed-size data. This includes all numbers, strings, booleans, and other primitive data types

let animalName = 'Genie'
let animalType = 'Cat'
let age = 45
let color = 'white'

// Now in above, all the variables are allocated in stack memory one by one
// The last variable pushed is at the top, which means it will be the first to get removed when the memory gets deallocated.


// Example of stack

let myName = 'sohail' // myName -> initialize value sohail
console.log(myName)  // sohail 

let fullName = myName // declare another variable named fullName and giving it value same as myName
console.log(fullName) // still sohail because 'myName = sohail' so, 'fullName = sohail' also

fullName = 'sohail shaikh' // now changing value to sohail shaikh

console.log(fullName) // it will display sohail shaikh on console

console.log(myName) // but if we call this variable, it's still sohail

// NOTE - Yes, that's what Stack and ham ne copy ko change kiye, original value waisi hi rahegi!! 


/* HEAP  */

//  Theory - Dynamic Data JS ka kahan store hoga? Heap Mein!
// Heap Memory stack ke tarah nahi hai, Memory dynamically allocate hogi, JS wo data ko heap mein store karegi jiski size pata nahi hai ya usko jo change ho sakti hai runtime ke time jaise OBJECTS, ARRAYS and FUNCTIONS, ETC
// 


// Heap Example

let animalOne = {
  name : 'Genie',
  age: 6,
  color: 'white',
  type: 'Cat'
}

console.log(animalOne) // object isme display hoga

let animalTwo = animalOne //new variable banaenge or previos object value rakhenge 
console.log(animalTwo)

animalTwo.name = 'Minie' // jab ham animal two object ke value ko change krenge to upar ka bhi reference orginal value change hojaegi
console.log(animalTwo) // Animal two mein name minie aaega 
console.log(animalOne) // Animal One Ka bhi Change hojaega

// NOTE : Reference ek hi hoga to value change hojaegi
// NOTE : You can see that changing the name property of the animalTwo object will also change the name property of the animalOne object. This happens because while assigning the value of animalOne into animalTwo, we are actually copying the reference and not the actual object. Therefore, both animalOne and animalTwo point to the same object in the. As both point to the same object, changing one changes the other.

