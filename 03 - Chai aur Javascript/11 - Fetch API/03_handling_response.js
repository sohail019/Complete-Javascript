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
