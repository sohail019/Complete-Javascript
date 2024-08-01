# Modules

## What are Modules?
- Modules are self-contained units of code that exports specific parts of their functionality so that they can be used in other parts of a program.
- JS Modules are used to encapsulate code, preventing global namespace pollution and making it easier to manage dependencies.

## Types of Modules:

### 1. CommonJS Modules: 
Used primarily in Node.js environment

### 2. ES Modules (ECMAScript Modules):
The standard for JavaScript on the web, supported by modern browsers.

## ES Modules (ESM):
- ES Modules are the standard way to handle modules in JavaScript, especially for front-end development.
- They use `import` and `export` statements.

### Basic Syntax:
**1. Exporting from a Module:**\
We can export variables, functions or classes from a module so they can be used in other modules.

*math.js*
```javascript
// Export variable
export const pi = 3.14159

// Export Function
export function add(a, b){
  return a + b
}

// Export Class
export class Calculator{
  multiply(x, y){
    return x * y
  }
}
```

**2. Importing into a Module:**\
We can import the exported entities into another module using `import` statement.

*script.js*
```javascript
// Main file

import {pi, add, Calculator} from './math.js'

console.log("Pi: ", pi) // Pi: 3.14159

console.log("Addition is ", add(2,4)) // Addition is 6 


const cal = new Calculator()
console.log(`Multiply: ${cal.multiply(12, 5)}`) // Multiply: 60
```

### Default Exports
- A module can have a default export, which is a single value exported from the module.
- This is useful when you want to export a single primary function or class.

**1. Exporting a Default**

*greet.js*
```javascript
export default function greet(name) {
  return `Hello ${name}`
}
```

**2. Importing a Default**

*script.js*
```javascript
import greet from './greet.js'

console.log(greet('Sohail')) // Hello Sohail
console.log(greet('Salman')) // Hello Salman
```

### Named Exports vs Default Exports

**Named Exports:** Allows exporting multiple values. We can import them using their exact names.

**Default Exports:** Allows exporting single value. We can import it with any name.

## Advanced Concepts

### Re-Exporting
We can re-export items from another module without importing them into current module.

*math.js*
```javascript
export function subtract(a, b){
  return a - b
}
```

*utilities.js*
```javascript
export {subtract} from './math.js'
```

*script.js*
```javascript
import {subtract} from './utilities.js'

console.log(subtract(10, 2)) // 8
```

### Dynamic Imports
Dynamic imports allow us to load modules dynamically at runtime, which can be useful for code splitting and reducing initial load times.

*script.js*
```javascript
async function loadModule(){
  const module = await import('./math.js')

  console.log(`From Dynamic Import: ${module.add(10, 20)}`) // Output: 30
}

loadModule()
```

### Modules in HTML
To use modules in the browser, include the type="module" attribute in the `<script>` tag.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modules Example</title>
</head>
<body>
    <script type="module" src="script.js"></script>
</body>
</html>
```
## Module Loading and Executing

### 1. Module Caching
- When a module is imported, it is executed only once.
- Subsequent imports of the same module returned the cached version, meaning the code inside the module won't run again.

*counter.js*
```javascript
let count = 0;
console.log('Module loaded');

export function increment() {
    count++;
    return count;
}
```

*script.js*
```javascript
import { increment } from './counter.js'
console.log(increment()); // Logs: Module Loaded
console.log(increment()); // No additional log
```

### 2. Top-Level `this` in Modules:
- In ES Modules, the top level `this` is `undefined`.
- This is different from scripts where the top-level `this` refers to the global object.

```javascript
console.log(this) // Output: undefined
```

## Circular Dependencies
- Circular Dependencies occur when two or more modules depend on each other, either directly or indirectly.
- JS handles CD gracefully by using partial module loading.

### Handling Circular Dependencies

*circular_dependencies_a.js*
```javascript
import {bFunction} from './circular_dependencies_b'
export function aFunction(){
  console.log('aFunction');
  bFunction()
}

aFunction()
```

*circular_dependencies_b.js*
```javascript
import {aFunction} from './circular_dependencies_a'
export function bFunction(){
  console.log('bFunction')
  aFunction()
}
```
In this example, `circular_dependencies_a.js` imports `bFunction` from `circular_dependencies_b.js` and vice versa, JS resolves this by loading modules partially, so the code will not break, but caution should be used to avoid unexpected behavior.

## Module Design Patterns

### 1. Facade Pattern
This pattern provides a simplified interface to larger body of code, making it easier to interact with complex subsystems.

*mathUtil.js*
```javascript
import {add, subtract} from './mathOperations.js'

export default{
  add,
  subtract
}
```

*script.js*
```javascript
import MathUtils from './mathUtil.js'
console.log(MathUtils.add(2,3)) // 5
```

### 2. Singleton Pattern
Ensure that a class has only one instance and provides a global point of access to it.

*logger.js*
```javascript
class Logger{
  constructor(){
    if(Logger.instance){
      return Logger.instance
    }

    Logger.instance = this
  }

  log(message){
    console.log(message)
  }
}

export default new Logger();
```
*script.js*
```javascript
import logger from './logger.js'
logger.log('Hello Sohail') // Hello Sohail
```

## Best Practice for Using Modules

### 1. Use Named Exports for Multiple Exports
When a module exports multiple values, prefer named exports for clarity and flexibility.
```javascript
// file: shapes.js
export function circleArea(radius) {
    return Math.PI * radius * radius;
}

export function squareArea(side) {
    return side * side;
}
```

### 2. Use Default Exports for Single Main Functionality
If a module is designed to export a single primary function or class, use default export.

```javascript
export default class Calculator {
    // Class implementation
}
```

### 3. Organize Module Files Logically
Group related modules together and use directory structures to reflect the relationship between modules.
```text
/project
├── /utils
│   ├── math.js
│   └── string.js
├── /components
│   ├── header.js
│   └── footer.js
└── main.js
```  

### 4. Avoid Side Effects in Modules
Modules should not modify global state or have side effects during import. This makes them more predictable and easier to manage.

### 5. Use Linting Tools
Tools like ESLint can help ensure consistent module import/export practices across your codebase.
