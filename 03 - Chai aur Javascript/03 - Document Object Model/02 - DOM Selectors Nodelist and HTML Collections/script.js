/*Selectors */

/* // Get Element By ID */
console.log('*******Get Element By ID**********')
console.log(document.getElementById('title')) // h1 tag value in return expression


console.log(document.getElementById('title').id) // ID return -> title

console.log(document.getElementById('title').class) // undefined 

// NOTE : Because ham jab html mein class likhte hai.. to behind the scene document jo smjhta h wo className smjhta hai.. isliye jab css ya html ham js mein likhte hai.. especially react ke andar jisko jsx kahte hai.. to ham class nahi likhte hai className likhte hai!! or DOM ke andar jab structure banate hai tab bhi className hi likhte hai

console.log(document.getElementById('title').className) // Class Name -> heading

// Attributes bhi nikaal sakte hai
console.log(document.getElementById('title').getAttribute) // function hai isliye parameter pass karna padega (key pass karo, value milega)
console.log(document.getElementById('title').getAttribute('id')) // title

// Attribute set bhi kar sakte hai
console.log(document.getElementById('title').setAttribute('class', 'test')) // ye hamesha overwrite karega.. heading value thi class attribute ki.. ab test hogayi!

console.log(document.getElementById('title').setAttribute('class', 'test heading')) // ab test bhi hogyi or heading bhi hogyi set

// Now again get element by id
console.log(document.getElementById('title')) // nayi manipulated h1 aaega

// let's store it in varibale

const title = document.getElementById('title') // stored
console.log(title) //  print h1

// Now we can play with that variable

title.style.backgroundColor = 'green' // background will be green
title.style.textAlign = 'center' // text will be in center
title.style.border = '3px solid black' // border will be applied
title.style.borderRadius = '20px' //  border radius will be applied
title.style.textTransform = 'uppercase' // uppercase text transform
title.style.fontSize = '23px'
title.style.padding = '15px'

// Now Let's get content 
console.log(title.textContent) // DOM Manipulation by Sohail Shaikh
console.log(title.innerHTML) // DOM Manipulation by Sohail Shaikh
console.log(title.innerText) // DOM Manipulation by Sohail Shaikh

// Same values? Different methods?? let's check difference of innerText and textContent

// h1 mein span add karte hai.. and text likhte h and span mein display none krna h..

// textContent -> DOM Manipulation by Sohail Shaikh test text (jo element display hidden ho ya sab chahiye tab ye use hoga ke saara content do)

// innerText -> DOM Manipulation by Sohail Shaikh (sirf text return karega.. jo dikh raha h uske sirf visual change krna h to innerText use krna h) 

// innerHTML -> content plus andar koi html tag hai to return krega


/* Get Element By Class Name */
console.log(document.getElementsByClassName('heading')) // HTML Collection Milega

//---------------------------------------------------------