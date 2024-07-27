// multiple asynchronous operation

function fetchDataOne(){
    return new Promise( (resolve) => {

        setTimeout(() => {
            resolve("Data from API 1");
        }, 3000);
    } )
}

function fetchDataTwo(){
    return new Promise( (resolve) => {

        setTimeout(() => {
            resolve("Data from API 2");     
        }, 2000);
    })
}

async function getData(){
    try{
        console.log("Fetching Data from API 1......")
        const data1 = await fetchDataOne()
        console.log(data1);

        console.log("Fetching Data from API 2......")
        const data2 = await fetchDataTwo()
        console.log(data2);
    } catch(error){
        console.log("An Error Occured: ", error)
    }
}

getData()

// Explanation
// Sequential Execution: fetchData1 aur fetchData2 dono ko sequentially execute kiya gaya hai. Pehle fetchData1 ka result aayega, phir fetchData2 ka result aayega.
// Logging: Console pe pehle "Fetching data from API 1..." aur uske baad "Fetching data from API 2..." print hota hai, phir respective data print hota hai.