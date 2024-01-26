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