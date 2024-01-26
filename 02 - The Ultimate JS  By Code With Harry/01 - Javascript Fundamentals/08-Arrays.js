// Creating an Array 
const arrayBasic = ['sohail', 'shaikh', 45, true, null];

// Create an Array with Constructor
const arrayConstructor = new Array('sohail', 'shaikh') 

// Access an Array
console.log(arrayBasic[0]) //sohail
console.log(arrayBasic[1]) // shaikh
console.log(arrayBasic[2]) // 45
console.log(arrayBasic[3]) // true
console.log(arrayBasic[4]) // null
console.log(arrayBasic[5]) // undefined

// Print an Array 
console.log(arrayBasic)
console.log(arrayConstructor)

// Array Property - Length
console.log(arrayBasic.length) // 5

// Typeof Array
console.log(typeof arrayBasic) // object

/* Array Basic Methods */
const colors = ['black', 'white', 'brown', 'red', 'green', 'yellow']
console.log(colors.length) // 6


// Pop Method
let poppedElement = colors.pop()
console.log(poppedElement) // yellow
console.log(colors.length) 

// Push Method
colors.push('blue')
console.log(colors) // ['black', 'white', 'brown', 'red', 'green', 'blue']
let pushedElement = colors.push('purple')
console.log(pushedElement) // it return length - // 7
console.log(colors)

// Shift 
let shiftedElement = colors.shift();
console.log(shiftedElement) // black
console.log(colors.length) // 06

// Unshift 
colors.unshift('pink')
console.log(colors, colors.length) // ['pink', 'white', 'brown', 'red', 'green', 'blue', 'purple'], 7
let unShiftedElement = colors.unshift('cyan')
console.log(unShiftedElement) // 8
console.log(colors)

// Converting an Array to a String
console.log(colors.toString()) // cyan,pink,white,brown,red,green,blue,purple

// at Method -  Accessing Element
// cyan,pink,white,brown,red,green,blue,purple
console.log(colors.at(0)) // cyan
console.log(colors.at(1)) // pink
console.log(colors.at(2)) // white
console.log(colors.at(3)) // brown
console.log(colors.at(4)) // red
console.log(colors.at(5)) // green
console.log(colors.at(6)) // blue
console.log(colors.at(7)) // purple
console.log(colors.at(8)) // undefined
console.log(colors.at(-2)) // green
console.log(colors.at(-5)) // brown


// Join Method
console.log(colors.join()) // cyan,pink,white,brown,red,green,blue,purple
console.log(colors.join('')) // cyanpinkwhitebrownredgreenbluepurple
console.log(colors.join('*')) // cyan*pink*white*brown*red*green*blue*purple
console.log(colors.join('|')) // cyan|pink|white|brown|red|green|blue|purple

// Concat Method
const newColors = ['orange', 'violet', 'black', 'lavender', 'reddish brown']
console.log(colors, newColors)
let concatenatedColors = colors.concat(newColors)
console.log(concatenatedColors, concatenatedColors.length) // ['cyan','pink','white','brown','red','green','blue','purple', 'orange', 'violet', 'black', 'lavender', 'reddish brown']  13

const concatAllArrays = arrayBasic.concat(arrayConstructor, colors, newColors)
console.log(concatAllArrays, concatAllArrays.length) // 20


// Flat Method
const nestedArrays =  [[1,2],[3,4],[5,6], [7,8,9], [10,11, [12,13], [14, 15], [16, 17]]]
console.log(nestedArrays)
console.log(nestedArrays.flat())
console.log(nestedArrays.flat(2))
console.log(nestedArrays.flat(Infinity))

// Splice Method
const newColors2 = concatenatedColors;
console.log(newColors2, newColors2.length)
newColors2.splice(2, 3, 'sky blue')
console.log(newColors2, newColors2.length)
newColors2.splice(3, 0, 'navy blue' )
console.log(newColors2, newColors2.length)

// toSpliced Method
console.log(newColors2)

// Slice Method
console.log(newColors2.slice(0, 3)) // cyan, pink, sky blue
console.log(newColors2.slice(6, 10)) // purple, orange, violet, black
console.log(newColors2.slice(6)) // purple, orange, violet, black, lavender, reddish brown