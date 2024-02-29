const clock = document.querySelector('#clock')


// setInterval(function(){}, milliseconds) // setInterval()
/*
Explanation of setInterval:
- setInterval is a built-in JavaScript function that repeatedly calls a function or executes a code snippet at a specified time interval.
- The first argument is the function to be executed.
- The second argument is the time in milliseconds after which the function should be called.
*/

let date = new Date().toLocaleTimeString();

setInterval(function(){
  let date = new Date().toLocaleTimeString();

  clock.innerHTML = date
}, 1000)

