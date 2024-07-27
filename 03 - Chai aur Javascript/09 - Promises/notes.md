# Promises in JS

Promises samjhne se pehle callbacks and callback hells ke concept ko smjhna faydemand hoga, kyunki promises ko banaya hi isiliye gaya tha taaqi callbacks ke limitations aur problems ko address kiya jaa sake

## Callback Functions
Callback ek function hai jo kisi dusre function ke argument mein pass kiya jaata hai, aur wo function jab uska kaam complete karta hai tab callback execute karta hai


```javascript
function fetchData(callback){
  // Ye asynchronous function hai jo callback ko 1 second baad execute karega
    setTimeout(() => {
      console.log("Data Fetched")
      callback() // callback function ko call karte hai
    }, 1000)
  }

  function processData(){
    console.log("Processing Data")
  }

// Callback function "processData" hai wo "fetchData" mein argument ke roop mein diya gaya hai
fetchData(processData)
```

## Callback Hell
Jab multiple asynchronous operations ko nested callbacks se handle kiya jaata hai, tab callback hell ka scenario banta hai, is mein code ka readability and maintainablity difficult hojata hai

```javascript
fetchData(processData)


// Callback Hell
function step1(callback){
  setTimeout( () => {
    console.log("Step 1 Complete")
    callback()
  }, 1000)
}

function step2(callback){
  setTimeout( () => {
    console.log("Step 2 Complete")
    callback()
  }, 1000)
}

function step3(callback){
  setTimeout( () => {
    console.log("Step 3 Complete")
    callback()
  }, 1000)
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All Steps Completed")
    })
  }) 
})
```
<!-- --------------------------------------------------------- -->

## Promises

- Javascript mein **Promise** ek object hai jo future mein kisi asynchronous operation ke result ko present karta hai.
- Promise teen states mein ho sakta hai: 
    - **Pending** : Operation chalraha hai aur abhi complete nahi hua 
    - **Fulfilled** : Operation successful hogaya aur promise ne value return ki. 
    - **Rejected** : Operation fail hogaya aur promise ne error throw kiya

![Alt text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png "Promises")

### Basic Syntax of Promise
```javascript
let myPromise = new Promise(function(resolve, reject){
    // Asynchronous Operation
    if(/*success condition*/){
        resolve("Operation Succesfull");
    } else{
        resolve("Operation Failed")
    }
});
```
<!-- --------------------------------------------------------- -->

## Promise Kaise Kaam Karte Hai?
- Jab bhi ham Promise create karte hai, wo **'resolve'** aur **'reject'** functions ko pass karta hai.
- Agar Asynchronous operation successful hojata hai, to **'resolve'** ko call kiya jaata hai.
- Agar Operation fail hojaata hai, to **'reject'** ko call kiya jaata hai.

```javascript
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
```
### Explanation:
- **resolve()**: Jab asynchronous operation successful hota hai, ye call hota hai.
- **reject()**: Jab asynchronous operation fail hota hai, ye call hota hai.
- **then()**: Ye method successful result ko handle karta hai.
- **catch()**: Ye method error ko handle karta hai.

<!-- --------------------------------------------------------- -->
## Chaining Promises
Promises ko chain karna possible hai, jo complex asynchronous operation ko simple aur structured banata hai

```javascript
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
```

# Promise Methods

## Promise.all
**Promise.all** method ek array leta hai promises ka aur tabhi resolve hota hai jab saare promises resolve hojaate hai, Agar koi ek promise reject hota hai, to Promise.all immediately reject hojaata hai

```javascript
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
```

## Promise.race
**Promise.race** method array leta hai Promises ka aur us promise ke result ko return karta hai jo sabse pehle resolve ya reject hojaata hai.

```javascript
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


Promise.race([promiseOne, promiseTwo])
    .then( (results) => {
        console.log("Fastest Promise resolved with: ", results)
    })
    .catch( (error) => {
        console.log("Fastest Promise Rejected with: ", error);
    })
```

## Promise.allSettled
- **Promise.allSettled** method ek array leta hai promises ka aur resolve karta hai jab saare promises settle(resolve ya reject) ho jaate hai
- ye saare promises ke outcomes ko ek array mein return karta hai

```javascript
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
```