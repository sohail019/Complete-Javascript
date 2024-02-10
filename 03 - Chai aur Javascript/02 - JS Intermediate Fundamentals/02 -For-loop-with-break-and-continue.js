/*  JS Loops 
  -> Repeat Stuff, Repeat Stuff, Repeat Stuff.
  -> Loops allow us to repeat code
      --> Print 'hello' 10 times
      --> Sum all numbers in an array
  -> There are multiple types:
      --> for loop
      --> while loop
      --> for..of loop
      --> for..in loop
*/


/* For Loops */

/* for (initial expression; condition; incremental expression) {
      // wrie some code
} */


// Our first for loop
console.log('****************Our First For Loop****************')
// Starts at 1. stop at 10, add 1 each time
for(let i = 1; i <= 10; i++) {
  console.log(i)
}

// Another Example 
console.log('*********Another : From 50 to 0 (Subtract 10)')
// Starts i at 50, Keep going as long as i>=0, Subtract 10 each iteration 
for(let i = 50; i >= 0; i -= 10) {
  console.log(i)
}

// DO NOT RUN THIS CODE: INFINITE
// for(let i = 20; i>= 0; i++){
//   console.log(import)
// } // BADDDDDDDD!!!


// Looping Over an Array
console.log('******Looping Over an Array*******')

const animals = ['tiger', 'lion', 'elephant', 'zebra', 'monkey']

// to loop over an array, start at index 0, and continue looping to until last index (length - 1) 
for(let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
} 


// Nested Loops
console.log('**********Nested Loops***************')
let str = 'LOL'
for(let i = 0; i <= 4; i++){
  console.log('Outer::', i)
  for(let j = 0; j < str.length; j++){
    console.log('  Inner::', str[j])
  }
}


/* KEYWORDS  */

// break
console.log('**********Break Keyword***************')

// Without Break Keyword
console.log('----------Without break Keyword------------')
for(let i = 1; i <= 20; i++) {
  console.log(i)
}

// with break Keyword
console.log('----------With break Keyword------------')
for(let i = 1; i <= 20; i++) {

  if(i === 7) {
    console.log('7 Detected')
    break
  }
  console.log(i)
}


// Continue
console.log('**********Continue Keyword***************')
for(let i = 1; i <= 20; i++) {

  if(i === 7) {
    console.log('7 Detected')
    continue
  }
  console.log(i)
}

// Ek baar maaf krdeta hai continue keyword... 