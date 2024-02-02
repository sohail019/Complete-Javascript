/* this keyword 
 -> current context ko refer karta hai
 -> use the keyword 'this' to access other properties on the same object
 -> The value of 'this' depends on the invocation context of the function it is used in.
*/
// Before understanding 'this' keyword, let's rejump on object

const user = {
  username: 'sohail',
  price: 399,

  welcomeMsg: function(){
    // console.log(`Hello ${username}, Welcome to the shop`) // if we use this username directly, it will throw an error of undefined
    console.log(`Hello ${this.username}, Welcome to the shop`) // it will display the username

    // console.log(`Inner Object this context ${this}`)
    console.log(this) // ye inner object ko refer karega, or return krega current context 
    
  }
}

user.welcomeMsg()
user.username = 'salman' // changing value from sohail to salman
user.welcomeMsg() // from now, salman will 

console.log(this) // current context hamara empty hoga -> {} -> because ye node mein hai isliye ye refer kar raha hai empty object return kar raha hai, if ye browser mein hota to window object return karta

// But Why? Aisa browser pe aa kyun raha hai?
// -> Answer : Pehle JS browser mein execute hota tha because engine browser mein hota tha, but abhi alag alag stand alone hai, or jo browser ka global object hai wo window object hai, is liye current context in browser ko Window refer krta hai


/* Now let's try to print this keyword in Function */

function printThis() {
  console.log(this)
}

printThis() // dher saari information return krta hai 

// but what if ham koi variable declare karey function mein then print karey this se

function printValueFromThis() {
  let username = 'scookiehail'
  console.log(this.username) // undefined return karega
}

printValueFromThis() 

// Hence, ye jo this ka context hai wo sirf objects mein hi work kar paaraha hai, function mein use nahi kar paarahe!!!!!!

// Same ye function expression mein bhi work nahi karega


// +++++++++++++++++++++++++++++++++++++++++++++++++


/* Arrow Functions  */

// Basic Syntax () => {}
// Isko Variable mein hold kar sakte hai
// parameters le sakte hai

// Yaha syntax mein function expression ka syntax hoga, function keyword hata denge or equalto ke baad arrow [=>] ye keyword laga denge then scope open

const arrowFunc1 = () => {
  let username = 'sohail'
  console.log(this) // ye return {} karega
}

arrowFunc1()


/* 1st Technique to write Arrow Function (Explicit) */

const addTwo = (num1, num2) => {
  return num1 + num2
}

console.log(addTwo(20,60))
// NOTE : Curly paranthesis mein wrap kara to return keyword ko likhna padega

/* 2nd Technique to write Arrow Function (Implicit) */

const addThree = (num1, num2, num3) => num1 + num2 + num3
const addThreeWithParan = (num1, num2, num3) => (num1 + num2 + num3)

console.log(addThree(20,60, 45))
console.log(addThreeWithParan(120,60, 645))

// What if hamein object return karna hai?
const printObject = () => {username : 'scookiehail'}

console.log(printObject()) // undefined dega

const printObjectWithParan = () => ({username : 'scookiehail'})

console.log(printObjectWithParan()) // value dega