function fetchData(){
    return new Promise( (resolve) =>{

        setTimeout(() => {
            console.log("Data Fetched Successfully");
        }, 1000);
    } )
}

// function getData(){
//     console.log("Fetching Data.......")
//     const data = fetchData()
//     console.log(data)
// }

// getData()

// getData() function ko async keyword ke sath define kiya gaya hai
async function getData(){
    console.log("Fetching Data......");
    const data = await fetchData() // fetchData() promise ko resolve hone ka wait karta hai aur jab resolved hojata hai tab data variable mein value hold karta hai
    console.log(data); 
}

getData()