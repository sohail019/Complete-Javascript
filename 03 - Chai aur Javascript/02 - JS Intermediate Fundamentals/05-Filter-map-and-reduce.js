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

function filterBooksByGenre(books) {
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


/* MAP METHOD */

// Map Method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNums) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// please multiply each element with 10

// by Using traditional for loop
const newNumsForLoop = []
for (let i=0; i < myNums.length; i++){
  newNumsForLoop.push(myNums[i] * 10)
}
console.log(newNumsForLoop)

// by Using for of Loop
const newNumsForOf = []
for(let num of myNums) {
  newNumsForOf.push(num * 10)
}
console.log(newNumsForOf)

// by using forEach Method
const newNumsForEach = []
myNums.forEach( (num) => {
  newNumsForEach.push(num * 10)
})
console.log(newNumsForEach)


// By using MAP METHOD
const newNumsMapMethod = myNums.map( (num) => num * 10)
console.log(newNumsMapMethod) // [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]


// Chaining
const chainingNums = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
console.log(chainingNums)
const chainingMap = chainingNums.map( (divideNumBy) => divideNumBy / 10) // [10,20,.., 100]
                                .map( (addNum) => addNum+ 10) // [20,30,.., 110]
                                .map( (subtractNum) => subtractNum - 5) // [15, 25, 35, ... 105]
                                .map( (square) => square ** 2) // [225, 625, 1225, .... 11025]
                                .filter( (num) => num > 500) // [625, 1225, 2025, ... , 11025]
console.log(chainingMap)


/* Map Exercises */

/* Question 1 - Given an array of numbers, write a function that uses the map method to create a new array where each number is squared. */

const numbers = [1, 2, 3, 4, 5];

const squareNum = (number) => {
  return number.map( (num) => {
    return num ** num
  })
}
const squaredNums = squareNum(numbers)
console.log(squaredNums)

// ---------------------------------------

/* Question 2 - Write a function that takes an array of strings and uses the map method to create a new array where each string is converted to uppercase. */

const fruits = ['orange', 'mango', 'papaya', 'apple', 'banana', 'grapes']

const uppercaseFruits = (fruits) => {
  return fruits.map( (fruit) => {
    return fruit.toUpperCase()
  })
}

const upperCasedFruits = uppercaseFruits(fruits)
console.log(upperCasedFruits)

// ---------------------------------------
/* Question 3 - Given an array of objects representing books, write a function that uses the map method to create a new array of book titles. */

const library = [
  { title: "The Catcher in the Rye", genre: "Fiction" },
  { title: "To Kill a Mockingbird", genre: "Fiction" },
  { title: "The Great Gatsby", genre: "Fiction" },
  { title: "Sapiens", genre: "Non-fiction" },
  { title: "The Art of War", genre: "Non-fiction" },
];

const extractBookTitles = (books) => {
  return library.map( (book) => {
    return book.title
  })
}

const bookTitles = extractBookTitles(library)
console.log(bookTitles)

// ---------------------------------------

/* Question 4 - Write a function that takes an array of temperatures in Celsius and uses the map method to create a new array of temperatures converted to Fahrenheit. The formula for conversion is F = C * 9/5 + 32. */

const celciusTemperatures = [0, 10, 20, 30, 40];

const convertToFahrenheit = (temperaturesInCelcius) => {
  return temperaturesInCelcius.map( (celcius) => {
    return celcius * 9/5 + 32
  })
}

console.log(convertToFahrenheit(celciusTemperatures))  

// ---------------------------------------

/* Question 5 - Given an array of strings, write a function that uses the map method to create a new array where each string is reversed. */

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const reverseStrings = (words) => {
  return words.map( (word) => word.split('').reverse().join())
}

console.log(reverseStrings(words))


// ----------------------------------------

/* Question 6 - Write a function that takes an array of numbers and uses the map method to create a new array where each number is incremented by a specified value. */

const originalNumbers = [1, 2, 3, 4, 5];

const incrementNumbers = (numbers, incrementValue) => {
  return numbers.map( (num) => num + incrementValue )
}

const incrementedNumbers = incrementNumbers(originalNumbers, 10)
console.log(incrementedNumbers)


// ------------------------------------------

/* Question 7 - Given an array of objects representing students, write a function that uses the map method to create a new array where each student's grades are converted to percentages. Assume the maximum grade for each subject is 100. */

const studentList = [
  { name: "Alice", grades: { math: 90, science: 85, history: 95 } },
  { name: "Bob", grades: { math: 75, science: 80, history: 88 } },
  { name: "Charlie", grades: { math: 92, science: 88, history: 75 } },
];


const convertToPercentage = (students) => {
  return students.map( (student) => {
    const gradesInPercentage = {};
    for(const subject in student.grades) {
      const percentage = (student.grades[subject] / 100) * 100
      gradesInPercentage[subject] = percentage
    }
    return {name: student.name, grades: gradesInPercentage}
  })
}

const convertedToPercentage = convertToPercentage(studentList)
console.log(convertedToPercentage)


// ----------------------------------------

/* Question 8 - Write a function that takes an array of strings and uses the map method to create a new array where each string is concatenated with a specified suffix. */

const cars = ['bmw', 'ferrari', 'audi','mercedes', 'fortuner']

const addSuffix = (cars, suffix) =>{
  return cars.map( (car) => car + suffix)
}

const suffixedCars = addSuffix(cars, '-car')
console.log(suffixedCars)



// --------------------------------------------------

/* Question 8 - Write a function that takes an array of numbers and uses the map method to create a new array where each number is squared and then multiplied by 2. */

const originalNums = [1, 2, 3, 4, 5];

const squareAndDouble = (numbers) => {
  return numbers.map( (num) => num * num).map( (num) => num * 2)
}

const squareAndDoubled = squareAndDouble(originalNums)
console.log(squareAndDoubled)

// ---------------------------------------

/* Question 9 - Given an array of objects representing products, write a function that uses the map method to create a new array of product names. */

const productList = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 600 },
  { name: "Headphones", price: 100 },
  { name: "Tablet", price: 800 },
];

const productNames = (products) => {
  return products.map( (product) => product.name )
} 
console.log(productNames(productList))


// ---------------------------------------------
/* Question 10 - Write a function that takes an array of sentences and uses the map method to create a new array where each sentence is reversed. */

const originalSentences = ["Hello, world!", "JavaScript is fun", "Coding is great"];

const reverseSentence = (sentences) =>{
  return sentences.map( (sentence) => sentence.split('').reverse().join('') )
}


console.log(reverseSentence(originalSentences))
console.log(originalSentences)

/* Reduce Method 
    --> The reduce() method executes a reducer function for array element.
    --> The reduce() method returns a single value: the function's accumulated result. 
    --> The reduce() method does not execute the function for empty array elements. 
    --> The reduce() method does not change the original array.

    
    --> At the first callback, there is no return value from the previous callback. Normally, array element 0 is used as initial value, and the iteration starts from array element 1. If an initial value is supplied, this is used, and the iteration starts from array element 0.

    ---> Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

*/

const prices = [23, 543, 546, 657, 23, 123, 345];

const getMaxPrice = (acc, element) => {
  return Math.max(acc, element);
};
const maxPrice = prices.reduce(getMaxPrice);
console.log(maxPrice); // 657

const sumOfPrices = prices.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sumOfPrices); // 2260 

// ---------------Exercises-------------------

/* Question 1 - Write a function that takes an array of numbers and uses the reduce method to find the sum of all even numbers in the array. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNums = (numbers) => {
  return numbers
    .filter((even) => {
      return even % 2 == 0;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    });
};
console.log(sumOfEvenNums(numbers)); // 30

// --------------------------------------------
/* Question 2 - Given an array of strings, write a function that uses the reduce method to concatenate all the strings into a single string. */

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const concatenateStrings = (str) => {
  return str.reduce((acc, curr) => {
    return acc + curr;
  });
};

const concatenatedStrings = concatenateStrings(words);
console.log(concatenatedStrings); // applebananakiwiorangegrape

// ------------------------------------------

/* Question 3 - Write a function that takes an array of numbers and uses the reduce method to find the product of all the numbers. */

const factors = [2, 3, 4, 5];

const findProduct = (numbers) => {
  return numbers.reduce((acc, curr) => {
    return acc * curr;
  });
};

console.log(findProduct(factors)); // 120 = (2*3*4*5)

// -----------------------------------------

/* Question 4 - Given an array of objects representing expenses, write a function that uses the reduce method to find the total expense amount. */

const expensesList = [
  { item: "Groceries", amount: 50 },
  { item: "Utilities", amount: 80 },
  { item: "Entertainment", amount: 30 },
];

const totalExpenses = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((acc, curr) => {
      return acc + curr;
    });
};
console.log(totalExpenses(expensesList)); // 160

// ------------MAP FILTER AND REDUCE EXERCIES--------------------

/* Question 1 - Given an array of numbers, write a function that uses the filter method to create a new array containing only the numbers greater than 10, and then use the map method to square each of those numbers. */

const originalNumbers = [5, 12, 8, 15, 3, 20];

const filterAndSquare = (nums) => {
  return nums
    .filter((num) => num > 10)
    .map((num) => {
      return num * num;
    });
};

console.log(filterAndSquare(originalNumbers));  // [ 144, 225, 400 ]

// ----------------------------------------------------
/* Question 2 - Write a function that takes an array of strings and uses the map method to create a new array where each string is reversed, and then use the filter method to keep only the strings with more than 5 characters.  */

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];

const filterAndReverse = (strings) => {
  return strings
    .filter((string) => string.length > 5)
    .map((string) => string.split("").reverse().join(""));
}

console.log(filterAndReverse(fruits)) // [ 'ananab', 'egnaro' ]

const reverseAndFilter = (strings) => {
  return strings.map( (string) => {
    return string.split('').reverse().join('')
  }).filter( (string) => {
    return string.length > 4
  })
}

console.log(reverseAndFilter(fruits)); // [ 'elppa', 'ananab', 'egnaro', 'eparg' ]

// ------------------------------------------

/* Question 3 - Given an array of numbers, write a function that uses the reduce method to find the average of all the numbers. */

const values = [10, 15, 20, 25, 30];

const averageOfNums = (numbers) => {
  const sum  = numbers.reduce( (acc, curr) => {
    return acc + curr
  })
  const average = sum / numbers.length
  return average
  
}

console.log(averageOfNums(values))



/* REAL WORLD EXAMPLES */

/* Real-World Example 1: E-commerce Platform
Consider an e-commerce platform where you have a list of products, and you want to perform various operations:

Filter Products by Category:
Use filter to display only electronics products from the catalog.

Map Prices with Discount:
Use map to show the discounted prices (10% off) for all products.

Calculate Total Order Price:
Use reduce to calculate the total price of a user's order. */

const products = [
  { id: 1, category: 'Electronics', name: 'Laptop', price: 1200 },
  { id: 2, category: 'Electronics', name: 'TV', price: 2000 },
  { id: 3, category: 'Electronics', name: 'Smartphone', price: 600 },
  { id: 4, category: 'Home', name: 'Couch', price: 500 },
];

const userOrder = [1, 3]

const electronics = products.filter( (product) => product.category === 'Electronics')
console.log(electronics)

const discount = products.map( (product) => {
  return product.price * 0.9
})

console.log(discount)

const totalPrice = userOrder.reduce( (total, productID) => {
  const product = products.find( p => p.id === productID)
  return total + (product ? product.price : 0)
}, 0)
console.log(totalPrice)

// -----------------------------------------

/* Question 2 - Real-World Example 2: Health Monitoring App
Imagine a health monitoring app that collects data about users' daily steps and heart rates:*/

const dailyData = [
  { date: '2022-01-01', steps: 8000, heartRate: 75 },
  { date: '2022-01-02', steps: 12000, heartRate: 85 },
  { date: '2022-01-03', steps: 1200, heartRate: 80 },
  { date: '2022-01-04', steps: 1000, heartRate: 89 },
  { date: '2022-01-05', steps: 25000, heartRate: 86 },
  { date: '2022-01-06', steps: 20000, heartRate: 103 },
  { date: '2022-01-07', steps: 13000, heartRate: 81 },
];

/* Filter High-Impact Days: Use filter to identify days where the user took more than 10,000 steps. */

const days = dailyData.filter( (day) => day.steps > 10000)
console.log(days)

/* Map Heart Rates to Intensity Level: Use map to categorize heart rates into intensity levels (low, moderate, high). */

const levels = dailyData.map( (day) => ({
  date: day.date,
  intensity: day.heartRate < 80 ? 'Low' : day.heartRate < 100 ? 'Moderate' : 'High',
    }))

console.log(levels)


/* Calculate Weekly Average Steps:
Use reduce to find the average number of steps taken by the user over a week. */

const totalSteps = dailyData.reduce( (sum, day) => sum + day.steps, 0)
const average = totalSteps / dailyData.length
console.log(average)


// ------------------------------------------

/* Real-World Example 3: Social Media Analytics
In a social media analytics tool, you have data about user engagement: */

const posts = [
  { userId: 1, likes: 50, comments: 10 },
  { userId: 2, likes: 120, comments: 25 },
  { userId: 3, likes: 230, comments: 30 },
  { userId: 4, likes: 65, comments: 10 },
  { userId: 5, likes: 78, comments: 32 },
  { userId: 6, likes: 650, comments: 95 },
  { userId: 7, likes: 754, comments: 106 },
];

/* Filter Active Users:
Use filter to identify users who posted at least once in the last week. */

const activeUsers = posts.map((post) => post.userId).filter((userId, index, self) => self.indexOf(userId) === index )
console.log(activeUsers)

/* Map User Interactions:
Use map to create a new array with the total number of likes and comments for each post. */

/* Calculate Engagement Score:
Use reduce to calculate an overall engagement score for a user based on their posts. */