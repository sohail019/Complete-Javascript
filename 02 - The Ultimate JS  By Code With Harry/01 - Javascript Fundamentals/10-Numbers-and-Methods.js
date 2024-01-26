const { type } = require("os")

// A number with decimals
const x = 3.144545 

// A number without decimals
const y = 3 
console.log(typeof x, x) // 3.144545 3
console.log(typeof y, y) // 3

// Extra large or extra small numbers can be written with scientific (exponent) notation:

let z = 123e5 
console.log(z) // // 12300000


// Adding Numbers and Strings
let num  = 5
let str = '5'
const add = num + str
console.log(typeof add, add) // string 55


// JS Numbers as Object

const numObject  = new Number(10)
console.log(numObject)


/* NUMBERS METHOD */

// toString()

const count = 10;
console.log(count.toString()); // "10"
let numToString = 40
console.log(numToString.toString()) 
// console.log(typeof numToString)