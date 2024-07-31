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

