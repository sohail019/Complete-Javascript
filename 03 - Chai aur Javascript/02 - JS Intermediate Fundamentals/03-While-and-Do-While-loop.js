/* While Loops
  -> While loops continue running as long as the test condition is true
  -> Syntax
       initialization
       while(condition){
        // write code
        increment
       }
*/

// Simple Example
console.log('***********Simple While Loop*************')
let startIndex = 1
while(startIndex <= 20) {
  console.log(`Value of index is ${startIndex}`)
  startIndex = startIndex + 2
}

// While Loop over an Array
console.log('***********While Loop Over an Array*************')
let animals = ['tiger', 'lion', 'elephant', 'monkey', 'zebra']

let arrIndex = 0
while( arrIndex < animals.length) {
  console.log('Animal in Array: ', animals[arrIndex])
  // arrIndex++
  arrIndex = arrIndex + 1
}


// Example -> A Common Pattern
console.log('*******Guess Number************')
let targetNum = Math.floor(Math.random() * 10)
let guessNum = Math.floor(Math.random() * 10)

while(guessNum !== targetNum){
  console.log(`Guessed ${guessNum}......Incorrect`)
  guessNum = Math.floor(Math.random() * 10)
  
}
console.log(`CORRECT!! Guessed : ${guessNum} & target was : ${targetNum}`)


// break keyword use in above example
console.log('*******Guess Number with break keyword************')

let target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while(true) {
  guess = Math.floor(Math.random() * 10)

  if(guess === target) {
    console.log(`CORRECT!! Guessed : ${guessNum} & target was : ${targetNum}`)
    break
  } else {
    console.log(`Guessed ${guessNum}......Incorrect`)
  }
}


/* Do While 
  -> First Run, Then Check Condition
  -> Syntax
      do {
      
      } while(condition)
*/

console.log('**********Do While*************')
let score = 1

do {
  console.log('Value of Score is: ', score)
  score++
} while(score <= 10)


// What if score = 11 in start
console.log('******* What if score = 11 in start')
score = 11
do{
  console.log(`Value of score is: `, score) // ye ek baar to print hoga hi
  score ++
} while(score <= 10)