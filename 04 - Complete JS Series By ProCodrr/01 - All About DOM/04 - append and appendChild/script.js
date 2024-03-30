const container = document.querySelector(".container");
const card = document.querySelector(".card");
const h1 = document.querySelector("h1");


/* append meaning -> to add something at the end of the document */

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))


for (let i = 2; i <= 100; i++) {
  // console.log(i)
  const newCard = card.cloneNode();
  newCard.innerHTML = i;
  container.appendChild(newCard);
}


/* appendChild 
    -> it is a method specifically available on DOM elements
    -> it takes a single argument, which must be a DOM element node, and appends it at the last child of the calling element
    -> If the appended element is already part of the DOM, `appendChild()` moves it to the new location rather than creating a new copy
    
*/

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
parent.appendChild(child);


/* append() 
  -> it is more versatile method avaiable on DOM Nodes (not just element)
  -> it can take multiple arguments. including DOM elements, strings or other nodes.
  -> it appends the provided content as the last child of the calling nodes.
  -> if the content provided is the DOM element, it behaves like `appendChild()`
  -> if the content provided is a string, it is converted to a text node before appending.
  -> if multiple arguments are provided, they are appended in the order they are provided.
*/

const child2 = document.querySelector('span')
parent.append(child, child2)