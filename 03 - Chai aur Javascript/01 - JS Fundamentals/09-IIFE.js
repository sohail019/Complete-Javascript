/*  Immediately Invoked Function Expression  (IIFE)*/

/* Concept Understanding -> 
  -> Jaise hi function likha, turant execute karana hai, kaafi tareeqe hai but kyun aisa function chahiye jo immediately execute hojae?
  -> ummm, smjhte hai... specially kayi baar file likhte hai jis mein sirf database connection hai or ham chahte hai jaise hi app start ho waise hi database connection start hojae
  -> kayi baar global scope mein var declare hote hai, or ham nahi chahte function mein global variable problem kare, global scope se pollute hojata hai isliye ham scope bana lete hai or next immmediately execute hojae
*/

/* Theory 
  -> It is JS Function that runs as soon as it is defined.
*/

// Syntax

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("sohail ");
