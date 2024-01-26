"use strict";

/* console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Answer!';
document.querySelector('.btn.check').textContent = 'Checked!';

document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 12;

console.log(document.querySelector('.guess').value);

else if (guess >= 1 && guess <= 20) {
    document.querySelector(
      '.message'
    ).textContent = `And the number is ${guess}`;
  } else if (guess > 20 || guess <= 0) {
    document.querySelector('.message').textContent = `You entered ${
      document.querySelector('.guess').value
    }. 
    Enter ${document.querySelector('.between').textContent}`;
  }

*/

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Implementation logic of input
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '😒 No Number!';
    displayMessage("😒 No Number!");

    // When player wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = '😁 Correct Answer!';
    displayMessage("😁 Correct Answer!");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is different
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > number ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '👎 You lost the game';
      displayMessage("👎 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// When guess is too high
// else if (guess > number) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '👎 You lost the game';
//     document.querySelector('.score').textContent = 0;
//   }

// When guess is too low
// } else if (guess < number) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '👎 You lost the game';
//     document.querySelector('.score').textContent = 0;
//   }
// }

// Implementation Reset logic of again button

document.querySelector(".again").addEventListener("click", function () {
  // 2) restore initial value of the score & number variables
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);

  // 3) restore initial condition of the message, number, score, & guess input
  document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  // 4)Restore the original background color and number width
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
