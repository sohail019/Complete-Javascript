// Add another list itemm in List


// 1st Approach -> Function ke through li create krke innerHTML daaldo aur koi parent select krke appendChild karna h
const addLanguage = (langName) => {

  // Create an element first
  const li = document.createElement('li')
  console.log(li)

  // list item mein value add krna hai
  li.innerHTML = `${langName}`
  
  // attach karna hai unordered list mein
  document.querySelector('.languages').appendChild(li)
}

addLanguage('Python')
addLanguage('Java')
addLanguage('Typescript')

// Iska issue hai.. because already ul mein 1 value thi to chal gaya!! orr 1 hi value ke baad ham appendChild() karke element ko select krte h to saara ka saara tree traverse krna padhta h document ke andar!! 1 tha to chal gaya kaam ek hazaar ya 1 lakh hota to problem hoti! kyunki end mein jaana chah rahe h or sabko traverse krte hue jaarahe h! optimization issue hoga!! to optimize krenge

/* 2nd Approach -> Optimized with appendChild */

const addLangWithOpti = (langName) => {

  // create element first
  const li = document.createElement('li')

  li.appendChild(document.createTextNode(langName))

  document.querySelector('.languages').appendChild(li)
}
addLangWithOpti('c++')

// ***************************************************

/* // Edit values in DOM  */

// edit with innerHTML.. from python to ruby
const secondLang = document.querySelector('li:nth-child(2)')
secondLang.innerHTML = 'Ruby' // this will work but it's not optimized for larger scale

// ---------------------------------------------

// edit with textContent.. from java to python
const thirdLang = document.querySelector('li:nth-child(3)')
thirdLang.textContent = 'Python'  // this will also works but not optimized yet

// ---------------------------------------------

// edit with innerText.. 1st li from javascript to Java
const firstLang = document.querySelector('li:first-child')
firstLang.innerText = 'Java' // works but not optimized

// ---------------------------------------------

// edit with outerHTMl.. last value c++ tp c#
const lastLang = document.querySelector('li:last-child')
lastLang.outerHTML = '<li>C#</li>' // sabse bakwas

// ---------------------------------------------

/* // So what is optimized solution?? */
// replace 4th li from Typescript to Javascript 
const fourthLang = document.querySelector('li:nth-child(4)')

// create new li item
const newli = document.createElement('li')
newli.textContent = 'Javascript'
fourthLang.replaceWith(newli) // this is optimized way


// ***********************************************

/* // How to remove Element */

// let's add english language then remove it
addLangWithOpti('English')

const lastLangEng = document.querySelector('li:last-child')
lastLangEng.remove()