# Fetch API
- Fetch API ek modern method hai jo HTTP Request bhejne ke liye use hota hai.
- Ye **'XMLHTTPRequest'** ke comparison mein readble aur powerful hai.
- Fetch API promises return karta hai aur asynchronous operations ko handle karta hai.

## Introduction
- **Fetch API** Web APIs ka part hai jo HTTP Request ko bhejne ke liye use hota hai.
- **fetch()** function ko use karke ham network requests kar sakte hai.

### Basic Syntax
```javascript
fetch(url, option)
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => console.log(data)) // Handle the data
    .catch(error => console.error("Error:", error)); // Handle Errors
```

### Simple GET Request
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if(!response.ok) { 
            throw new Error('Network response was not ok')
        }
        return response.json() // Parse JSON
    })
    .then(data => {
        console.log(data) // Handle data
    })
    .catch(error => {
        console.error("Error: ", error);
    })
```

### POST Request with Headers

- **'method'** : HTTP method specify karta hai (GET, POST, PUT, DELETE, etc)
- **'headers'**: Request header specify karta hai.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    // headers object mein Content Type ko specify karke bataya jaraha hai ke body JSON format mein hai
    headers: {
        "Content-Type": 'application/json' // Request headers
    },
    // body mein request data ko JSON.stringify() se convert kiya jaata hai
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
```

### Handling Response
**Response Object Properties**
- *response.ok* - Check karta hai ke response successful tha ya nahi
- *response.status* - HTTP status code fetch karta hai
- *response.text()* - Response ko text format mein convert karta hai

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(url)
    .then(response => {
        if(response.ok){ // Check karta hai ke response successful tha ya nahi
            return response.json()
        } else{
            // response.status HTTP status code fetch karta hai
            throw new Error(`HTTP Error! status: ${response.status}`) 
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error))
```

### Advanced Fetch Features
**Abort Request** \
*AbortController* : Fetch requests ko cancel karne ke liye use hota hai.

```javascript
const controller = new AbortController()

const signal = controller.signal

fetch('https://jsonplaceholder.typicode.com/posts', {signal})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === "AbortError") {
            console.log("Fetch Request was aborted");
        } else {
            console.log("Error", error);
        }
    })

// Abort the Request
controller.abort()
```

### Combining Fetch with Async/Await
Async/await ko fetch ke sath use karke code ko zyada readable aur synchronous bana sakte hai

```javascript
async function fetchData(){

    try{
        const url = 'https://jsonplaceholder.typicode.com/posts'

        const response = await fetch(url)

        if(!response.ok){
            throw new Error("Network response was not ok")
        }

        const data = await response.json()
        console.log(data[0]);
    } catch(error){
        console.error("Error: ", error);
    }
}

fetchData()
```

## Handling Different Response Types
- Fetch API se hamein alag alag types ki response mil sakti hai jaise JSON, text, Blob, Form Data, etc.
- Ham inhein handle karne ke methods use kar sake hai

### Fetching JSON data
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log("JSON Data:", data))
    .catch(error => console.error("Error: ", error))
```

### Fetching Text data
```javascript
fetch('https://api.github.com/users/sohail019')
    .then(response => response.text())
    .then(data => console.log("Text Data: ", data))
    .catch(error => console.error("Error: ", error))
```

### Fetching Blob(image) data
```javascript
const imageUrl = 'https://avatars.githubusercontent.com/u/69633245?v=4'

fetch(imageUrl)
    .then(response => response.blob()) // Parse blob response
    .then(data => {
        const fetchBtn = document.querySelector("#fetchImg")

        fetchBtn.addEventListener('click', function(){
                const image = document.createElement('img')
                image.src = URL.createObjectURL(data) // Display image
                image.style.width = "20%"
                document.body.appendChild(image)

        })
    })
    .catch(error => console.error("Error:", error))
```
### Fetching Form data
```javascript
const formData = new FormData();
formData.append('key', 'value');

fetch('https://example.com/submit', {
    method: 'POST',
    body: formData
})
    .then(response => response.text())
    .then(data => console.log('FormData Response:', data))
    .catch(error => console.error('Error:', error));
```

## Handling CORS (Cross-Origin Resource Sharing)
- CORS (Cross-Origin Resource Sharing) web security feature hai jo ek domain se doosre domain ke resource ko access karne ke liye rules specify karta hai
- **CORS Errors**: Agar server CORS header set nahi karta to client-side pe error aata hai.
- **Server side fix**: Server side pe **"Access-Control-Allow-Origin"** header set karna hota hai jo client side se request ko allow karta hai

```javascript
fetch('https://api.github.com/users/sohail019', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => {
        if(!response.ok){
            throw new Error("Network request was not ok")
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error", error))
```

## Pagination and Infinite Scrolling
Agar hamein large datasets ko fetch karna hai aur paginated data ko handle karna hai, to pagination and infinite scrolling technique use kar sakte hai.

```javascript
async function fetchPaginatedData(page = 1){
    try{
        // Pagination Query Parameters: _page aur _limit query parameters ko use karke pagination handle karte hain.
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        const response = await fetch(url)

        if(!response.ok){
            throw new Error("Network request was not ok")
        }

        const data = await response.json()

        console.log(`Page ${page} Data: `, data);
    } catch(error){
        console.error("Error", error);
    }
}

// Fetching first page
fetchPaginatedData(1)

// fetching second page
fetchPaginatedData(2)
```

## Retry Logic
Agar request fail hojaati hai, to aap retry logic implement kar sakte hai, jo failed request ko automatically retry karta hai.

```javascript
async function fetchWithRetry(url, retries = 3){
    
    // for loop ke saath retry logic implement karte hai
    for(let i = 0; i < retries; i++){
        try{
            const response = await fetch(url)

            if(!response.ok){
                throw new Error("Network request was not ok")
            }

            return await response.json()
        } catch(error){
            // Agar request fail hoti hai, toh specified number of retries ke saath request ko dobara try karte hai.
            if( i === retries - 1){
                throw error //Last retry failed
            }
            console.log(`Retrying...(${i + 1})`)
        }
    }
}

fetchWithRetry('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error))
```