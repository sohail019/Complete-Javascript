// Spread Operator

//  Using Spread with Array

// Copy Array
console.log("------------Copy Array--------------");
const originalArr = [1,2,3,4]
console.log(`Original Array : ${originalArr}`)
const copiedArr = [...originalArr]

console.log(`Copied Array: ${copiedArr}`)


// Concatenating Arrays:
console.log('------------Concatenating Array--------------')
const arr1 = [12,34,45]
const arr2 = [423,123,34543]
console.log(`Array 1: ${arr1} and Array 2: ${arr2}`)

const concatenatedArr = [...arr1, ...arr2]
console.log(`Conatenated Arr: ${concatenatedArr}`)


// Adding Elements to Array
console.log('-------------Adding Elements to Array-----------')
const naturalNumber = [1,2,3,4,5,6,7,8,9]
console.log(`Natural Number is ${naturalNumber}`)
const wholeNumber = [0, ...naturalNumber, 10]
console.log(`Whole Number is ${wholeNumber}`)


// Spread with Objects

// Copying Object
console.log('----------Copying Object-------------')
const originalObj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(originalObj); // { a: 1, b: 2, c: 3 }
const copiedObj = {...originalObj}
console.log(copiedObj); // { a: 1, b: 2, c: 3 }

// Merging Object
console.log('--------------Merging Object---------------')
const obj1 = {
    a:1,
    b:2
}
const obj2 = {
    b:3, c: 4
}
const mergedObj = {...obj1, ...obj2}
console.log(mergedObj); // { a: 1, b: 3, c: 4 }
// Note: If there are properties with the same name, the last one will overwrite the previous ones.


// Using Spread with Function Calls
console.log('----------Spread with Function calls----------')

function sum(x,y,z){
    return x + y + z
}

const numbers = [12,34,45]
console.log(sum(...numbers)) //91

// Spread in Function Argument
console.log("-------------Spread in Function Argument-------------");
function multiply(multiplier, ...numbers){
    return numbers.map( (number) => number * multiplier)
}

const result = multiply(2,3,4,5)
console.log(result) // [6,8,10]

// Convert String into Array
console.log('-------------Convert String to Array-------------')
const str = "Sohail"
const chars = [...str]
console.log(chars);

// Shallow Copies Issue
console.log('-----------Shallow Copies Issue---------------')
const original = [{a:1, b:12}, {c:21, d:43 }]

const copy = [...original]
console.log(original)
copy[0].a = 67
console.log(original)