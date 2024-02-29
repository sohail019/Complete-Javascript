# Projects related to DOM

## Projects Link
[Click Here](https://replit.com/@sohail019/45-Projects-for-DOM)


# Solution Code

## Project 1 - Color Changer

```javascript

const body = document.querySelector('body') // ye body ko select karenge further work ke liye

const buttons = document.querySelectorAll('.button') // yahan saare buttons ko class se select krenge

const h2 = document.querySelector('h2')

buttons.forEach( (button) => {
  console.log(button) // har ek pe loop chalega

  // Event listener
  button.addEventListener('click', function(e) {
    console.log(e) // e-> event hai konsa batata h
    console.log(e.target) // konsa trigger hua target batata h

    const afterClickText = (text) => {
      return `${h2.textContent = `Background Color is ${e.target.id}`}`
    }

    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    } else if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    } else if(e.target.id === 'green') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    } else if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    }
  })
  
})


```

## Project 2 - BMI Calculator

``` javascript

const form = document.querySelector('form')

// const height = document.querySelector('#height').value // don't select here because it gives empty value
// const weight = document.querySelector('#weight').value // don't select here because it gives empty value

form.addEventListener('submit', function(e) {

  e.preventDefault() //  It is JS method that is used to prevent the default behaviour of an event, like here it is used to prevent the form from being submitted in the usual way, which would cause the values to be sent to URL. By using e.preventDefault(), we stop the form from submitting and prevent the page from redirecting to another URL when the form is submitted!

  // Now we want Height and Weight to get selected
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  console.log(height, weight) // works perfect!
  console.log(typeof height, typeof weight) // but the value is in string, so parse it to Integer!

  // if we calculate bmi here, the code can burst, let's do some checks
  // formula to check bmi -> (weight / ((height*height) / 10000)).toFixed(2)

  const results = document.querySelector('#results')

  if (height === '' || height <= 0) { // 2 checks if height is empty or if height is less than equal to 0
    results.innerHTML = `Please give a valid height, ${height}`
  } else if (weight === '' || weight <= 0) { // 2 checks if weight is empty or if weight is less than equal to 0
    results.innerHTML = `Please give a valid weight, ${weight}`
  } else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    // show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is ${bmi}, and you are Underweight</span>`
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI is ${bmi}, and you have Normal Weight</span>`
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi}, and you have Overweight</span>`
    }
  }
})

```

## Project 3  - Digital Clock

```javascript
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

```