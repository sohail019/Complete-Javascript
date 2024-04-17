const green = document.querySelector(".green");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");

// add event listener for green "parent" container

green.addEventListener("click", (e) => {
  e.stopPropagation(); // propogate hone se rokta hai, means aage badhne se rokta hai!!
  //   default propograte hota hai, par stop krne ke liye ye method use krneka
  console.log("1. Green Event Cicked");
});

// add event listener for red "middle" container
red.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("2. Red Event Clicked");
});

// add event listener for blue "inner children" container
blue.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("3. Blue Event Clicked");
  }
  //   { once: true } -> ye ek hi baar event hoga phir ruk jaega
);

// add event listener for body
document.body.addEventListener("click", () => {
  console.log("4. Body Event Clicked");
});
// add event listener for blue "inner children" container
document.addEventListener("click", () => {
  console.log("5. Document Event Clicked");
});
// add event listener for blue "inner children" container
window.addEventListener("click", () => {
  console.log("6. Window Event Clicked");
});

// ye upar ka jo horaha hai wo bubbling hogi, andar ka to click ho hi raha hai par uske parent pe bhi event lagega window tak
// suppose blue pe click kiye --> red, green, body, document and window ye sab tak click hoga

// ye hota hai Event Bubbling -> Andar se bahar tak event lag jaata hai

// but Event Capturing -> jab 3rd value true karenge -> ulta chalega bubbling se.. from parent till child end -> By Default false rehta hai
// itna use nahi hota, logically bubbling sahi hai!!

// add event listener for green "parent" container

// green.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation(); // propogate hone se rokta hai, means aage badhne se rokta hai!!
//     //   default propograte hota hai, par stop krne ke liye ye method use krneka
//     console.log("1. Green Event Cicked");
//   },
//   true
// );

// // add event listener for red "middle" container
// red.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("2. Red Event Clicked");
//   },
//   true
// );

// // add event listener for blue "inner children" container
// blue.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("3. Blue Event Clicked");
//   },
//   true
// );

// // add event listener for body
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("4. Body Event Clicked");
//   },
//   true
// );

// // add event listener for blue "inner children" container
// document.addEventListener(
//   "click",
//   () => {
//     console.log("5. Document Event Clicked");
//   },
//   true
// );
// // add event listener for blue "inner children" container
// window.addEventListener(
//   "click",
//   () => {
//     console.log("6. Window Event Clicked");
//   },
//   true
// );
