# Projects related to DOM

## Projects Link
[Click Here](https://replit.com/@sohail019/45-Projects-for-DOM)


# Solution Code

## Project 1 - Color Changer

```javascript

const body = document.querySelector('body') // ye body ko select karenge further work ke liye

const buttons = document.querySelectorAll('.button') // yahan saare buttons ko class se select krenge

const h2 = document.querySelector('h2')

buttons.forEach( (button) => {
  console.log(button) // har ek pe loop chalega

  // Event listener
  button.addEventListener('click', function(e) {
    console.log(e) // e-> event hai konsa batata h
    console.log(e.target) // konsa trigger hua target batata h

    const afterClickText = (text) => {
      return `${h2.textContent = `Background Color is ${e.target.id}`}`
    }

    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    } else if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    } else if(e.target.id === 'green') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    } else if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
      afterClickText()
    }
  })
  
})


```