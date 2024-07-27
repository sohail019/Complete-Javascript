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