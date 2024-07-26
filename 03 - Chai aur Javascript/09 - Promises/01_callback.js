// Callback function

function fetchData(callback){
    // Ye asynchronous function hai jo callback ko 1 second baad execute karega
      setTimeout(() => {
        console.log("Data Fetched")
        callback() // callback function ko call karte hai
      }, 1000)
    }
  
    function processData(){
      console.log("Processing Data")
    }
  
  // Callback function "processData" hai wo "fetchData" mein argument ke roop mein diya gaya hai
  fetchData(processData)
  
  
  // Callback Hell
  function step1(callback){
    setTimeout( () => {
      console.log("Step 1 Complete")
      callback()
    }, 1000)
  }
  
  function step2(callback){
    setTimeout( () => {
      console.log("Step 2 Complete")
      callback()
    }, 1000)
  }
  
  function step3(callback){
    setTimeout( () => {
      console.log("Step 3 Complete")
      callback()
    }, 1000)
  }
  
  step1(() => {
    step2(() => {
      step3(() => {
        console.log("All Steps Completed")
      })
    }) 
  })
  
  // Upper Explaination
  // yahan pe, har step ke baad har step ko nested callback ki tarah call kiya gaya hai
  // ye code complex aur hard to read ban gaya hai