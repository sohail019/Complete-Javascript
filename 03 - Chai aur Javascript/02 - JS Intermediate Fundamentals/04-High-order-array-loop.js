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