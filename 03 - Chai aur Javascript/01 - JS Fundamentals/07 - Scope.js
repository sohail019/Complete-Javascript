/* Scope -
  -> VARIABLE "VISIBILITY"
  -> The location where a variable is defined dictates where we have access to that variable
  -> Scope comes under {}
*/

/* Scope Example Variable Difference */

var c = 600
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);

}

console.log(a); // global
// console.log(b); // undefined 
console.log("Var Keyword Global: ", c);  // var keyword


/*  Function Scope */

// Scope Starting Point
function helpMe() {
  let msg = `Please Help Me! I'm on fire..`

  console.log(msg) // Please Help Me! I'm on fire..
}
// Scope End Point
helpMe()

// console.log(msg) // Error -> msg is not defined

// ------------------------------------------------------

// Another Scope Example

let animal = 'lion' // global declaration

function whichAnimal(){

  let animal = 'elephant' // animal is scoped to whichAnimal function
  console.log(animal) // this will print elephant
}

whichAnimal()

console.log(animal)  // this will print lion (global scope)

// ------------------------------------------------------

/* Block Scope  */

let radius = 8;

if (radius > 0) {
  const PI = Math.PI
  let circle = 2 * PI * radius
  console.log(PI, circle)
  // NOTE : PI and circle are scoped to the block of if {}
}

console.log(radius) // 8
// console.log(PI) // undefined
// console.log(circle) // undefined

// ------------------------------------------------------

/* Lexical Scope */


function outer() {
  let marvelHero = 'Spiderman';

  function inner() {
    let cryForHelp = `${marvelHero}, Please Save Me!`
    console.log(cryForHelp)

    function innerTwo() {
      let replyFromHero = `Hey I'm ${marvelHero}, I'm coming`
      console.log(replyFromHero)
    }
    // console.log(replyFromHero) // undefined because it's in innerTwo func
    innerTwo()
  }
  // console.log(cryForHelp) // undefined because it's in inner function
  inner() // this will use cryForHelp and print string
}

outer() // this will use global scope variable marvelHero and call inner() 
// console.log(marvelHero) // undefined because it's in outer function

