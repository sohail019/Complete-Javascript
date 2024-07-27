// Promise.race
// ye method array leta hai Promises ka aur us promise ke result ko return karta hai jo sabse pehle resolve ya reject hojaata hai


let promiseOne = new Promise( (resolve, reject) => {

    setTimeout(() => {
        console.log("Promise 1 Completed")
        resolve("Data from Promise 1")
    }, 2000);
})

let promiseTwo = new Promise( (resolve, reject) => {

    setTimeout(() => {
        console.log("Promise 2 Completed")
        resolve("Data from Promise 2")
    }, 1000);
} )

// Promise.race sabse pehle resolve ya reject hone wale promise ka result return karta hai.
Promise.race([promiseOne, promiseTwo])
    .then( (results) => {
        console.log("Fastest Promise resolved with: ", results)
    })
    .catch( (error) => {
        console.log("Fastest Promise Rejected with: ", error);
    })

// Is example mein, promiseB sabse pehle resolve hota hai, isliye uska result milega.