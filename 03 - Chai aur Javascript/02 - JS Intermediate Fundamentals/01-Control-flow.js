// Conditionals -> Making Decisions with Code

/* If Statement */
// Only runs code if given condition is true

let rating = 3;
if(rating === 3) {
  console.log('YOU ARE A SUPERSTAR')
}

/* If Else */
// If not the first thing, maybe this other thing??

rating = 2;

if(rating === 3) {
  console.log('YOU ARE A SUPERSTAR')
} else if(rating === 2) {
  console.log('MEETS EXPECTATIONS') // this works
}

/* ELSE IF */
// We can add multiple else if

rating = 1;

if(rating === 3) {
  console.log('YOU ARE A SUPERSTAR')
} else if(rating === 2) {
  console.log('MEETS EXPECTATIONS')
} else if(rating === 1) {
  console.log('NEED IMPROVEMENT') // this works
}


/* ELSE  */
// If nothing else was true, do this.......
rating = -99

if(rating === 3) {
  console.log('YOU ARE A SUPERSTAR')
} else if(rating === 2) {
  console.log('MEETS EXPECTATIONS')
} else if(rating === 1) {
  console.log('NEED IMPROVEMENT') 
} else {
  console.log('INVALID RATING') // this works
}


/* Nesting */
// We can nest conditionals inside conditionals

let password = 'cat dog'

/*  Below code checks the password string to see if it's longer than 6 characters. If it is, then it checks if the password contains any spaces by using the indexOf method, which returns the position of the first occurrence of a specified value in a string, and if the value is not found, it returns -1. If a space is found, then the code will print 'Password cannot include white spaces' to the console. This code is using nested conditionals, which means that there's an if statement inside another if statement. This allows for more complex conditions to be checked. */
if(password.length > 6) {
  if (password.indexOf(' ') !== -1) {
    console.log('Password cannot include white spaces')
  }
  else {
    console.log('Valid Password')
  }
} else {
  console.log('Password Too Short')
}


/* Switch Cases  */

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


/* Truthy and Falsy Values 
  
  -> All JS values have an inherent truthyness or falsyness about them

  -> falsy values
      --> false
      --> 0
      --> -0
      --> BigInt 0n
      --> '', "" (empty strings)
      --> null
      --> undefined
      --> NaN

  -> truthy values (Everything else is truthy)
      --> "0",
      --> 'false',
      --> ' ',
      --> [],
      --> {},
      --> function(){}
*/

/* Logical Operators  (Combining Expressions) */

// AND -> Both sides must be true, for the entire thing to be true

console.log(1 <= 4 && 'a'  === 'a') // true
console.log(9 > 10 && 9  >= 9) // false
console.log('abc'.length === 3 && 1 + 1  === 4) // false

password = 'taco tuesday'

if(password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('Valid Password')
} else {
  console.log('Invalid Password')
}


// OR -> If one side is true, the entire thing is true

console.log(1 !== 1 || 10 === 10) // true
console.log(10/2 == 5 || null) // true
console.log(0 || undefined) // false

let age = 86;

if(age < 6 || age >= 80) {
  console.log('You get in for free')
} else {
  console.log('Please pay 10$ first')
}


// NOT -> !expression returns true if expression is false

console.log(!null) // true
console.log(! (0 === 0)) // false
console.log(! (3 <= 4)) // false



/* Nullish Coalescing Operator (??): null undefined */

let val1;
console.log(val1); // undefined
val1 = 5 ?? 10
console.log('5 ?? 10 ---->', val1); // 5
val1 = null ?? 10
console.log('null ?? 10 ---->', val1); // 10
val1 = undefined ?? 15
console.log('undefined ?? 15 ---->', val1); // 15
val1 = null ?? 10 ?? 20
console.log('null ?? 10 ?? 20 ---->', val1); // 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")