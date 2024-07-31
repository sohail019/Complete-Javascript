// Closure in Loops

// Incorrect behavior
var funcs = []
for(var i = 0; i < 3; i++){
    funcs[i] = function(){
        console.log(i);
    }
}

funcs[0]() // 3
funcs[1]() // 3
funcs[2]() // 3


// Corrected with let

for(let i = 0; i < 3; i++){
    funcs[i] = function(){
        console.log(i);
    }
}

funcs[0]() // 0
funcs[1]() // 1
funcs[2]() // 2