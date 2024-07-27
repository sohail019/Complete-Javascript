// // Fetch Basic Syntax

// fetch(url, option)
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error("Error:", error)); // Handle Errors


// Simple GET Request

// fetch() function ko Url pass krke data fetch karna hai
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if(!response.ok) { 
            throw new Error('Network response was not ok')
        }
        //  response ko JSON mein convert karte hai
        return response.json() // Parse JSON
    })
    .then(data => {
        console.log(data) // Handle data
    })
    .catch(error => {
        // Error handle
        console.error("Error: ", error);
    })

