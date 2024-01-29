// singleton -> Objects from Constructor

const { log } = require("console")

/* Objects Theory 
--> Property = Key + Value
    -> Collections of Properties
--> Key-Value Pairs 
    -> username:------------> 'scookiehail'
    -> age:-----------------> 21
    -> msg:-----------------> 'Hello World'
--> Rather than accessing data using an index, we use custom keys
--> Syntax :
    -> 1) Object Literal --> const obj = {}
    -> 1) Object Constructor --> const obj = new Object()
--> Example : Dictionary is an Object
    -> clever: brilliant clear
    -> fantod: emotional outburst
*/


/* All Types Welcome in Object*/
let comment = {
  username: 'scookiehail',
  upVotes: 78,
  downVotes: 10,
  totalVotes: 88,
  commentText: 'Nice Photo',
  tags: ['#hilarious', '#funny', '#comedy'],
  isLoggedIn: true
}

console.log(comment)
// NOTE - Valid Keys? --> All Keys are converted to Strings, Except Symbol


/* Accessing Data */

const colorPallete = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#ED4B4D'
}

// 1 -  Dot Notation
console.log(colorPallete.red) // #ED4B4D -> Works
// console.log(colorPallete.'red') // Won't Work-> Error Unexpected Strings


// 2 - Bracket Notation
// console.log(colorPallete[black]) // Won't Work -> Error Not Defined
console.log(colorPallete['black']) // #000000 -> Works


/* Updating & Adding Properties */

const instaUser = {
  username: 'scookiehail',
  age: 21,
  isLoggedIn: true,
  totalFollowers: 40
}
console.log(instaUser) // original object display

// Updating Properties
console.log(instaUser.isLoggedIn) // original object value display
instaUser.isLoggedIn = false // updating value from object
console.log(instaUser.isLoggedIn) // changed original object value
console.log(instaUser) // display changed object

// NOTE -> Objects are non primitive and it is stored in Heap Memory, that's why updating the value will change the original reference and object

// Adding a new property in existing object
instaUser.requestCount = 45 // Added new property
console.log(instaUser) // requestCount will be in last index


/*  Arrays + Objects */

// Objects in Arrays
const shoppingCart = [
  {
    product: 'Samsung Galaxy S24 Ultra',
    price: 129000,
    color: 'Titanium Blue'
  },
  {
    product: 'Apple Iphone 15 Pro Max',
    price: 149000,
    color: 'Black Titanium'
  },
  {
    product: 'Oppo Reno 11 Pro',
    price: 39999,
    color: 'Pearl White'
  }
]

// Arrays and Nested Objects in Objects

const student = {
  firstName: 'sohail',
  lastName: 'shaikh',
  hobbies: ['coding', 'reading', 'writing'],
  exams: {
    sem1: 80,
    sem2: 90,
    sem3: 56,
    sem4: 98,
    sem5: 90,
    sem6: 88
  },
  dob: {
    date: 28,
    month: 'September',
    year: 2002
  }
}

console.log(student.firstName) // sohail
console.log(student.lastName) // shaikh
console.log(student.hobbies[0]) // coding 
console.log(student.exams) // exams ka object dega 
console.log(student.exams.sem1) // 80 

