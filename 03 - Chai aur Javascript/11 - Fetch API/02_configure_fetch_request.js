// Configuring Fetch Request

// Method and Headers

// 'method': HTTP method specify karta hai (GET, POST, PUT, DELETE, etc)
// 'headers': Request header specify karta hai

// POST Request with Headers

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