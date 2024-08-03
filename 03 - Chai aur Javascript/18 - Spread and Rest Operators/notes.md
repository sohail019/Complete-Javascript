# Spread Operators
- The spread operator in JS is a powerful feature that allows you to expand iterables like arrays, objects or strings in places where zero or more arguments (for function calls or elements (for array literals) are expected.

## Basics of the Spread Operators:

### What is the Spread Operator:
- The spread operator is represented by three dots (`...`)
- It allows an iterable (such as an array) to be an expanded into individual elements.

### Using Spread with Arrays:

1.  *Copying Arrays:*
    - The spread operator can create a shallow copy of an array.
    ```javascript
    const originalArr = [1,2,3,4]
    console.log(`Original Array : ${originalArr}`)
    const copiedArr = [...originalArr]

    console.log(`Copied Array: ${copiedArr}`)
    ```

2. *Concatenating Arrays:*
    - We can use the spread operator to concatenate arrays.
    ```javascript
    const arr1 = [12,34,45]
    const arr2 = [423,123,34543]
    console.log(`Array 1: ${arr1} and Array 2: ${arr2}`)

    const concatenatedArr = [...arr1, ...arr2]
    console.log(`Conatenated Arr: ${concatenatedArr}`)
    ```

3. Adding Elements to Array
    - Add elements to the beginning or end of the array.
    ```javascript
    const naturalNumber = [1,2,3,4,5,6,7,8,9]
    console.log(`Natural Number is ${naturalNumber}`)
    const wholeNumber = [0, ...naturalNumber, 10]
    console.log(`Whole Number is ${wholeNumber}`)
    ```

### Using Spread with Objects

1. Copying Object
    - Similar to Arrays, we can create a shallow copy of an object using the spread operator.
    ```javascript
    const originalObj = {
    a: 1,
    b: 2,
    c: 3
    }
    console.log(originalObj); // { a: 1, b: 2, c: 3 }
    const copiedObj = {...originalObj}
    console.log(copiedObj); // { a: 1, b: 2, c: 3 }
    ```

2. Merging Object
    -  Combine properties from multiple objects into one.
    ```javascript
    const obj1 = {
    a:1,
    b:2
    }
    const obj2 = {
        b:3, c: 4
    }
    const mergedObj = {...obj1, ...obj2}
    console.log(mergedObj); // { a: 1, b: 3, c: 4 }
    ```
    - NOTE: If there are properties with the same name, the last one will overwrite the previous ones.

### Using Spread with Function Calls
- The spread operator can also be used to pass elements of an array as arguments to a function.
```javascript
function sum(x,y,z){
    return x + y + z
}
const444444 numbers = [12,34,45]
console.log444444(sum4(...numbers)) //91
```

### Spread in Function Arguments
- Combine spread with rest parameters to handle variable numbers of arguments.
```javascript
function multiply(multiplier, ...numbers){
    return numbers.map( (number) => number * multiplier)
}

const result = multiply(2,3,4,5)
console.log(result) // [6,8,10]
```

### Converting Strings to Array
- Convert a string into array of characters.
```javascript
const str = "Sohail"
const chars = [...str]
console.log(chars);
```

### Using spread with NodeLists
- Convert NodeList to an array for easier manipulation
```javascript
const nodeList = document.querySelector('div')
const nodeArray = [...nodeList]
console.log(nodeArray) // Outpu: Array of Div Elements
```

## Common Mistakes

## Shallow Copies Issue
- The spread operator creates a shallow copy, meaning changes to nested objects or arrays affect the original.
```javascript
const original = [{a:1, b:12}, {c:21, d:43 }]

const copy = [...original]
console.log(original)
copy[0].a = 67
console.log(original)
```
*Tip:* For deep copies, consider using libraries like Lodash or manually deep-cloning objects.

# Rest Operator

- The rest operator in JS is a powerful tool that allows us to handle function parameters and array or object elements with ease.
- It's represented by three dots (...)

## Basics of Rest Operator

### What is Rest Operator?
- Rest operator collects multiple elements and condenses them into a single array or object.
- It's used in function parameter or destructing assignments.


## Using Rest with Function Paramters

### Handling Variable Number of Arguments.
- When we don't know how many arguments a function will receieve, use the rest operator to gather them into an array.

```javascript

function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sum(12,34,45,65)) // 156
console.log(sum(1,2,3,4,5,6,7,8,9,10)) // 55

// Here, ...numbers collects all the arguments into an array called numbers.
```

### Using Rest with other parameters
- We can use the rest operator alongside with other parameters, but it must be the last parameters.
```javascript
function multiply(factor, ...nums){
    return nums.map((num) => num * factor)
}

console.log(multiply(2,1,2,3,4,5)) // [2,4,6,8,10]
```

## Using Rest with Destructuring

### Destructuring Arrays
- We can use the rest operator to gather remaining elements into a new array.

```javascript
const [first, second, ...restArray] = [10,20,30,40,50,60]
console.log(first) // 10
console.log(second) // 20
console.log(restArray) // [30,40,50,60]
```

### Destructuring Objects
- The rest operator can also gather remaining properties in an object destructuring.
```javascript
const person = {
    name: 'Sohail',
    age: 21,
    dob: "28/09/2002",
    gender: 'Male'
}

const {name, ...restObj} = person;
console.log(name) // Sohail
console.log(restObj) // { age: 21, dob: '28/09/2002', gender: 'Male' }
```

## Advanced Usage of Rest

### Combining Rest with Spread
- We can use both the rest and spread operators together to efficiently manage arrays or objects.
```javascript
function mergeArrays(arr1, ...arr2){ // rest
    return [...arr1, ...arr2] // spread
}

const merged = mergeArrays([1,2], 3,4,5)
console.log(merged) //[ 1, 2, 3, 4, 5 ]
```

### Rest Operator with Default Parameters
- We can use default values with other parameters, but not with the rest parameter itself.
```javascript
function greet(message = "Hello", ...names){
    return names.map((name) => `${message}, ${name}`)
}

console.log(greet("Hii", "Sohail", "Salman")) // [ 'Hii, Sohail', 'Hii, Salman' ]

console.log(greet(undefined, "Sharukh", "Salman")) // [ 'Hello, Sharukh', 'Hello, Salman' ]
```

### Dynamic Function Arguments
- Using rest parameters allows functions to adapt dynamically to different numbers of arguments.
```javascript
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
```

## Common Mistakes of Rest Parameters

### Position of Rest Parameters
- The rest parameter must always be the last parameter in a function definition.
```javascript
// Incorrect: function example(...nums, last){}

// Correct:
function example(first, ...rest){
    console.log(rest)
}
```

### Shallow Copy in Destructuring
-  When using rest in object destructuring, it creates a shallow copy of the remaining properties.

```javascript
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
```


