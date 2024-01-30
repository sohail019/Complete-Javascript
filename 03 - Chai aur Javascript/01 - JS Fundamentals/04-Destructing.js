// DESTRUCTING
/* --> A short, clean syntax to unpack
        -> values from array
        -> properties from objects
      into distinct variables
*/

/* Array Destructure  */

const fruits = ['mango', 'apple', 'watermelon']
console.log(fruits)
const [ yellow, red, green] = fruits
console.log(`yellow is ${yellow}, red is ${red} and greeen is ${green}`)

const [best, ...remaining] = fruits
console.log(best) // mango
console.log(remaining) // ['apple', 'watermelon']

/* Object De structure  */

const catsFeature = {
  name: 'genie',
  age: 8,
  color: 'black',
  breed: 'persian',
  hasAteFood: true
}

console.log(catsFeature.breed) // persian

// Let's destruct 
const {breed} = catsFeature
console.log(breed) // persian

// Another technique
const {hasAteFood : food} = catsFeature
console.log(food)


/* // Param Destructing */

const review = ({best, average, worst}) => {
  return `${best} ${average} ${worst}`
}

const fruits1 = {
  best: 'Mango',
  average: 'Watermelon',
  worst: 'jackfruit'
}

console.log(review(fruits1))

