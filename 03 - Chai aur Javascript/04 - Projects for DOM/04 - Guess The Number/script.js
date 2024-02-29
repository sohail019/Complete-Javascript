/* // Challenge 1 -> Random Number between 1 to 100 */
let random = (parseInt(Math.random() * 100 + 1))
console.log(random)

/* // Challenge 2 -> Bohot saari values ko document mein lena hai */

// Submit button jispe eventListener lagega
const submit = document.querySelector('#subt')

// User Input Guess field se
const userInput = document.querySelector('#guessField')

// Guess Slot Previous Guesses yahan pe lenge isko bharte jaenge arrays
const guessSlot = document.querySelector('.guesses')

// Remaining guesses 
const remainingSlot = document.querySelector('.lastResult')

// Ek paragraph hai jiska selector lowOrhigh hai jo bataega guess value low hai ya high
const lowOrHigh = document.querySelector('.lowOrHigh')

// Result Paragph.. yahaan pe previous guess and remaining guess dikhaenge but jab over hojaega to hide krdenge then bolenge start over karo
const startOver = document.querySelector('.resultPara')

// Kuch values insert karenge.. to ek p lete h
const p = document.createElement('p')


/* Now strategy.. kya kya chahiye?  */

// Array ek chahiye because jo bhi user submit krega values us value ko ham store krlenge or entire array ko user ko print krdenge.. taaki user same value ko dobara se guess na karey
let prevGuess = []

// Now, user ka kitne attempts hue h wo
let numGuess = 1 // max 10 rkhenge.. jab 10 reach hojaega to submit button ko disable krdenge

let playGame = true // jab bhi is tarah ke game design krenge.. hamesha is tarah ka ek variable hota hai jo allow krta hai game khelne ke liye.. suppose events pure hue, ya coins khatam hue!! is condition ko check karey bagair aage nahi badhta hai!

// Abhi tak hamne cheez collect or prepare kiye.. now code ka logic

if (playGame) { // if true,the code inside will execute
  submit.addEventListener('click', function(e) { // this adds an event listener to the submit button, it listens for click event on the button and will execute whent the button is clicked
    e.preventDefault() // this prevents the default behaviour of form submission which is to relaod the page. It ensures that the form data is not submitted to a server

    const guess = parseInt(userInput.value) // it retrieves the value entered by the user in the input field, convert it to integer and assigns to guess variable
    console.log(guess)
    validateGuess(guess)
  })
}


// Function 1 -> Validate Guess - ek guess do usko validate karega jaise number hona chahiye abc nahi, positiv value deraha hai negative to nahi deraha ya phir game 1 to 100 hai 500 nahi deraha! sab is method mein hoga!

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('It\'s Not a Number, Please Enter a Valid Number')
  } else if (guess < 0) {
    alert('Please Enter a Positive Number')
  } else if (guess < 1 || guess > 100) {
    alert('Please Enter a number Between 1 to 100')
  } else {
    // if guess passes all the validation checks
    prevGuess.push(guess) // It adds the guess to the prevGuess array to keep track of previous guesses.
    if (numGuess >= 10) { // if the max num of guesses(10) is reached
      displayGuess(guess) // displays the current guess
      displayMessage(`Game Over. Random Number Was ${random}`) // Displays game over message
      endGame() // Ends the game
    } else {
      // If the max number of guesses not reached
      displayGuess(guess) // it dislays teh current guess
      checkGuess(guess) // it proceeds to check if the guess is higher, lower and equal to the random number using the next checkGuess function
    }
  }
}

// Function 2 -> checkGuess -> is me check karega ke jo aapka guess hai wo actual number se low hai ya high hai!! equal hai to winner declare
function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You Guess Right Number`)
    endGame()
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too High`);
  }
}

// Function 3 -> Display Guess - values clean karega, array update, remaining update
function displayGuess(guess) {
  userInput.value = '' // This line clears the user input field after the guess is displayed
  guessSlot.innerHTML += `${guess} , ` // It appends the new guess to the existing list of guesses displayed in the guessSlot
  numGuess++; // It increments the number of guesses made by the user
  remainingSlot.innerHTML = `${11 - numGuess}` // It updates the number of remaining guesses by subtracting the currect number of guesses made from a total of 10 guesses allowd. The updated remaining guesses count it then displayed in the remainingSlot
}

// Function 4 -> Display Message - is me guess pass hogi or ye display karega! DOM ke sath interact krega! user ki value empty krenge, innerHTMl me guess add krenge, counter number kam krenge

function displayMessage(message) { // it takes a parameter which represents a msg to be displayed
  lowOrHigh.innerHTML = `<h2>${message}</h2>`  // it sets the innerHTML of an elemenet with the class lowOrHigh to include the message wrapped in an h3 tag, this means that the message will be displayed on the webpage
}

// Function 5 - End Game
function endGame() {
  userInput.value = '' // Sets the value of the userInput field to an empty string
  userInput.setAttribute('disabled', '') // disables the userInput field
  p.classList.add('button') // Adds a class button to an HTML element referenced by the varibale p
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>` // Sets the innerHTMl of the HTML referenced by the variable p to h2
  startOver.appendChild(p) // Appends the HTML element referenced by the var p to the HTMl Element referenced by the var startOver
  playGame = false // set the playGame var to false to indicate the game is over
  newGame() // to initiate a new game
}

// Function 6 - New Game
function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e) {
    random = (parseInt(Math.random() * 100 + 1)) // it generates a new random num b/w 1 to 100 and assigns to random
    prevGuess = [] // it resets the prevGuess array to an empty string
    numGuess = 1 // it resets the numGuess var to 1
    guessSlot.innerHTML = '' // it clears the content of the guessSlot element
    remainingSlot.innerHTML = `${11 - numGuess}` // It updates the content of the remainingSLot element to show the updaed number of remaining guesses
    userInput.removeAttribute('disabled') // It enables the user input field by removing the disabled attribute
    startOver.removeChild(p) // it removes the element referenced by the var p from the startOver element
    playGame = true // it sets the playGame to true, allowing the game to continue
  })
}
