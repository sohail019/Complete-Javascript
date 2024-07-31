// Scope Chain

function firstFunction(){
    const firstVar = "I am First"

    function secondFunction(){
        const secondVar = "I am Second"

        function thirdFunction(){
            const thirdVar = "I am Third"

            console.log(firstVar); // I am first
            console.log(secondVar); // I am Second
            console.log(thirdVar); // I am Third
        }
        thirdFunction()
    }
    secondFunction()
}
firstFunction()

// In this example, thirdFunction can access firstVar and secondVar through the scope chain because of lexical scoping.