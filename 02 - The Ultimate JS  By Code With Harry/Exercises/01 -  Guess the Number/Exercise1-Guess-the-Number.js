/* Exercise - Guess the Number

-> Keep Asking for the number until the correct number is guessed
-> Increament the chances variable

-> Eventually after the game is over, display the (100 - number of chances) and the actual number

*/
const prompt = require("prompt-sync")();

let randomNum = Math.random() * 101;
randomNum = Number.parseInt(randomNum)
let score = 100;
let inputNum

const guessTheNumber = () => {

  while(inputNum != randomNum){
    score = score -1
    inputNum = prompt('Enter the Number::');

    if(inputNum == randomNum) {
      console.log(`Congrattttssssssssssss! You Guess correct Number (${randomNum}) in ${100 - score} chances`)
      console.log(`Score is ${score}`)
    } else if (inputNum > randomNum && inputNum < 100){
      console.log(`Your Number is Greater Than Actual Number`)
      console.log(`Score is ${score}`)
    } else if( inputNum < randomNum && inputNum > 0) {
      console.log(`Your Number is Smaller than Actual Number`)
      console.log(`Score is ${score}`)
    } else {
      console.log(`Please Enter Numbers Between (1 to 100)`)
      console.log(`Score is ${score}`)
    }
  }
  
}
console.log(guessTheNumber())