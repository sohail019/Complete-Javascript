// Promise.allSettled

// ye method ek array leta hai promises ka aur resolve karta hai jab saare promises settle(resolve ya reject) ho jaate hai
// ye saare promises ke outcomes ko ek array mein return karta hai

let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from promise 1');
    }, 1000);
});

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error from promise 2');
    }, 2000);
});


Promise.allSettled([promiseOne, promiseTwo])
    .then( (results ) => {
        results.forEach( (result) => {
            // status property ya to fulfilled hogi ya rejected
            if(result.status === "fulfilled") {
                // value: Agar promise fulfilled hota hai to ye uski resolved value ko hold krta hai
                console.log("Fullfilled with:" , result.value)
            } else{
                // reason: Agar promise reject hota hai to ye uska error ya rejection reason hold karta hai
                console.log("Rejected with:", result.reason);
            }
        })
    })