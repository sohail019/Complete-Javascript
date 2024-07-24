const changeText = function(){
    document.querySelector('h1').innerHTML = "Sohailllllllllll"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log('Stopped')
})




// ---------------------------------------
// Set Interval

const printDate = function(str){
    console.log(str, Date.now())
}

let intervalId
document.querySelector("#start").addEventListener('click', function(){
   intervalId = setInterval(printDate, 1000, "hiii")
})


document.querySelector('#stop1').addEventListener('click', function(){
    clearInterval(intervalId)
    console.log('Stopped')
})




