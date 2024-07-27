# Async/Await

## Intro to Async/Await

### Async Functions
- Jab ham kisi function ko **async** keyword ke sath declare karte hai, to wo function ham ko hamesha promise return karta hai.
- Agar function kisi value ko return karta hai to JavaScript us value ko promise se wrap kardeta hai aur wo promise return hota hai

### Await Keyword
- **await** keyword sirf async function ke andar hi use kiya ja sakta hai.
- Ye promise ke resolve hone ka wait karta hai, aur resolve hone par promise ki value ko return karta hai
- Jab tak promise resolve nahi hota, **await** function execution ko pause kardeta hai, bina pura thread block kiye

```javascript
function fetchData(){
    return new Promise( (resolve) =>{

        setTimeout(() => {
            console.log("Data Fetched Successfully");
        }, 1000);
    } )
}

// getData() function ko async keyword ke sath define kiya gaya hai
async function getData(){
    console.log("Fetching Data......");
    const data = await fetchData() // fetchData() promise ko resolve hone ka wait karta hai aur jab resolved hojata hai tab data variable mein value hold karta hai
    console.log(data); 
}

getData()
```

## Error Handling with Async/Await

- Async/await ke sath error handling kaafi straightforward hoti hai, jo try/catch blocks ke sath hoti hai
- Ye synchronous code ke tarah hi work karta hai
```javascript
function fetchData(success = true) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(success){
                resolve("Data Fetched Successfully")
            } else{
                reject("Failed to fetch data")
            }
        }, 2000);
    })
}
async function getData(){
    try{
        console.log("Fetching Data.........")
        const data = await fetchData();
        console.log(data);
    } catch(error){
        console.log("Error:", error);
    }
}

getData()
```

## Multiple Asynchronous Operations
Agar aap ko Multiple asynchronous operations sequentially execute karni hai, to async/await bohot useful hota hai

```javascript
function fetchDataOne(){
    return new Promise( (resolve) => {

        setTimeout(() => {
            resolve("Data from API 1");
        }, 3000);
    } )
}

function fetchDataTwo(){
    return new Promise( (resolve) => {

        setTimeout(() => {
            resolve("Data from API 2");     
        }, 2000);
    })
}

async function getData(){
    try{
        console.log("Fetching Data from API 1......")
        const data1 = await fetchDataOne()
        console.log(data1);

        console.log("Fetching Data from API 2......")
        const data2 = await fetchDataTwo()
        console.log(data2);
    } catch(error){
        console.log("An Error Occured: ", error)
    }
}

getData()

// Explanation
// Sequential Execution: fetchData1 aur fetchData2 dono ko sequentially execute kiya gaya hai. Pehle fetchData1 ka result aayega, phir fetchData2 ka result aayega.
// Logging: Console pe pehle "Fetching data from API 1..." aur uske baad "Fetching data from API 2..." print hota hai, phir respective data print hota hai.
```
## Parallel Execution with Promise.all
Agar aap multiple asynchronous operations ko parallelly execute karna chahte hain, toh **Promise.all** ka use kar sakte hain.

```javascript
// Parallel Execution with Promise.all

function fetchData1(){

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            resolve("Data from API 1")
        }, 1000);
    })
}

function fetchData2(){

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            resolve("Data from API 2")
        }, 2000);
    })
}


async function getData(){

    try{
        console.log("Fetching Data...")

        const data = await Promise.all([fetchData1(), fetchData2()])
        console.log(data); 
    } catch(error){
        console.log("An Error Occured: ", error);
    }
}

getData()
```

## Async/Await with External Libraries
- Aksar hamein external libraries ka use karna padhta hai jo promises return karti hai.
- Ham async/await ko in libraries ke sath bhi use kar sakte hai.
- For example: Agar ham kisi HTTP client library jaise Axios ka use kar rahe hai

```bash
npm install axios
```

```javascript
const axios = require("axios")

async function getWeather(city){
    try{
        const apiKey = 'b80b64f61a74dcdf5f66ea159f90cfe0'

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        console.log(`Weather in ${city}: ${response.data.weather[0].description}`);

        console.log(`Temperature is ${response.data.main.temp}`);
    } catch(error){
        console.log("Error fetching data: ", error.message);
    }
}

getWeather("Mumbra")
```

