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