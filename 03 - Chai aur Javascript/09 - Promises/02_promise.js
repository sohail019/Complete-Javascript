let myPromiseOne = new Promise(function(resolve, reject){

    let isSuccessful = true

    if(isSuccessful){
        console.log("Promise Fulfilled")
    } else{
        console.log("Promise Rejected")
    }
})  

myPromiseOne.then((message) => {
    console.log(message) // .then() Ye method resolve hone par call hota hai aur result ko handle karta hai.
}).catch((err) => {
    console.log(err) // .catch(): Ye method reject hone par call hota hai aur error ko handle karta hai.
})


// -------------------------------------------------------------

// Promise Chaining
function step1(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Step 1 Complete")
            resolve("Data from Step 1")
        }, 1000)
    }) 
}

function step2(data){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Step 2 Complete", data)
            resolve("Data from Step 2")
        }, 1000)
    }) 
}

function step3(data){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Step 3 Complete", data)
            resolve("Data from Step 3")
        }, 1000)
    }) 
}


step1()
    .then((result1) => step2(result1))
    .then((result2) => step3(result2))
    .then((result3) => {
        console.log("All steps complete with", result3)
    })
    .catch((error) => {
        console.log("An Error Occured: ", error)
    })

// Explaination
// Har step mke baad promise ka result agle step ko pass kiya jaata hai
// chain mein koi bhi promise fail hone par 'catch()' block ko execute kiya jaata h