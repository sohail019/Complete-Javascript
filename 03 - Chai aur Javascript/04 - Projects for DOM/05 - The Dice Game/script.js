// For Dice 1
const randomNumber1 = parseInt(Math.random() * 6 + 1)
const randomDiceImage1 = `images/dice${randomNumber1}.png`
const image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomDiceImage1)

// For Dice 2
const randomNumber2 = parseInt(Math.random() * 6 + 1)
const randomDiceImage2 = `images/dice${randomNumber2}.png`
const image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomDiceImage2)


const refreshMe = document.querySelector('#refresh')
// Logic for winner declaration
if(randomNumber1 > randomNumber2) {
  refreshMe.innerHTML = 'Player 1 Wins 🏳️'
} else if (randomNumber1 < randomNumber2) {
  refreshMe.innerHTML = '🏳️ Player 2 Wins'
} else {
  refreshMe.innerHTML = 'Tie, Refresh Again🤦‍♂️'
}