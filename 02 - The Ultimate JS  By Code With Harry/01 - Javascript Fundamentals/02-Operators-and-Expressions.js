console.log("Operators in JS");
// Arithmetic Operators
console.log("***********Arithmetic Operator*********")
let a = 68;
let b = 2;
console.log("a + b = ", a+b) //70
console.log("a - b = ", a-b) // 66
console.log("a * b = ", a*b) // 136
console.log("a / b = ", a/b) //34
console.log("a % b = ", a%b) // 0
console.log("a ** b = ", a**b) //4624
console.log("Before Increment: a++ = ", a++) //68
console.log("After Increment: a++ = ", a) //69
console.log("Before Decrement: a-- = ", a--) //69
console.log("After Decrement: a-- = ", a) //68
console.log("++a = ", ++a) //69
console.log("--a = ", --a) //68
console.log(a) // 

// Assignment Operators
console.log("***********Assignment Operator*********")
a = 8;
console.log("The value is assigned with: ", a)
a+=5;
console.log("Same as a = a+5: ", a)
a-=5;
console.log("Same as a = a-5: ", a)
a*=5;
console.log("Same as a = a*5: ", a)
a/=5;
console.log("Same as a = a/5: ", a)

// Comparison Operators
console.log("***********Comparison Operator*********")
let comp1 = 10
let comp2 = "10"
let comp3 = 7
console.log("comp1 is equal value to comp2 ? ", comp1 == comp2)
console.log("comp1 is not equal value to comp2? ", comp1 != comp2)
console.log("comp1 is equal value & type to comp2 ? ", comp1 === comp2)
console.log("comp1 is not equal value or not equal type to comp2? ", comp1 !== comp2)
console.log("comp1 is greater than comp3? ", comp1 > comp3)
console.log("comp1 is greater than equal to comp3? ", comp1 >= comp3)
console.log("comp1 is less than comp3? ", comp1 < comp3)
console.log("comp1 is less than equal to comp3? ", comp1 <= comp3)

// Logical Operators
console.log("***********Logical Operator*********")
let x = 5;
let y = 6;
console.log("Both Condition should be true for AND (x<y && x==5)::", x<y && x==5) // return true
console.log("Both Condition should be true for AND (x>y && x==5):: False one ", x>y && x==5) // return false
console.log("Only One Condition should be true for OR (x>y || x==5)::", x>y || x==5) // return true
console.log("Only One Condition should be true for OR (x>y || x==5)::", x>y || x==5) // return true
console.log("Jo false ko true: ", !false) // True
console.log("Jo true ko false: ", !true) // False
            