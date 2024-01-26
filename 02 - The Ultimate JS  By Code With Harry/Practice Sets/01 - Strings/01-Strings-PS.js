/* 
1 - Write a function that checks if a string contains the word "apple".
Input: "I have an apple"
Output: true
*/

let string1 = 'I have an apple'
console.log(string1.includes('apple'))

/* 
2 - Write a function that adds an exclamation mark to the end of a string.
Input: "Hello"
Output: "Hello!"

*/
let string2 = 'Hello'
console.log(string2.padEnd(6, '!'))

// 3 - Write a function that repeats a string a certain number of times.
// Input: "abc", 3
// Output: "abcabcabc"

const repeatString = () => {
  let string3 = 'abc';
  console.log(string3.repeat(3))
}

repeatString()

// 4 - Write a function that replaces all occurrences of the word "good" with "excellent" in a given string.

// Input: "The movie is good, but the ending is good too."
// Output: "The movie is excellent, but the ending is excellent too."

const replaceString = () => {
  let string4 = 'The movie is good, but the ending is good too.'
  console.log(string4.replaceAll('good', 'excellent'))
}
replaceString()

// 5 - Write a function that checks if a string starts with the letter "H".

// Input: "Hello"
// Output: true

const stringStartsWith = () => {
  let string5 = 'Hello';
  return string5.startsWith('H')
} 

console.log(stringStartsWith())

// 6 - Write a function that extracts the first three characters from a string.

// Input: "JavaScript"
// Output: "Java"

let string6 = 'Javascript';
const extractThreeChar = () => {
  return string6.slice(0, 4)
}
console.log(extractThreeChar())

