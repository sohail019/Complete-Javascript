// Error handling

// success = true ya false dekar error handle kr skte hai
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

// function getData(){
//     try{
//         console.log("Fetching data.....");
//         const data = fetchData()
//         console.log(data);
//     } catch(error){
//         console.log("Error: ", error);
//     }
// }


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