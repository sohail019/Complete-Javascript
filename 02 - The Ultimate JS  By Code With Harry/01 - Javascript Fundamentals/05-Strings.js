// Double Quoted String
let name = "sohail";
console.log(name);

// Single Quote String
let msg = "Helllllllllllllo i am sohail";
console.log(msg);

// Template Literals
let item = "cucumber";
let price = 49;
let quantity = 4;

console.log(
  `You bought ${quantity} ${item} and Total Price is $${price * quantity}`,
);

console.log(typeof name, typeof msg);

// Not Working String SYntax
// let bad = "I am Wrong'; // SyntaxError : Invalid or unexpected Token
// console.log(bad)

// String Escapes
console.log("Bana\nna"); // New Line - \n
console.log("It's with Single Quote"); // Single Quote - \'
console.log("It's with Double Quote"); // Single Quote - \"
console.log("Back\\slash"); // Backslash - \\
console.log("asdlkasdaskd\raksdjasdasdhas");
