let num = prompt('Enter the Number')
num = Number.parseInt(num)

if(num > 18) {
  location.href = 'https://google.com'
} else {
  let color = prompt('Enter the Color Name')
  let textColor = prompt('Enter the Text Color Name')
  document.body.style.background = color
  document.body.style.color = textColor
}