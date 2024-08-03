// Rest Operator


// Handling Variable Number of Arguments
function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sum(12,34,45,65)) // 156
console.log(sum(1,2,3,4,5,6,7,8,9,10)) // 55
// Here, ...numbers collects all the arguments into an array called numbers.


// Using Rest with other parameters

function multiply(factor, ...nums){
    return nums.map((num) => num * factor)
}

console.log(multiply(2,1,2,3,4,5)) // [2,4,6,8,10]


// Using Rest with Destructing

// Destructing Arrays

const [first, second, ...restArray] = [10,20,30,40,50,60]
console.log(first) // 10
console.log(second) // 20
console.log(restArray) // [30,40,50,60]

// Destructing Objects
const person = {
    name: 'Sohail',
    age: 21,
    dob: "28/09/2002",
    gender: 'Male'
}

const {name, ...restObj} = person;
console.log(name) // Sohail
console.log(restObj) // { age: 21, dob: '28/09/2002', gender: 'Male' }


// Combining Rest with Spread
function mergeArrays(arr1, ...arr2){ // rest
    return [...arr1, ...arr2] // spread
}

const merged = mergeArrays([1,2], 3,4,5)
console.log(merged) //[ 1, 2, 3, 4, 5 ]


// Rest Operator with default parameters:
function greet(message = "Hello", ...names){
    return names.map((name) => `${message}, ${name}`)
}

console.log(greet("Hii", "Sohail", "Salman")) // [ 'Hii, Sohail', 'Hii, Salman' ]

console.log(greet(undefined, "Sharukh", "Salman")) // [ 'Hello, Sharukh', 'Hello, Salman' ]


// Dynamic Functions Arguments

function logALl(...args) {
    args.forEach((arg, index) => {
        console.log(`Argument ${index}:`, arg);
    })
}

logALl(`first`, 42, true, {key: 'value'}, [12,23])
// Argument 0: first
// Argument 1: 42
// Argument 2: true
// Argument 3: { key: 'value' }
// Argument 4: [ 12, 23 ]

// -----------------------------------
// Common Mistakes

// 1. Position of Rest Parameters

// Incorrect: function example(...nums, last){}

// Correct:
function example(first, ...rest){
    console.log(rest)
}

// 2. Shallow Copy in Destructuring

const obj = {
    a: 1,
    b: {
        c: 2
    }
}

const {a, ...rest1} = obj
console.log(obj.b) // 2
rest1.b.c = 20
console.log(obj.b) // 20