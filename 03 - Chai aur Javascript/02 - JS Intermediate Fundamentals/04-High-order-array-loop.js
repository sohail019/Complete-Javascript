/* High Order Array Loops
  -> Array Specific Loop
  -> 
*/

/* For Of Loop */

// ['', '', ''] -> strings in array
// [{}, {}, {}] -> objects in array

/* Ye upar ka bohot hi common scenario hai jab array mein strings ya objects milenge and har iteration mein ham ko object mein se kuch value nikaalni hai, to pehle loop lagaiye, object ke andar dot ya bracket notation se value nikaal sakte h */

const numbers = [1,2,3,4,5,6]

for (const num of numbers){
  console.log(num) // print 1 to 6 in line
}

// Strings par bhi laga sakte hai, object hona zaroori nahi hai
const str = 'Hello'

for (const char of str) {
  console.log(`Each character is ${char}`) // print H e l l o in line
}


// Use continue keyword for space between words
const strWithSpace = 'Sohail Shaikh'
console.log(strWithSpace.length)

console.log('------continue keyword for ignoring space b/w words-------')
for (const char of strWithSpace) {
  if(char === ' '){
    continue
  }
   console.log(`Print By ignoring space is ${char}`) // print SohailShaikh in line
}

// Use break keyword when space occurs
console.log('------break keyword when space occurs-------')
for (const char of strWithSpace){
  if(char === ' '){
    break
  }
  console.log(`Print until space occurs:: ${char}`) // print Sohail in line
}


/* Maps : like arrays but iterations are different 
 Theory -> The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

    -> A key in the Map may only occur once; it is unique in the Map's collection. 

*/
console.log('*********MAPS*************')

const countries = new Map()

countries.set('IN', 'India')
countries.set('PK', 'Pakistan')
countries.set('SL', 'Sri Lanka')

console.log(countries)

// Let's set IN entry again and print
countries.set('IN', 'India')
console.log(countries) // prints same, unique value and order bhi same

// ????????? Loop laga sakte h??????????????/

for (const country of countries) {
  console.log(country)
} // it return all entries in array, but we need iteration about each key as country code and value as country name

for (const [countryCode, countryName] of countries) {
  console.log(`Country Code is ${countryCode} and Country Name is ${countryName}`)
}


/* Let's try for of loop on object */

const myObject = {
  firstName: 'sohail',
  lastName: 'shaikh',
  age: 21
}

// one values only
/* 
for (const value of myObject) {
  console.log(value) // it gives an error of:: TypeError:obj1 is not iterable
}  */

// object destructing into key and value
/* for (const [key, value] of myObject){
  console.log(key, value) // again, it gives an error of:: TypeError:obj1 is not iterable
} */


// Here comes, for in loop

/* FOR IN */
const languages = {
  js: 'Javascript',
  py: 'Python',
  cpp: 'C++',
  rb: 'Ruby'
}
console.log(languages)

// Print key only
for (const key in languages) {
  console.log(`Key:: ${key}`) // works perfectly but print only key(js,py,cpp,rb)
}

// Print value
for(const value in languages) {
  console.log(`Value:: ${languages[value]}`) // print values only (Javascript, Python, C++, Ruby)
}

// Print both key and value together
for(const key in languages) {
  console.log(`Language name is ${languages[key]} and it's extension is ${key}`) 
}


/* Now, let's try for in loop in array */

const programming = ['js', 'py', 'rb', 'cpp', 'java']

for (const key in programming) {
  console.log(`Key:: ${key}`) // it works but it returns index key from an array (0,1,2,3,4)
}

// ? But value kaise nikaale?
for (const value in programming) {
  console.log(`Value:: ${programming[value]}`) // ye print karega value ko
}

// Now let's try for in loop in Map!!!

// const countries = new Map()

// countries.set('IN', 'India')
// countries.set('PK', 'Pakistan')
// countries.set('SL', 'Sri Lanka')

for (const key in countries) {
  console.log(key) // kuch bhi print nahi hoga, error bhi nahi aaega. because map iterable nahi hai 
}


/* NOTE:: Object mein loop lagana rahega to for in loop laga lenge, arrays ke upar lagana rahega to for of loop laga lenge, arrays ke liye or bhi loops hai! but ek interesting hai jo sabse zyaada use hogi, 2 loops hai ek map or ek forEach */

/* forEach Loop Method 
 ---> The forEach() method of Array instances executes a provided function once for each array element.


*/

// NOTE: sabse zyada jo array mein kaam me lenge wo for loop nahi lenge but forEach lenge because ye directly property mein add kar di gayi hai


const animals = ['dog', 'cat', 'monkey', 'elephant', 'cow']


// Higher order function
// callback lagta h jo bolta h function dedo

// animals.forEach( function name() {}) --> Ye Default function declaration hota hai

/* Keypoints to remember for callback function in higher order funcs: 
        --> pehle to callback mein function ka naam nahi hoga
        --> function ke baad parameters () jo dete the kyunki array pe lagaya hai to ye loop itna smart hai ke har values pe iterate hoga
        --> har value ko bolna kya chahte ho? jo mann karey boliye!! (EG: a, item, i, value, etc)
        --> Automatically, har baar ye function execute hoga or har baar is value ko lekar aaega as a parameter apne andar
        
*/

// With function keyword
animals.forEach( function (animal) {
  console.log(`Function Keyword :: ${animal}`)
})

// From Arrow function
animals.forEach( (animal) => {
  console.log(`Arrow Function :: ${animal}`)
})

// Let's make more interesting
function printMe(item) {
  console.log(item)
}
// ek function banae hai printMe or uske andar jo bhi value denge wo print kar dega,  but kya ye function ko pass on kar sakte hai?? bilkul!

// animals.forEach(printMe()) // ye galat tareeqa hai, reference dena execute nahi karna hai!!

animals.forEach(printMe) // works perfect

// Another interesting!!

// NOTE: forEach hamesha item parameter nhi lekar aata h, iske paas or bhi chiz h jo return hoti h.. 3 aate hai (item, index, full array list)

animals.forEach( (item, index, arr) => {
  console.log(item, index, arr)
})

// But, start mein smjha tha ke array hota hai usme kaafi objects hote hai.. ye scenario forEach mein kaafi use hota hai

const myAnimals = [
  {
    animalName: 'dog',
    animalAge: 6
  },
  {
    animalName: 'cat',
    animalAge: 3
  },
  {
    animalName: 'elephant',
    animalAge: 10
  },
  
]

// NOTE: iske upar iteration bohot common operation hai because database se jo value aati hai wo array ke format mein aati hai aur har ek value ek object hi hota hai

myAnimals.forEach( (item) => {
  console.log(item) // objects aaajegi
})

myAnimals.forEach( (item) => {
  console.log(item.animalName) // Animal name print hoga
})

myAnimals.forEach( (item) => {
  console.log(item.animalAge) // Animal Afe print hoga
})