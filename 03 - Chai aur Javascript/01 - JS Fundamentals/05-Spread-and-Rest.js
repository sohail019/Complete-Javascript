/* Spread Theory
-> Syntax allows an iterable
-> iterable such as array to be 'expanded' in places where zero or more arguments (for func calls) or elements (for array literals) are expected. --> or an object expression to be expanded in places where zero or more key-value pairs (for object literal) are expected
*/

/* Spread for Function Calls  */

// Expands an iterable (array, string, etc.) into a list of arguments
const nums = [9, 6, 5, 8, 1, 7];
console.log(Math.max(nums)); // NaN (won't work because it expects separate arguments, not an array.)

// Use Spread!!!
console.log(Math.max(...nums)); // 9
// |> Same as Calling ---> Math.max(9, 6, 5, 8, 1, 7)
console.log(Math.max(9, 6, 5, 8, 1, 7)); // 9

/*  Spread in Array Literals */

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// Create a new array using an existing array. 
// Spreads the elements from one array into a new array

const newNums = [...nums1, ...nums2]
console.log(newNums) // [ 1, 2, 3, 4, 5, 6 ]

console.log(['a', 'b', ...nums2]) // ['a', 'b', 4, 5, 6 ]

// Won't change the original
console.log(nums1)
console.log(nums2)



/*  Spread in Object Literal */

// Copies properties from one object into another object

const obj1 = {
  1: 'a',
  2: 'b'
}

const obj2 = {
  3: 'c',
  4: 'd'
}

const objAssignMethod = Object.assign( {}, obj1, obj2)
console.log(objAssignMethod)

// But! But! But! Spread is better

const obj3 = {...obj1, ...obj2}
console.log(obj3)


/* // REST */

/* REST Theory -> 
  -> It looks like spread, but it's not!
  -> Collects all remaining arguments into an actual array
*/

const printNums = (nums) => {
  return nums
}

console.log(printNums(20))
console.log(printNums(30,45,65)) // here only 1st value will print
console.log(printNums([30,45,65])) // we have to declare the array but it's not better solution\

// Solution? Use Rest(...) Operator 
/* Syntax : 
        function f(a, b, ...theArgs) {
          // …
        }  
*/
const printNums1 = (...nums) => {
  return nums
}
console.log(printNums1(12,65,78))