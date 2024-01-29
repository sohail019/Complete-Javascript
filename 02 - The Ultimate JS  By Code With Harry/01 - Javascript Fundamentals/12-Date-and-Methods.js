// Date Creation 

// 1 - new Date() creates a date object with the current date and time:
const date = new Date()
console.log(date) // current date and time

/* Date Conversion */
// To String
console.log(date.toString()) // Mon Jan 29 2024 15:02:22 GMT+0000 (Coordinated Universal Time)


// To ISO String
console.log(date.toISOString()) // 2024-01-29T15:03:50.722Z

// To Local Date String
console.log(date.toLocaleDateString()) // 1/29/2024

// To Local Time String
console.log(date.toLocaleTimeString()) // 3:06:27 PM

// To Locale String
console.log(date.toLocaleString()) // 1/29/2024, 3:03:50 PM

// To JSON
console.log(date.toJSON()) // 2024-01-29T15:05:14.694Z






// 2 - new Date(date string) creates a date object from a date string:
const dateString = new Date('2023-08-28')
console.log(dateString) // 2023-08-28T00:00:00.000Z

/* Methods */

// Get Date
console.log(date.getDate()) // 20 - Date

// Get Day - // Sunday - Saturday : 0 - 6
console.log((date.getDay())) // 6 - because today's saturday

// Get Month - // Jan - december - 0 to 11
console.log(date.getMonth()) // 0

// Get Full Year - 4 digits
console.log(date.getFullYear()) // 2024

// Get Hours - between 0 and 23
console.log(date.getHours()) 

// Get Minutes - between 0 to 59
console.log(date.getMinutes()) 

// Get Seconds - between 0 to 59
console.log(date.getSeconds())

// Get Milliseconds - Between 0 to 60
console.log(date.getMilliseconds())
 
// Get Time - returns the number of milliseconds since January 1, 1970:
console.log(date.getTime())

// Date Now - returns the number of milliseconds since January 1, 1970.
console.log(Date.now())

/* Set Methods */

const event = new Date('August 19, 1975 23:15:30');

event.setDate(24)
console.log(event)