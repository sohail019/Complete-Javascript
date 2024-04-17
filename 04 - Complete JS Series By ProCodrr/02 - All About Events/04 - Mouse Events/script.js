const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 0;

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// MouseDown event - > ye event tab fire hoga jab pointing device button press hoga while pointer jab element ke andar hoga
// card.addEventListener("mousedown", (e) => {
//   console.log(e);
//   console.log(e.type);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// MouseUp event - > ye event tab fire hoga jab ek button pointing device jaise mouse ya trackpad release hoga jab pointer element ke andar hoga
card.addEventListener("mouseup", (e) => {
  console.log(e);
  console.log(e.type);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});
