// Data Encapsulation with Closures

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