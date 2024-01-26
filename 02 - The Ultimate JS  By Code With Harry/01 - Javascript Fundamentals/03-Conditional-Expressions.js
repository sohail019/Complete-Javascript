let age = prompt("Hey What's Your Age?");
console.log("Before Conversion: ", typeof age)
age = Number.parseInt(age); // Converting string into number
console.log("After Conversion: ", typeof age)

// IF CONDITION
console.log("************* IF CONDITION *********")
if(age>=18){
  alert("Congrats You Are An Adult");
}

// IF ELSE CONDITION
console.log("************* IF ELSE CONDITION *********")
if(age>=18){
  alert("Congrats You Are An Adult");
} else {
  alert("OOOPS! You are kiddo");
}

// IF ELSE IF ELSE CONDITION
console.log("************* IF ELSE IF ELSE CONDITION *********")
if(age > 0 && age <= 1 ){
  alert("You are an Infant!!");
} else if(age >= 2 && age <=4){
  alert("You are a toddler");
} else if(age >= 5 && age <= 12) {
  alert("You are a child!!");
} else if(age >= 13 && age <=17) {
  alert("You are teen");
} else if(age >= 18) {
  alert("You are an adult!");
} else {
  alert("Invalid Age");
}