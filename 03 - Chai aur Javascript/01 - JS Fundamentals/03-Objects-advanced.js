// 1 - Functions 'this' keyword in Object

const person = {
  first: "Sohail",
  last: "Shaikh",
  fullName() {
    return `${this.first} ${this.last}`;
  },
};
console.log(person);
console.log(person.fullName()); // Sohail Shaikh
person.last = "Khan";
console.log(person.fullName()); // Sohail Khan

// NOTE --> The Value of 'this' depends on the invocation context of the function it is used in

// Same Function? Different Result?
const newFullName = person.fullName;
console.log(newFullName()); // undefined undefined

// Answer --> The Value of 'this' depends on the [INVOCATION CONTEXT] of the function it is used in.

/*  Spread in Object Literal */

// Copies properties from one object into another object

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const objAssignMethod = Object.assign({}, obj1, obj2);
console.log(objAssignMethod);

// But! But! But! Spread is better

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// +++++++++++++++++++++++++++++++++++++++++++++++

/* Object Methods */

// 1 - Assign Method - It returns the modified target object.

const fullName = {
  firstName: "sohail",
  middleName: "anwar",
  lastName: "shaikh",
};

const otherDetails = {
  age: 21,
  dob: "28th Sept 2002",
  favColor: "black",
  hobbies: ["coding", "writing", "cricket"],
};

// const allDetails = Object.assign(fullName, otherDetails)
// console.log(allDetails);
/* Values in allDetails
{
  firstName: 'sohail',
  middleName: 'anwar',
  lastName: 'shaikh',
  age: 21,
  dob: '28th Sept 2002',
  favColor: 'black',
  hobbies: [ 'coding', 'writing', 'cricket' ]
} */

// console.log(fullName)
/* Values in fullName 
{
  firstName: 'sohail',
  middleName: 'anwar',
  lastName: 'shaikh',
  age: 21,
  dob: '28th Sept 2002',
  favColor: 'black',
  hobbies: [ 'coding', 'writing', 'cricket' ]
} */

// console.log(otherDetails)

// Above one is the Wrong Way to use assign method in Objects
// Because in variable allDetails, two objects are getting combined, but it is stored in heap, that's why the target will be fullName and source will be otherDetails. So, allDetails will be updated on fullName object also!

// -> Solution for using Assign method Accurately

const allDetailsCorrectSoln = Object.assign({}, fullName, otherDetails)

console.log(allDetailsCorrectSoln) /*  Output :
{
  firstName: 'sohail',
  middleName: 'anwar',
  lastName: 'shaikh',
  age: 21,
  dob: '28th Sept 2002',
  favColor: 'black',
  hobbies: [ 'coding', 'writing', 'cricket' ]
} */

console.log(fullName) // { firstName: 'sohail', middleName: 'anwar', lastName: 'shaikh' }

console.log(otherDetails) /* {
  age: 21,
  dob: '28th Sept 2002',
  favColor: 'black',
  hobbies: [ 'coding', 'writing', 'cricket' ]
} */

// +++++++++++++++++++++++++++++++++++++++++

// 2 - Freeze

const userDetails = {
  id: 67,
  username: 'scookiehail'
}
console.log(userDetails) // { id: 67, username: 'scookiehail' }

// Let's update the value of id
userDetails.id = 45
console.log(userDetails) // { id: 45, username: 'scookiehail' }

// Let's Freeze the object so that nobody can change
Object.freeze(userDetails)
userDetails.id = 89
console.log(userDetails) // { id: 45, username: 'scookiehail' }

// NOTE: -> still id will be 45, because now object is freezed


// is frozen method to check, returns true or false
console.log(Object.isFrozen(userDetails)) // true


// +++++++++++++++++++++++++++++++++++++++++

// 3 - Keys - returns an array of a given object's own enumerable string-keyed property names.

const keyOfUserDetails = Object.keys(userDetails)
console.log(keyOfUserDetails)  // [ 'id', 'username' ]


// +++++++++++++++++++++++++++++++++++++++++

// 4 - Values - returns an array of a given object's own enumerable string-keyed property values.

const valuesOfUserDetails = Object.values(userDetails)
console.log(valuesOfUserDetails) // [ 45, 'scookiehail' ]


// +++++++++++++++++++++++++++++++++++++++++

// 5 -  Entries - returns an array of a given object's own enumerable string-keyed property key-value pairs.

const entriesOfUserDetails = Object.entries(userDetails)
console.log(entriesOfUserDetails) // [ [ 'id', 45 ], [ 'username', 'scookiehail' ] ]

// +++++++++++++++++++++++++++++++++++++++++

// 6 - Has Own

console.log(Object.hasOwn(userDetails ,'id')) // true
console.log(Object.hasOwn(userDetails ,'ide')) // false

// +++++++++++++++++++++++++++++++++++++++++


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


// +++++++++++++++++++++++++++++++++++++++++

// JSON API

{
  {
    {
      
    }
  }  
}