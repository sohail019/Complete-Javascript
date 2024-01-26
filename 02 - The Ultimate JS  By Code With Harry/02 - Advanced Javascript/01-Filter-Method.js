// Filter Method //
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach se karke dekhte hai but specific value return krne ke liye condition lagani padegi extra lines of code
nums.forEach((num) => {
  if (num > 4) {
    console.log(num);
  }
});

// pehla tariqa - variable define krke value return kr skte hai because filter new array return krta hai
const filteredNums = nums.filter((num) => num > 4);
console.log(filteredNums);

// dusra tariqa direct console me use kr skte hai block scope khol ke lekin value return nahi karega because 'return' keyword nahi likhe, explicit function hai
console.log(
  nums.filter((num) => {
    num > 4;
  }),
); // o/p -> []

// dusra tariqa but sahi tariqa, block scope open krke and return keyword use karke
console.log(
  nums.filter((num) => {
    return num > 4;
  }),
); // [ 5, 6, 7, 8, 9, 10 ]

/*  Examples of Filter */

/* Example1 -  Write a function that filters an array of strings, returning a new array with only the strings that have a length greater than or equal to a specified value. */
const marvelHeroes = [
  "ironman",
  "spiderman",
  "thor",
  "hulk",
  "thanos",
  "captain america",
  "loki",
  "dr strange",
];

const filteredHeros = marvelHeroes.filter((hero) => {
  return hero.length >= 6;
});

console.log(filteredHeros);

/* Example 2 - Given an array of numbers, write a function that uses the filter method to return a new array containing only the even numbers.  */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredEven = numbers.filter((num) => {
  return num % 2 == 0;
});

console.log(filteredEven);

/* 
Given an array of objects representing books, write a function that filters the books by a specified genre. */

function filterBooksByGenre(books, genre) {
  return books.filter((book) => book.genre === "Fiction");
}
const library = [
  { title: "The Catcher in the Rye", genre: "Fiction" },
  { title: "To Kill a Mockingbird", genre: "Fiction" },
  { title: "The Great Gatsby", genre: "Fiction" },
  { title: "Sapiens", genre: "NonFiction" },
  { title: "The Art of War", genre: "NonFiction" },
];

// 1st Tariqa Function me 2 args pass krke filter use
const fictionBooks = filterBooksByGenre(library, "Fiction");
console.log(fictionBooks);

// 2nd Tariqa without function direct filter use
const fictionBooks2 = library.filter((book) => book.genre === "Fiction");
console.log(fictionBooks2);

// 2nd Tariqa hi but Non Fiction ke liye filter
const nonFictionBooks = library.filter((book) => book.genre === "NonFiction");
console.log(nonFictionBooks);

/* Example 4 - Write a function that filters an array of numbers, returning a new array with only the numbers greater than a specified threshold. */

const data = [15, 25, 5, 30, 10, 8, 98];
const greaterThanThreshold = data.filter((threshold) => threshold > 15);
console.log(greaterThanThreshold);

/* Example 5 - Given an array of objects representing students, write a function that filters the students who have passed a specific subject. Each student object has a name and a grades property, which is an object where the keys are subjects and the values are the corresponding grades.
 */

const studentList = [
  { name: "Alice", grades: { math: 90, science: 85, istory: 95 } },
  { name: "Bob", grades: { math: 75, science: 80, history: 88 } },
  { name: "Charlie", grades: { math: 92, science: 88, history: 75 } },
];

const passedStudents = studentList.filter( (student) => {
  return student.grades.math > 80
})
console.log(passedStudents)

/*  Example 6 - Write a function that filters an array of objects representing movies, returning only the movies that have a rating higher than a specified value. */

const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "The Shawshank Redemption", rating: 9.3 },
  { title: "The Dark Knight", rating: 9.0 },
  { title: "Pulp Fiction", rating: 8.9 },
];

const filterMoviesByRating = (movies, minRating) => {
  return movies.filter( (movie) => {
    return movie.rating >= minRating
  })
}
const highlyRatedMovies = filterMoviesByRating(movies, 9.0)
console.log(highlyRatedMovies)

/* Example 7 - Given an array of objects representing products, write a function that filters the products based on their price range. */

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 600 },
  { name: "Headphones", price: 100 },
  { name: "Tablet", price: 800 },
];

const filteredProductsByPrice = (products, minPrice, maxPrice) => {
  return products.filter( (product) => {
    return product.price >= minPrice && product.price <= maxPrice
  })
} 

const affordableProducts = filteredProductsByPrice(products, 100, 800);
console.log(affordableProducts);
