// Handling CORS

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

// Explaination:
// CORS Errors: Agar server CORS header set nahi karta to client-side pe error aata hai.
// Server side fix: Server side pe "Access-Control-Allow-Origin" header set karna hota hai jo client side se request ko allow karta hai
