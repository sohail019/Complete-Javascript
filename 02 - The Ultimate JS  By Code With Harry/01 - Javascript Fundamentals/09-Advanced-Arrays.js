/*  JS Array Search  */
console.log('********Search Methods***********')
const domesticAnimals = ['cat', 'dog', 'goat', 'ship', 'horse', 'cow', 'buffalo', 'hen', 'rabbit', 'elephant', 'dog', 'cow']
console.log(domesticAnimals, domesticAnimals.length)

// IndexOf
console.log(domesticAnimals.indexOf('cat')) // 0
console.log(domesticAnimals.indexOf('dog')) // 1
console.log(domesticAnimals.indexOf('cow')) // 5
console.log(domesticAnimals.indexOf('sohail')) // -1

// lastIndexOf()
console.log(domesticAnimals.lastIndexOf('elephant')) // 9
console.log(domesticAnimals.lastIndexOf('dog')) // 10
console.log(domesticAnimals.lastIndexOf('cow')) // 11
console.log(domesticAnimals.lastIndexOf('sohail')) // -1

// includes()
console.log(domesticAnimals.includes('dog')) // true
console.log(domesticAnimals.includes('cow')) // true
console.log(domesticAnimals.includes('sohail')) // false
console.log(domesticAnimals.includes(5)) // false

// find()

let num = [1, 2, 3, 4, 5, 6]
const two = num.find(findTwo)

function findTwo(item) {
  return item === 2
}
console.log(two) // 2

const person = [
  {
    name: 'sohail',
    age: 21
  }, {
    name: 'madiha',
    age: 24
  }, {
    name: 'jamil',
    age: 20
  }
]

const sohail = person.find(findSohail)

function findSohail(item) {
  return item.name === 'sohail'
}

console.log(sohail) // {name: 'sohail', age: 21}

// findIndex
const indexOfJamil = person.findIndex(findIndexOfJamil)
function findIndexOfJamil(person) {
  return person.name === 'jamil'
}
console.log(indexOfJamil) // 2

/* Array Sort Methods */
console.log('********Sort Methods***********')
// sort()

const fruits = ['mango', 'apple', 'banana', 'strawberry', 'orange', 'litchi', 'guava', 'pineapple', 'watermelon']
console.log(fruits.sort()) // apple, banana, guava, litchi, mango, orange, pineapple, strawberry, watermelon

const months = ['March', 'Jan', 'Feb', 'April', 'May', 'June', 'July', 'Aug']
console.log(months.sort()) // 'April', 'Aug', 'Feb', 'Jan', 'July', 'June', 'March', 'May'

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function compareNumbers(a,b) {
  return a - b
}
console.log(nums.sort()) // 1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9
console.log(`Before applying Sort Method: ${nums}`)
console.log(nums.sort(compareNumbers)) // 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 
console.log(`After applying Sort Method: ${nums}`) // change the og array

// toSorted() - ES2023
const nums2 = [100, 84, 300, 45, 500, 600, 7000, 80, 900, 5900, 10, 1200]
console.log(`Before applying toSorted Method: ${nums2}`)
const sortedNums = nums2.toSorted(compareNumbers) // returns new array
console.log(`After applying toSorted Method: ${sortedNums}`)


// Reverse()
console.log(`Before applying Reverse Method: ${fruits}`)
console.log(fruits.reverse())
console.log(`After applying Reverse Method: ${fruits}`) //  changed the original array
console.log(months.reverse())
console.log(nums.reverse())

// toReversed()
console.log(`Before applying toReversed Method: ${fruits}`)
const reversedArray = fruits.toReversed()
console.log(`After applying toReversed Method: ${reversedArray}`) //  


/* For Each Method */ 
const vegies = ['potato', 'tomato', 'brinjal', 'onion']

// Traditional For Loop
for (let i = 0; i < vegies.length; i++) {
  console.log(`In Tradional For Loop:: ${vegies[i]}`)
}
// forEach Method
vegies.forEach((element) => console.log(`In forEach Method:: ${element}`))


const fruits2 = ['banana', 'mango', 'apple', 'orange']

// For Of Loop
for (let item of fruits2) {
  console.log(`By using 'For Of' Loops:: ${item}`)
}
// forEach Method
fruits2.forEach(
  (item) => {
    console.log(`By Using forEachMethod is ${item}`)
  }
)