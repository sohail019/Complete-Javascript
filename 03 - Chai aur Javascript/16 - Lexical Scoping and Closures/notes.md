# Lexical Scoping
- Lexical scoping refers to how variable scope is determined by the physical placement of code in the source code.
- In JavaScript, this means that the location where a variable is declared will define it's scope, and thus where it is accessible within the code.

## Basic Concepts
### 1. Scope:
- The area in code where a variable is accessible.
- JavaScript has 5 types of Scopes
    - **1. Global Scope:** 
        - Variables declared outside of any function or block have a global scope.
        - These variables are accesible from anywhere in the code.
        ```javascript
        let globalVar = 'I am Global'

        function checkGlobalScope(){
            console.log(globalVar); // Accessible here
        }

        checkGlobalScope()
        console.log(globalVar); // Accessible here too
        ```
        
    - **2. Function Scope:** 
        - Variables declared within a function using 'var', 'let' and 'const' are local to that function
        - They cannot be accessed outside the function.
        ```javascript
        function checkFunctionScope(){
        let name = "Sohail";
        console.log(name); // Accessible here
        }

        checkFunctionScope();
        console.log(name) // Error: name is not defined
        ```

    - **3. Block Scope:** 
        - Variables declared with 'let' and 'const' within a block (curly braces '{}') are blocked scope.
        - They variables are accessible only within a block in which they are defined.
        ```javascript
        if(true){
            let blockVar = 'I am Blocked Variable'
            console.log(blockVar); // Accesible here
        }

        console.log(blockVar); // Error: blockVar is not defined
        ```

    - **4. Module Scope:** 
        - In JavaScript modueles, variables declared in module are scoped to that module. 
        - They are not added to the global scope.
        ```javascript
        // myModule.js
        const moduleVar = "I am Module-Scoped"

        export default moduleVar;

        // main.js
        const myModule = require('./myModule.js') 
        console.log(myModule); // Works because it's imported
        ```
    - **5. Lexical Scope:** 
        - Not a seperate type of scope, but a rule about how scopes nest and how variables are resolved.
        - Inner functions have access to variables in their outer enclosing functions' scopes.
        ```javascript
        function outer(){
            const outerVar = "I am Outer"

            function inner(){
                console.log(outerVar); // Accesible here due to lexical scoping
            }
            inner()
        }

        outer()
        ```

### 2. Scope Chain
- If a variable is not found in the current scope, javaScript looks for it in the parent scope, and this process continues until it reaches the global scope.
- This heirarchy is called as Scope chain.

```javascript
// Scope Chain

function firstFunction(){
    const firstVar = "I am First"

    function secondFunction(){
        const secondVar = "I am Second"

        function thirdFunction(){
            const thirdVar = "I am Third"

            console.log(firstVar); // I am first
            console.log(secondVar); // I am Second
            console.log(thirdVar); // I am Third
        }
        thirdFunction()
    }
    secondFunction()
}
firstFunction()

// In this example, thirdFunction can access firstVar and secondVar through the scope chain because of lexical scoping.
```

## Example of Lexical Scope
```javascript
const globalVar = "I am Global"

function outer(){
    const outerVar = "I am Outer"


    function inner(){
        const innerVar = "I am Inner"

        console.log(globalVar); // I am Global
        console.log(outerVar); // I am Outer
        console.log(innerVar); // I am Inner
    }

    inner()
}

outer()

//  In this eg, inner function can access globalVar and outerVar because they are within it's lexical scope.
// Inner function inherit the scope of the parent function where they are defined.
```

# Closures
- Closures are fundamental concept in JavaScript to allow functions "to remember" the environment in which they were created, even after that environment has finished executing.
- This means that a function can access variables from its enclosing scope, even if that scope has already completed execution.

## Basic Concepts of Closures

### 1. Function and Lexical Scope.
- In JS, functions form the basis of lexical scope.
- When a function is declared, it captures the scope in which it was created, known it's lexical environment.

### 2. Creating a Closure
- A closure is created when a function is able to remember and access its lexical scope, even when the function is executed outside the scope.

**Example of Basic Closure**
```javascript
function outerFunction(){
    const outerVar = "I am Outside!"

    function innerFunction(){

        console.log(outerVar);
    }

    return innerFunction;
}

const closureFunction = outerFunction()
closureFunction(); // I am outside

// In this example, innerFunction is a closure.
// It captures variable outerVar from it's lexical scope and retains access to it even after outerFunction has finished executing.
```

## Why Closures are Useful

### 1. Data Encapsulation
- Closure allow for data to encapsulated within a function, making it private and innaccesible from the global scope.
```javascript
function createCounter(){

    let count = 0;

    return function(){
        count += 1
        return count
    }
}

const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 1
console.log(counter()) // 3

// In this example, 'count' is encapsulated within the function returned by createCounter, allowing it to maintain state between calls.
```

### 2. Maintaining State
Closures are ideal for functions that need to maintain state across multiple execution without relying on global variables.

### 3. Callback Functions
Closures are frequently used in asynchronous programming, such as when using callbacks, where a function needs to remember its context.

## Advanced Concepts

### 1. Multiple Closures
- Each closure maintain its own independent lexical environment.
- This means that multiple closures created by the same function have their own scope.

```javascript
function createAdder(x){
    return function(y){
        return x + y
    }
}

const addFive = createAdder(5)

const addTen = createAdder(10)

console.log(addFive(2)) // Output: 7

console.log(addTen(7)) // Output: 17
```

```javascript
function fullName(firstName){
    return function(lastName){
        return `${firstName} ${lastName}`
    }
}

const myName = fullName('Sohail')

console.log(myName("Shaikh")); // Sohail Shaikh
```

### 2. Closure in Loops
- Closure can sometimes lead to unexpected behavior, particularly in loops if the loop variable is captured incorrectly.
- Using 'let' helps prevent such issues by creating block-scoped variables.

**Incorrect Behavior**
```javascript
var funcs = []
for(var i = 0; i < 3; i++){
    funcs[i] = function(){
        console.log(i);
    }
}

funcs[0]() // 3
funcs[1]() // 3
funcs[2]() // 3
```

**Corrected Behavior with let**
```javascript
for(let i = 0; i < 3; i++){
    funcs[i] = function(){
        console.log(i);
    }
}

funcs[0]() // 0
funcs[1]() // 1
funcs[2]() // 2
```
### 3. Closure with Asynchronous Code
- Closures are particularly useful when dealing with asynchronous code, such as timers, event listeners or API request.
- They allow you to maintain access to variables even after an asyncrhonous operations complete.

```javascript
function fetchData(url){

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok`)
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(
              "There has been a problem with your fetch operation:",
              error
            );
        })
}

fetchData("https://api.github.com/users/sohail019");
```

### 4. Partial Application and Currying
- Closures enable the creation of partially applied functions, which are functions that fix a few arguments and return a new function. 
- This concept is often used in functional programming.

```javascript
// Partial applications and currying

function multiply(x){
    return function(y){
        return x * y
    }
}


const double = multiply(2)
console.log(double(5)) // 10

const triple = multiply(3)
console.log(triple(5)) // 15

// Here, multiply is curried function that returns a closure, allowing for partial application of the multiple operation.
```

### 5. Preserving States with Closures
- Closures can maintain state across multiple invocations.
- This is particularly useful in web applications where you need to manage user interactions or component states.

```javascript
// Preserving States

function makeToggle(){
    let isOn = false

    return function(){

        isOn = !isOn
        return isOn
    }
}

const toggle = makeToggle();

console.log(toggle()) // true
console.log(toggle()) // false
console.log(toggle()) // true

// The makeToggle function creates a closure that preserves the isOn state across multiple calls, effectively toggling the state each time it is invoked.
```
