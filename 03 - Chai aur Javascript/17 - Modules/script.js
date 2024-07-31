// Importing modules

import { pi, add, Calculator } from "./math.js";

console.log("Pi: ", pi); // Pi: 3.14159

console.log("Addition is ", add(2, 4)); // Addition is 6

const cal = new Calculator();
console.log(`Multiply: ${cal.multiply(12, 5)}`); // Multiply: 60

// Importing Defaults
import greet from "./greet.js";

console.log(greet("Sohail")); // Hello Sohail
console.log(greet("Salman")); // Hello Salman

// Re Exporting
import { subtract } from "./utilities.js";

console.log(subtract(10, 2)); // 8

// Dynamic Imports
async function loadModule() {
  const module = await import("./math.js");

  console.log(`From Dynamic Import: ${module.add(10, 20)}`); // Output: 30
}

loadModule();

// Module caching
import { increment } from "./counter.js";
console.log(increment()); // Logs: Module Loaded
console.log(increment()); // No additional log

// Facade Pattern
import MathUtils from "./mathUtil.js";
console.log(MathUtils.add(2, 3)); // 5
