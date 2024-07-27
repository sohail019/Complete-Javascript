// Retry Logic

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