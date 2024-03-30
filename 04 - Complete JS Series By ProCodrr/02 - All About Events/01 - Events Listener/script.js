/* WHAT ARE EVENTS???
  -> Events ko ham listen kar sakte hai, ek element pe event listener lagate hai, phir jaise hi wo event hoga hamein pata chal jaega ke ye event hua hai!!
  -> Event karne ke liye event handler attach karna padhta hai!!
  -> EVENT HANDLER  :  ye ek block of code hai jo run karta hai jab event fire hota hai!
  
  NOTE: Event handler are sometimes called as Event Listeners
  -> For eg: 
      --> user ne select, click ya hover kiya hai cursor ko kisi bhi element pe!
      --> user ne koi key press kiya hai keyboard pe
      --> user ne resize ya close kiya hai window ko
      --> web page ki loading finish hui
      --> koi form submit hua hai
      --> video play, pause ya end hui hai
      --> koi error aaya hai!!
*/


// 1st -> Inline HTML mein events use - BAD APPROACH


// 2nd -> JS mein function bana ke HTML mein inject - BAD APPROACH

function sayHello() {
    alert('JS Function Event Happens')
  }
  
  
  // 3rd - > JS mein selector use krke use krna
  // const thirdApproach = document.getElementById('third')
  // function thirdApproachFunc() {
  //   alert('3rd Approach Runs Proper')
  // }
  // thirdApproach.onclick = thirdApproachFunc
  
  
  // 4th - > MOST IMPORTANT AND MOST USED -> ADD EVENT LISTENER
  
  //SYNTAX -> Node.addEventListener('eventType', callback function, propogation boolean (true or false))
  
  document.addEventListener('DOMContentLoaded', function() {
    const mainHeading = document.querySelector('#mainHeading');
    mainHeading.addEventListener('click', function() {
      console.log('Event Listener Added');
    });
  
  
    // Card Select
  
    let count = 1
    const card = document.querySelector('.card')
    card.addEventListener('click', () => {
      const container = document.querySelector('.container')
      const newCard = document.createElement('div')
      newCard.classList.add('card')
      newCard.innerText = count++
      console.log(count)
      
      container.appendChild(newCard)
    })
  });