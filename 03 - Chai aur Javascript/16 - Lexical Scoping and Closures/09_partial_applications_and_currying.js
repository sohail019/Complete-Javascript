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