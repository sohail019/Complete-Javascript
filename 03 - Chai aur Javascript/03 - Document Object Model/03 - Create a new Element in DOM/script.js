const parent = document.querySelector('.parent')
console.log(parent) // parent element return
console.log(parent.children) // HTML collection return hoga.. length 4.
console.log(parent.children[0]) // it will return first child element (Monday)
console.log(parent.children[3]) // it will return last child element (Thursday)

// print innerHTML
console.log(parent.children[1].innerHTML) // tuesday

// Print all the child elements
console.log('********Printing all the day************')
for(let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color = 'orange'

/* Traversing */

// PARENT TO CHILD
console.log('*********PARENT TO CHILD************')
/* // First Element Child */
console.log(parent.firstElementChild) // <div>Monday</div>

/* Last Element Child  */
console.log(parent.lastElementChild) //  <div>Thursday</div>


// CHILD TO PARENT
console.log('*********CHILD TO PARENT************')
const dayOne = document.querySelector('.day')
console.log(dayOne)

console.log(dayOne.parentElement)

// NEXT ELEMENT SIBLING
console.log('*********Next Element Sibling************')
console.log(dayOne.nextElementSibling)

// Nodes
console.log(parent.childNodes) // Nodelist dega!
console.log(parent.childNodes.length) // 11!! but element to 4 h?
// Because sab important hai.. ek space lekar break bhi hai to wo space text node hai jiska count hoga..

// 3 Types of Node : Element Node, Comment Node, Text Node

/* 0 : text element -> because enter krke new line
   1 : comment -> comment bhi node hai count hoga
   2 : text element ->  because enter krke new line
   2 : div.day ->  Html div element hai! element node
   .
   .
   .
   .
  11 : yahan tak 
*/


/* // How to create nodeList programmatically */

// visit create-nodelist.html file