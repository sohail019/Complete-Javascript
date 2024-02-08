/* Hoisting Theory -> 
    -> Hoisting makes some types of variables accessible/usable in the code before they are actually declared
    -> Variables lifted to the top of their scope
    -> Behind the scene?-> Before execution; code is scanned for variable declarations, and for each variable a new property is called in the variable environment object
*/


/* Variables */

// Call variables before declaration
console.log(myName) // undefined, because variables declared with var are actually hoisted, but they are hoisted to the value of undefined, therefore, when we try to access them, undefined is result we get

// console.log(className) // ReferenceError : cannot access className before initialization because it's still in TDZ
// console.log(dob) // ReferenceError: cannot access dob before initialization


// Variable Declaration
var myName = 'sohail'
let className = 'iot'
const dob  =  2002


// +++++++++++++++++++++++++++


/* Functions */


// Access Functions Before Declaration
console.log(addDecl(3,4)) // 7, gives value because we can call function declaration before initialization

// console.log(addExpr(6,5)) // ReferenceError: cannot access addExpr before initialization, same as let and const
// console.log(addArrow(6,6)) // ReferenceError: cannot access addArrow before initialization, same as let and const

// console.log(addExprVar(9, 4)) // TypeError: addExprVar is not a function because var returns undefined, and if we pass value to undefined, it will throw error about same

// console.log(addArrowVar(9, 4)) // TypeError: addArrowVar is not a function because var returns undefined, and if we pass value to undefined, it will throw error about same


// Function Declaration
function addDecl(a,b) {
    return a+b
}


// Function Expression
const addExpr = function(a,b) {
    return a + b
}

// Function Expression by var
var addExprVar = function(a,b) {
    return a + b
}


// Arrow Function
const addArrow = (a,b) => a + b

// Arrow Function by var
var addArrowVar = (a,b) => a + b



/* Example which can demonstrate pitfall of hoisting */

console.log(numProducts)
if(!numProducts) deleteShoppingCart() 
var numProducts = 10

function deleteShoppingCart() {
    console.log('All products deleted!') 
}

/* Explaination
    // here check if numproduct is zero, call deleteShoppingCart
    // but it will print All products deleted even though num products is 10!! 
    // Why? because of the hoisting, because the numProducts is not 10, it's undefined, check line above if()

 */

 /* Solutions? 
    -> Just don't use var to declare variables
    -> Use const most of the time, and let if  you really need to change the variable later
    -> Also, in order to write clean code, you should declare variable at the top of each scope
    -> Always declare all your function first and use them only after the declarations
 */


 /* Another Main Difference Between Them */

//  var x = 1
//  let y = 2;
//  const z = 3

//  console.log(x === window.x) // true
//  console.log(y === window.y) // false
//  console.log(z === window.z) // false