// 1. Global Scope

let globalVar = 'I am Global'

function checkGlobalScope(){
    console.log(globalVar); // Accessible here
}

checkGlobalScope()
console.log(globalVar); // Accessible here too


// 2. Function Scope

function checkFunctionScope(){
    let functionVar = "I am Function Variable";
    console.log(functionVar); // Accessible here
}

checkFunctionScope();
// console.log(functionVar) // Error: functionVar is not defined


// 3. Block Scope

if(true){
    let blockVar = 'I am Blocked Variable'
    console.log(blockVar); // Accesible here
}

// console.log(blockVar); // Error: blockVar is not defined

// 4. Module Scope
// const myModule = require('./myModule.js') 
// console.log(myModule); // Works because it's imported

// Lexical Scope

function outer(){
    const outerVar = "I am Outer"

    function inner(){
        console.log(outerVar); // Accesible here due to lexical scoping
    }
    inner()
}

outer()