// Primitive Example

console.log('-----------------Primitives---------------')
let lastName = 'shaikh' // define 
let oldLastName = lastName
lastName = 'khan'

// they are different now because each primitive value will simply be saved into it's own piece of memory in the stack
console.log(lastName)
console.log(oldLastName)


/* Object | Reference Value Example  */

// It is gonna be stored in the Heap and the stack and then  just keeps a reference to the memory position at which the object is stored in the heap
console.log('-----------------Objects---------------')
const alia = {
  firstName: 'Alia',
  lastName: 'Bhatt',
  age: 29
}
console.log('Before Changing', alia) 

const marriedAlia = alia  // so we are copying entire object here

// NOTE: But Behind the scenes we are actually just copying the reference, which will then point to the same object, remember that?

marriedAlia.lastName = 'Kapoor' //  let's change lastName to Kapoor

console.log('Before Marriage', alia)
console.log('After Marriage', marriedAlia)

// It happened because when we attempted to copy the original alia object, it did infact not create a new object in the Heap. marriedAlia is not a new object in a heap. It's simply just another variable in the stack, which holds the reference to the original object. So, both of these two variables simply point to exactly the same memory address in the heap.

// And that's because in the stack, they both hold the same memory address reference. so ofcourse it makes sense that if we change a property on marriedAlia, it will also change on alia itself

// and that's why we can change properties in the marriedAlia object which was declared using const here. and const is supposed to be for constants. So for things that we cannot change. However, what actually needs to be constant is the value in the stack which only holds reference, we are not actually changing.


/* Now what we can't do is to assign  a complete different object now to marriedAlia */

// marriedAlia = {} // TypeError: Assignment to constant variable


/*  Copying Objects */

const deepika = {
  firstName: 'Deepika',
  lastName: 'Padukone',
  age: 29,
  family: ['ABC', 'EFG']
}

const deepikaCopy = Object.assign({}, deepika)
deepikaCopy.lastName = 'Singh'


console.log('Before Marriage', deepika) // we can preserve original lastName 'padukone'
console.log('After Marriage', deepikaCopy)

// However still problem? because using this technique of object.assign only works on the first level. if we have object inside object. Object.assign only creates shallow copy not deep clone

// Shallow copy -> Only copy the properties in the first level
deepikaCopy.family.push('XYZ')
deepikaCopy.family.push('MNO')
console.log(deepika) //  both have 4 members
console.log(deepikaCopy) // both have 4 members

// Deep Clone -> copy everything.

/* Deep clone example */
// family object is deeply nested in deepika object

// Will do it later -> with external library like Lo-Dash