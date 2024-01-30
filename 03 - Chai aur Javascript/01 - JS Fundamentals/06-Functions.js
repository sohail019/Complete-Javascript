 /* Functions Theory 
  -> Reusable procedures
  -> Allows us to write reusable, modular code
  -> We define a "chunk" of code that we can then execute at a later point
  -> We use them ALL THE TIME
 */

/* 2 Steps Process
  DEFINE-------------> RUN
*/

/* Define Syntax
  function func_name() {
    // do something
  }
*/

/* Define Example */

function printHelloWorldThrice() {
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
  }
  
  /* RUN  Syntax
  
  func_name() // run once
  func_name() // run again
  */
  
  /* Run Example */
  
  printHelloWorldThrice() // print 3 times hello world
  
  printHelloWorldThrice() // again, print 3 times hello world
  
  // No Inputs? -> right now, above example of function accepts zero inputs. They behave the same way every time
  
  // greet() -> Hi
  // greet() -> Hi
  // ++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /* ARGUMENTS 
    We can also write functions that accept inputs, called Arguments
  
    greet('Sohail') -> Hi Sohail
    greet('Sohail Shaikh') -> Hi Sohail Shaikh
  
    sum(2+4) -> 6
  */
  
  /* We've Seen this before  */
  
  // No Input Function
  let msg = 'hello'
  console.log(msg.toUpperCase()) //  HELLO 
  
  // Arguments
  console.log(msg.indexOf('h')) // 0
  console.log(msg.at(3)) // l
  
  
  // +++++++++++++++++++++++++++++++++++++++
  
  function greet(person) {
    console.log(`Hi, ${person}`)
  }
  greet('Sohail')
  greet('Sohail Shaikh')
  
  /* Two Arguments  */
  
  function findLargest(x,y) {
    if(x > y) {
      console.log(`${x} is Larger than ${y}`)
    } else if (x < y) {
      console.log(`${y} is Larger than ${x}`)
    } else {
      console.log(`${x} and ${y} are equal`)
    }
  }
  
  findLargest(5, 6)
  findLargest(9, 5)
  findLargest(9, 9)
  
  
  /* Return  
   -> Built in methods return values when we call them. 
   -> We can store those values
  */
  
  console.log('Hello Sohail'.toUpperCase()) // HELLO SOHAIL
  console.log('Hello Sohail'.at(7)) // o
  
  /*  No Return! 
    -> Our functions print values out, but do NOT return anything 
  */
  
  function add(x, y) {
    console.log(x + y)
  }
  
  const sum = add(10, 56)
  console.log(sum) // undefined
  
  /*  FIRST RETURN 
    -> Now we can capture a return value in a variable!
  
  */
  
  function addTwoNums(x,y) {
    return x + y
  }
  
  const sumTwoNums = addTwoNums(45, 65) 
  console.log(sumTwoNums)
  
  
  /*  RETURN -> 
    ->The return statements ends function execution AND specifies the value to be returned by that function
  */
  
  