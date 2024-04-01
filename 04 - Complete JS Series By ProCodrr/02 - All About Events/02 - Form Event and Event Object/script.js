const usernameInput = document.querySelector("#username");
const para = document.querySelector("p");
const form = document.querySelector("form");

// CLICK EVENT

// Add Event for 1 click on input
usernameInput.addEventListener("click", () => {
  console.log("Input Clicked");
});

// -----------------------------------------------

/*// INPUT EVENTS -> */

// Add Event for input on input
// input event -> input event fires when the value of an <input>, <select> or <textarea> element has been changed as direct result of user action (jaise textbox mein type karna ya checkbox ko check karna)

usernameInput.addEventListener("input", (e) => {
  // console.log(e.target.value); // is tarah ham input ki value ko access kr skte hai
  para.innerHTML = e.target.value;
});

// **************************************
// CHANGE EVENT -> jab user modify karta hai element ki value k, (jaise checkbox check uncheck hote hai, radio element check but not when unchecked)
usernameInput.addEventListener("change", (e) => {
  console.log(e.type);
  para.innerHTML = e.target.value;
});

// FOCUS EVENT - jab element receive krta hai focus ko.
usernameInput.addEventListener("focus", (e) => {
  console.log(e.type);
  usernameInput.style.backgroundColor = "pink"; // jab input pe focus hoga to uska bg color pink hojaega
});
// note -> par dikkat hai jab focus hatake bahar click karenge to bhi background color pink hi rahega isliye blur use hoga

// BLUR EVENT - focus ka opposite hai,jab element lost karta hai focus ko tab fire hota hai blur event
usernameInput.addEventListener("blur", (e) => {
  console.log(e.type);
  usernameInput.style.backgroundColor = ""; // back to normal
});

// -----------------------------------------------

/*// BUTTON EVENTS -> */

// Submit Event - HTML mein By Default hota hai, form ko submit krne ke liye.. but in JS submit event fire kar sakte hai!

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent a link from opening the URL,default action ko prevent/cancel karta hai. submit button click krne pe form ko submit hone se prevent krta hai, link pe click karne se link follow krne se prevent krta hai
  console.log(e);
  console.log("Form Submitted");
});
