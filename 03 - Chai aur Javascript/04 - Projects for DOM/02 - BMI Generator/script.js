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

