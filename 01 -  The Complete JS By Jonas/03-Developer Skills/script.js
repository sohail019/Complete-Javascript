// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 32;

if (x === 3) console.log(3);

const calAge = birthYear => 2023 - birthYear;
console.log();

// CODING CHALLENGE

function printForecast(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  const stringPrint = `... ${arr[0]}C in 1 Day, ... ${arr[1]}C in 2 Day, ... ${arr[2]}C in 3 Day`;
  console.log(stringPrint);
}

printForecast([17, 12, 23]);
printForecast([12, 5, -5, 0, 4]);

const data1 = [17, 12, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecastNew(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} Day, ... `;
  }
  console.log('...' + str);
}

printForecastNew(data1);
printForecastNew(data2);
// console.log(printForecastNew(data2));

// ASSIGNMENT

/* Challenge 1: Calculate the Average
Write a function that takes an array of numbers as input and returns the average of those numbers.

Example:
Input: [10, 20, 30, 40, 50]
Output: 30 */

// 1) Understand the problem, ask questions
// - how to calculate average - Answer : sum of numbers / no of numbers
// - how to calculate sum of each number in array

// 2) Break problem into sub problem
// - sum of each number in array
// - divide that sum into no of numbers in array (index)

const arrayForAverageNumber = [10, 20, 30, 40, 50];

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  const averageOfNumber = sum / arr.length;
  return averageOfNumber;
}
console.log(calcAverage(arrayForAverageNumber));

/* Challenge 2: Reverse a String
Write a function that takes a string as input and returns the reverse of that string.

Example:
Input: "hello"
Output: "olleh" */

// 1) Understand the problem, ask questions
// - how to reverse string
// -

// 2) Break problem into sub problem
// - print string in normal form
// -

function reverseString(str) {
  let stri = '';
  for (let i = str.length - 1; i >= 0; i--) {
    stri += str[i];
  }
  return stri;
}

console.log(reverseString('hello'));

/* Challenge 3: Find the Largest Number
Write a function that takes an array of numbers as input and returns the largest number in that array.

Example:
Input: [10, 5, 20, 15, 30]
Output: 30 */

function largestSmallestNumber(arr) {
  let largestNumber = arr[0];
  let smallestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) largestNumber = arr[i];

    if (arr[i] < smallestNumber) smallestNumber = arr[i];
  }
  console.log(largestNumber, smallestNumber);
}
largestSmallestNumber([10, 5, 20, 15, 30, 84, 1, 0, -4]);

/* Challenge 4: Check for Palindrome
Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

Example:
Input: "radar"
Output: true */
// 1) Understand the problem, ask questions
// - what is palindrome - Answer is (reads the same forwards and backwards)
// -

// 2) Break problem into sub problem
// - how to check palindrome
// -

/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */
function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

positiveSum([1, -4, 7, 12]);
