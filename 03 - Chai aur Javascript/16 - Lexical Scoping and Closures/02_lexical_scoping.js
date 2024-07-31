const globalVar = "I am Global"

function outer(){
    const outerVar = "I am Outer"


    function inner(){
        const innerVar = "I am Inner"

        console.log(globalVar); // I am Global
        console.log(outerVar); // I am Outer
        console.log(innerVar); // I am Inner
    }

    inner()
}

outer()

//  In this eg, inner function can access globalVar and outerVar because they are within it's lexical scope.
// Inner function inherit the scope of the parent function where they are defined.