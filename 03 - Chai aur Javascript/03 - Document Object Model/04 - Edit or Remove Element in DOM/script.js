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