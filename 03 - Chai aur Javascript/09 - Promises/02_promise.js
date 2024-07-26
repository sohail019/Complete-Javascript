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