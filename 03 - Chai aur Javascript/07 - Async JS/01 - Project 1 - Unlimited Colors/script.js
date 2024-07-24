// take reference for start and stop buttons

const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const h1 = document.querySelector("h1")

// Logic for random color generate

const randomColor = function(){

    const hex = '0123456789ABCDEF'

    let color = '#'

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color
}

let colorChange;

const startChangingColor = function(){
    
    colorChange = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    }, 2000)
    
   h1.textContent = "Starting to change Color.. Just Wait"

    setTimeout(function(){
        h1.textContent = "Started Changing Color, Click Stop to Stop It"
    }, 2000)
}


const stopChangingColor = function(){
    clearInterval(colorChange)

    h1.textContent = 'Start should change the background color every second'
    document.body.style.background = ''
}


startBtn.addEventListener('click', startChangingColor)


stopBtn.addEventListener('click', stopChangingColor)
     
