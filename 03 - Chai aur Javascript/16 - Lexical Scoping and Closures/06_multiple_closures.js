// Multiple Closures

function createAdder(x){
    return function(y){
        return x + y
    }
}

const addFive = createAdder(5)

const addTen = createAdder(10)

console.log(addFive(2)) // Output: 7

console.log(addTen(7)) // Output: 17


function fullName(firstName){
    return function(lastName){
        return `${firstName} ${lastName}`
    }
}

const myName = fullName('Sohail')

console.log(myName("Shaikh")); // Sohail Shaikh