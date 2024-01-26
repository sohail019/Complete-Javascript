/* Math Properties */


// Syntax - Math.property

// JavaScript provides 8 mathematical constants that can be accessed as Math properties:

// PI
console.log(`PI value: ${Math.PI} `)

// Euler's Number
console.log(`Euler's Number value: ${Math.E} `)

// Natural Logarithm of 10
console.log(`Natural  Logarithm of 10 : ${Math.LN10} `)

// Natural Logarithm of 2
console.log(`Natural Logarithm of 2 : ${Math.LN2}`)

// Base 10 Logarithm of e
console.log(`Base 10 Logarithm of e ${Math.LOG10E}`)

// Base 2 Logarithm of e
console.log(`Base 2 Logarithm of e ${Math.LOG2E}`)

// Square root of 1/2
console.log(`Square root of 1/2: ${Math.SQRT1_2}`)

// Square root of 2
console.log(`Square root of 2: ${Math.SQRT2}`)

/* Math Method */

// Absolute - abs()

const difference = (a, b) => {
  return Math.abs(a - b)
}
console.log(difference(3, 5)) // 2
console.log(difference(5, 3)) // 2

// Cube root of a num
console.log(`Cube root of 64 is ${Math.cbrt(64)}`) // 4
console.log(`Cube root of 1 is ${Math.cbrt(1)}`) // 1
console.log(`Cube root of -1 is ${Math.cbrt(-1)}`) // -1

// Ceil - returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(4.2)) // 5
console.log(Math.ceil(4.5)) // 5
console.log(Math.ceil(4.9)) // 5
console.log(Math.ceil(5.0)) // 5
console.log(Math.ceil(-4.7)) // -4

// Floor - returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.2)) // 4
console.log(Math.floor(4.5)) // 4
console.log(Math.floor(4.9)) // 4
console.log(Math.floor(-4.2)) // -5

// Math.trunc(x) returns the integer part of x: Removes Fractional degit

console.log(Math.trunc(10.2)) // 10
console.log(Math.trunc(10.40)) // 10
console.log(Math.trunc(10.600)) // 10
console.log(Math.trunc(10.8000)) // 10
console.log(Math.trunc(10.90000)) // 10

// Math.sign(x) returns if x is negative, null or positive: returns 1 or -1, indicating the sign of the number passed as argument
console.log(Math.sign(3)) // 1
console.log(Math.sign(-3)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign('3')) // 1
console.log(Math.sign('-3')) // -1
console.log(Math.sign()) // NaN
console.log(Math.sign('string')) // NaN

// Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(2,2)) // 4
console.log(Math.pow(3,3)) // 27
console.log(Math.pow(20, 3)) //  8000
console.log(20**3) // 8000
//Fractional Exponents
console.log(Math.pow(4, 0.5)) //2 (Square root of 4)
console.log(Math.pow(8, 1/3)) //2 (Cube root of 8)

// Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(9)) // 3
console.log(Math.sqrt(4)) // 2

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(20, 54, 70, 1, 54, 98)) // 1
console.log(Math.max(20, 54, 70, 1, 54, 98)) // 98

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
const getRandomNums = (max) => {
  for (let i = 0; i < max; i++){  
    i = Math.floor(Math.random() * max)
  console.log(`Random Num: ${i}`)
  }
}
console.log(getRandomNums(10))


// The Math.round() method rounds a number to the nearest integer.

console.log(Math.round(4.2)) // 4
console.log(Math.round(4.49)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.round(4.51)) // 5
console.log(Math.round(4.7)) // 5