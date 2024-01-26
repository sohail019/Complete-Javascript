// Use JS to create a game of stone, paper, scissors.
// The Game Should ask Player 1 to enter stone, paper or scissors.
// The Player 2 Should be able to randomly generate stone, paper or scissors and declare win or loss using alert.
//  Use confirm and prompt wherever required


let playAgain = true

while (playAgain) {
  let player1 = prompt(`Player 1 : Choose one (stone, paper, scissor)`)
  let player2 = prompt(`Player 2 : Choose one (stone, paper, scissor) `)

  player1 = player1.toLowerCase()
  player2 = player2.toLowerCase()

  if (player1 === 'stone' && player2 === 'scissor') {
    alert(`Congrats, Player 1 Win!!!!!! Player 1 Choosed ${player1} and Player 2 choosed ${player2}!`)
  } else if (player1 === 'paper' && player2 === 'stone') {
    alert(`Congrats, Player 1 Win!!!!!! Player 1 Choosed ${player1} and Player 2 choosed ${player2}!`)
  } else if (player1 === 'scissor' && player2 === 'paper') {
    alert(`Congrats, Player 1 Win!!!!!! Player 1 Choosed ${player1} and Player 2 choosed ${player2}!`)
  } else if (player1 === 'stone' && player2 === 'paper') {
    alert(`Ooooops :(, Player 1 Lose!!!!!! Player 1 Choosed ${player1} and Player 2 choosed ${player2}!`)
  } else if (player1 === 'paper' && player2 === 'scissor') {
    alert(`Ooooops :(, Player 1 Lose!!!!!! Player 1 Choosed ${player1} and Player 2 choosed ${player2}!`)
  } else if (player1 === 'scissor' && player2 === 'stone') {
    alert(`Ooooops :(, Player 1 Lose!!!!!! Player 1 Choosed ${player1} and Player 2 choosed ${player2}!`)
  } else {
    alert('Choose Wisely')
  }
  playAgain = confirm('Do You Want To Play Again?')
}
