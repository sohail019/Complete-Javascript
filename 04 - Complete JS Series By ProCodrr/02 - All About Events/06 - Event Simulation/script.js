const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const form = document.querySelector("form");
let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// /* what if i want to print 1000 cards ek saaath?? */

// Solution 1 - using simple for loop
// for (let i = 1; i <= 100; i++) {
//   addCardBtn.click();
// }

// Solution 2 - use setInterval to add click Event after few milliseconds (ye simulate hote dikhega)

/*
--> setInterval() - A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.
--> The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
--> 1 second = 1000 milliseconds.
*/
// like Display "Hello" every second (1000 milliseconds):
// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// setInterval(() => {
//   addCardBtn.click();
// }, 100);
// but ye upar ke code me to rukega hi nahi.. isliye clearInterval() krna padega.. and ye setInterval id return krta hai so isko ek variable me save krte hai then utne pe reach hone pe usko clear krdenge

const intervalId = setInterval(() => {
  if (count >= 10) {
    clearInterval(intervalId);
  }
  addCardBtn.click();
}, 100);

/* setTimeOut() -> this method calls a function after a number of milliseconds
                -> it is executed only once.
                -> if need repeated execution, we can use setInterval()
                -> use the clearTimeOut() to prevent the function from starting.
                -> To clear the timeout, we can use id returned from setTimeOut()


*/

// Input Focus simulate
setTimeout(() => {
  input.focus();
}, 1000); // 1 second k baad focus hoga

// Input Blur Simulate back to normal
setTimeout(() => {
  input.blur();
}, 3000); // 3 seconds ke baad normal hojaega

// Form submit button
setTimeout(() => {
  form.submit();
}, 3000);

// Reset submit button
setTimeout(() => {
  form.reset();
}, 2000);
