// Use JS to create a game of stone, paper, scissors.
// The Game Should ask you to enter stone, paper or scissors.
// The Computer Should be able to randomly generate stone, paper or scissors and declare win or loss using alert.
//  Use confirm and prompt wherever required


let playAgain = true

while(playAgain) {
  const userInput = prompt(`Choose one ( stone, paper or scissor )`)
  const options = ['stone', 'paper', 'scissor']
  const computerInput = options[Math.floor(Math.random() * options.length)]

  if(userInput == 'stone' && computerInput == 'scissor') {
    alert(`Congrats, You Win!!!!!! You Choosed ${userInput} and Computer choosed ${computerInput}!`)
  } else if(userInput === 'paper' && computerInput === 'stone') {
    alert(`Congrats, You Win!!!!!! You Choosed ${userInput} and Computer choosed ${computerInput}!`)
  } else if(userInput === 'scissor' && computerInput === 'paper') {
    alert(`Congrats, You Win!!!!!! You Choosed ${userInput} and Computer choosed ${computerInput}!`)
  } else if(userInput === 'stone' && computerInput === 'paper') {
    alert(`Ooooops :(, You Lose!!!!!! You Choosed ${userInput} and Computer choosed ${computerInput}!`)
  } else if(userInput === 'paper' && computerInput === 'scissor') {
    alert(`Ooooops :(, You Lose!!!!!! You Choosed ${userInput} and Computer choosed ${computerInput}!`)
  } else if(userInput === 'scissor' && computerInput === 'stone') {
    alert(`Ooooops :(, You Lose!!!!!! You Choosed ${userInput} and Computer choosed ${computerInput}!`)
  } else {
    alert('Choose Wisely')
  }
  playAgain = confirm('Do You Want To Play Again?')
}
