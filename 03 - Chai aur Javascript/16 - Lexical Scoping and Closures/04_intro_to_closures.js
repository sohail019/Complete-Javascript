// Closures

// Simple Closure

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