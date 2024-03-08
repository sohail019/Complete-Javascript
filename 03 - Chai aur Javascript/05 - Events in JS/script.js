/* EVENTS -
  --> Responding to user inputs and actions
  --> JS mein jitne events hote hai sequentially run hote hai, kuch exception hai!
  --> Ek exception browser ke events hai, jaise koi activity pe invoke hote hai!
  --> Events list bohot saari hai jaise click, mouseover, etc..
*/


/* Approach 1 -> onclick in html?
<li><img id="owl"
src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
onclick="alert('Owl')"></li>

  --> Bilkul acchi approach nahi hai, feasible nahi hai.. jab scale karega tab probblem hogi toh HTML ke andar inject mat kariye!!
  --> React ka scenario alag hota hai, scalable code hota hai jab onclick lagate hai but regular pure javascript mein na karey!!
*/


/* Approach 2 - getElementById document select krke onclick event  

Example ->
document.getElementById('owl').onclick = function() {
  alert("Owl")
}

  *NOTES*
    --> Looks okay but jab id pe onclick event laga rahe hai to problems ho sakti hai, because bohot zyada information nahi milti hai!
    --> Actual mein Event listener use karne chahiye because event listener sirf onclick functionality nahi propogation ki ability deta hai!!
    --> Propogation kya hota hai? will discuss below later
    --> Less features hai!!
*/


/* Approach 3 - BEST Approach till now  --> Add Event Listener*/

document.getElementById('owl').addEventListener('click', function() {
  alert('Owl')
}, false) // teen parameters, 1st konsa event, 2nd function, 3rd false default hota hai to likhenge nahi likhenge chalega


/* More Approaches
 --> attachEvent .. ye pehle kaam aata tha, abhi nahi
 --> onEvent .. jQuery framework mein tha ye
*/



/* EVENT OBJECT  */

document.getElementById('photoshop').addEventListener('click', function(e) {
  // e jo hai wo object hai, console krke dekhte hai
  console.log(e) // PointerEvent hai.. jaise click karenge to Object hai.. object mein bohot values milegi.. events kis type ke milte hai? mostly browser event and environment event!!

  console.log(e.timeStamp) // time print karega
  console.log(e.width) // width print karega
  // Kya padhna hai? ---> type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, altKey, ctrlKey, shiftKey, keyCode

  console.log(e.target) // html tag return karega
  console.log(e.toElement) // null
  console.log(e.srcElement) // html tag hi return karega
  console.log(e.currentTarget)
  console.log(this.clientWidth) // 200 return karega
}, false) // false default hota hai, 



/* Event Propogation  */

// 1 ) Event Bubbling - false

document.querySelector('#images').addEventListener('click', function(e) {
  console.log('BUBBLING : Clicked inside the ul')
}, false) // jab ul ke andar click karenge tab print hoga

document.querySelector('#japan').addEventListener('click', function(e) {
  console.log('BUBBLING : Japan Clicked')
}, false) // jab japan image click hogi

// Pehle konsa hoga??? pehle japan image pe click hoga phir ul pe.. ye event propogaition bubbling up hai.. jo niche se upar jaata hai!! pehle japan image hogi phir li then ul


// 2) Event Capturing - true karne pe
// Pehle konsa hoga??? pehle ul hoga.. ye event capturing down hai.. jo upar se niche jaata hai!! pehle ul hogi then li then image japan

// document.querySelector('#images').addEventListener('click', function(e) {
//   console.log('CAPTURING : Clicked inside the ul')
// }, true) // jab ul ke andar click karenge tab print hoga

// document.querySelector('#japan').addEventListener('click', function(e) {
//   console.log('CAPTURING :Japan Clicked')
// }, true) // jab japan image click hogi


/* Stop propogation */

document.querySelector('#prayer').addEventListener('click', function(e) {
  console.log('Prayer Clicked')
  e.stopPropagation()
})


/* Prevent Default */
document.querySelector('#google').addEventListener('click', function(e) {
  e.preventDefault()
  e.stopPropagation()
  console.log('Google Clicked')
})