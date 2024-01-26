// Question 1 - Write JS Program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive or not

checkAgain = true


while(checkAgain) {
  let age = prompt('Enter the Age')
  age = Number.parseInt(age)
  let yearsToWait = 18 - age
  if(age < 0) {
    alert('Please Check Console')
    console.error('Age Value cannot be in Negative')
  }

  if( age >= 18 && age <= 90) {
    alert('Yes, You can Drive!')
  } else if(age === 17) {
    alert(`Oops, You cannot Drive, wait ${yearsToWait} more year`)
  } else if(age > 90) {
    alert(`Kaka have some rest!!`)
  } else if(!age) {
      alert('Please Enter Your Age')
  } else {
    alert(`Oops, You cannot Drive, wait ${yearsToWait} more years`)
  }

  checkAgain = confirm('Do You Want to Check Again?')
  
}

