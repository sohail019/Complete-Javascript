/* Get Elements By Tag Name */
/* Finding HTML Elements by Tag Name (e.g., span, div, img, h1, p)  */ 
const allImages = document.getElementsByTagName('img')

console.log(allImages) // it returns the HTMLCollection of elements that match the passed tag name.
// The return HTMLCollection is a live list that automatically updates node removal or addition.

console.log(document.getElementsByTagName('*')) // it selects all the elements


// ------------------------------------------
/* Get Elements By Class Name 
    -> It returns an HTML Collection of elements that match the passed class name.
    -> document.getElementsByClassName("child")
        --> We can search for multiple class names by passing the class names separated by whitespace.
        let boyElements = document.getElementsByClassName("child boy")
        let girlElements = document.getElementsByClassName("child girl")
*/


const cssImage = document.getElementsByClassName('css-image')
console.log(cssImage)


// -----------------------------------------
/* Get Element By ID 
    -> It returns an element whose id matches a passed string.
    -> Since ids of elements are supposed to be unique, this is faster way to select an element.
*/

const mainHeading = document.getElementById('main-heading')
console.log(mainHeading)


// ----------------------------
/* Query Selector 
    -> It returns the first element that matches the passed selector.
*/

console.log(document.querySelector('#main-heading'))