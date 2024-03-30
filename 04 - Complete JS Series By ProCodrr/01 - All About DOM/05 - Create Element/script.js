const h1 = document.querySelector('h1');
const container = document.querySelector(".container");

const firstImage = document.querySelector('img');


// ye without create kiye clone karke node ko append karneka solution hai!!
// for (let i = 2; i <= 1000; i++) {
//   const newImage = firstImage.cloneNode();
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   container.append(newImage);
// }


// Let's create Element with JS

const paragraph = document.createElement("p"); // ye method se element create hoga, value capital me rakhenge to bhi small me hi jaega
console.log(paragraph)
container.append(paragraph); // kisi bhi parent element ke last me append kar sakte hai
paragraph.innerHTML = 'Sohail Is The Good Boy' // by default element empty hoga, to usme value add krna padega


// Let's Create Classssssss for paragraph
paragraph.classList.add('my-paragraph');
// Can i create multiple class??
// paragraph.classList.add('sohail'); // not considered this


// Let's create id for paragraph
paragraph.id = 'heading'


// Let's create Image from createElement

const image = document.createElement('img');
image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;
container.append(image);

// ab alag alag sources set krke image ko print karna hai
for (let i = 1; i <= 50; i++) {
  const newImage = image.cloneNode();
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  container.append(newImage);
}


// Let's Add Serial Number Also


for (let i = 1; i <= 50; i++) {

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const newImage = document.createElement('img');
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  const para = document.createElement('p');
  para.innerHTML = i;



  imageContainer.append(newImage, para)
  container.append(imageContainer)
}


// ANother APproach

// for (let i = 1; i <= 50; i++) {

//   const imageContainer = document.createElement('div');
//   imageContainer.classList.add('image-container');

//   const myHTML = `
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//     <p>${i}</p>
//   `

//   imageContainer.innerHTML = myHTML;
//   // const newImage = document.createElement('img');
//   // newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//   // const para = document.createElement('p');
//   // para.innerHTML = i;



//   // imageContainer.append(newImage, para)
//   container.append(imageContainer)
// }
