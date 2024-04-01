// Element Selections
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

/* KEYBOARD EVENTS */

// Keypress Events -ye fire hota hai jab key press hoti hai
// window.addEventListener("keypress", (e) => {
//   console.log("Key Code:: ", e.code);
//   console.log("Key Value:: ", e.key);
//   p.innerHTML = `Key Code is ${e.code} and Key Value is ${e.key}`;
// });

// Keyup - jab button chorhte hai tab fire hota hai
// window.addEventListener("keyup", (e) => {
//   console.log("Key Code:: ", e.code);
//   console.log("Key Value:: ", e.key);
//   p.innerHTML = `Key Code is ${e.code} and Key Value is ${e.key}`;
// });

// Keydown - jab button dabate hai tab fire hota hai.. isme shift, alt sab hote hai
window.addEventListener("keydown", (e) => {
  console.log("Key Code:: ", e.code);
  console.log("Key Value:: ", e.key);
  p.innerHTML = `Key Code is ${e.code} and Key Value is ${e.key}`;
});
