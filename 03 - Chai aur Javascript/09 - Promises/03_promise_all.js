// Promise.all

let promiseOne = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log('Promise 1 Completed');
        resolve("Data from Promise 1")

    }, 1000)
})

let promiseTwo = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 Completed")
        resolve("Data from Promise 2")
    }, 2000);
} )

let promiseThree = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 3 Completed");
        resolve("Data from Promise 3")
    }, 3000);
})

// Promise.all ek array return karta hai jo saare promises ke result ko contain karta hai
Promise.all([promiseOne, promiseTwo, promiseThree])
    .then( (results) => console.log("All Promises Resolved: ", results))
    .catch( (err) => console.log("An Error Occured: ", err))