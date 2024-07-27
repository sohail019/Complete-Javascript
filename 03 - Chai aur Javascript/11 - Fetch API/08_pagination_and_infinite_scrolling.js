// Pagination and Infinite Scrolling

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