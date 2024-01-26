// String Length Property
console.log("***********String  Property***********");
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
console.log(`The Length of the Alphabets are ${alphabets.length}`);

console.log("***********String Methods***********");
// Extracting String Characters

let extractStringCharacters = "Sohail";
console.log(extractStringCharacters.charAt(0)); // 0
console.log(extractStringCharacters.charCodeAt(0)); // Code - 111
console.log(extractStringCharacters.at(5)); // - l
console.log(extractStringCharacters.at(-1)); // - l
console.log(extractStringCharacters[2]); // - h

// Extracting String Parts
let extractStringParts = "Sohail Shaikh";
console.log(extractStringParts.slice(0, 6)); // Sohail
console.log(extractStringParts.slice(7)); // Shaikh
console.log(extractStringParts.slice(2, 10)); // hail Sha

// Casing
let caseText = "Sohail Shaikh";
console.log(`Uppercase Text of ${caseText} will be ${caseText.toUpperCase()}`); // SOHAIL SHAIKH
console.log(`Lowercase Text of ${caseText} will be ${caseText.toLowerCase()}`); // sohailshaikh

// String Concat
let concatString = "Sohail";
console.log(concatString.concat(" Shaikh")); // Sohail Shaikh
console.log("Shaikh ".concat(concatString)); // Shaikh Sohail
let concatString2 = " Khan";
console.log(concatString.concat(concatString2)); // Sohail Khan

// Trim
let trimString = "          Sohail Shaikh       ";
console.log(trimString); //           Sohail Shaikh
console.log(trimString.trim()); // Sohail Shaikh
console.log(trimString.trimStart()); // Sohail Shaikh------
console.log(trimString.trimEnd()); // Sohail Shaikh------

// padStart and padEnd
let padString = "2498";
console.log(padString.padStart(10, "x")); // xxxxxx2498
console.log(padString.padEnd(10, "x")); // xxxx

// Repeat
let repeatString = "Happy! ";
console.log(`Today I am ${repeatString.repeat(3)}`); //

// Replace
let replaceString = "Please Visit Microsoft and Microsoft";
console.log(replaceString.replace("Microsoft", "Amazon"));

// Replace All
let replaceStringAll = "I Love my cats and cats so much";
console.log(replaceStringAll.replaceAll("cats", "dogs"));

// Split
let splitSting = "dogs cats lion tiger elephant";
console.log(typeof splitSting);
// console.log(splitSting.split(","))
let split2 = splitSting.split(" ");
console.log(split2, typeof split2); // object

//JavaScript String Search
console.log("***********String Search Methods***********");

// IndexOf() - returns index

let indexOfString = "Please find where find occurs";
console.log(
  `The length of a string is ${
    indexOfString.length
  } and First Index Of String is ${indexOfString.indexOf("find")}`,
); // 7
console.log(
  `If there is no value is found in string ${indexOfString.indexOf("sohail")}`,
); // -1
// console.log(indexOfString.indexOf(/find/g) // - Error Throw regex not accept

// lastIndexOf() - returns index

let lastIndexOfString = "Please find where find occurs";
console.log(
  `The length of a string is ${
    lastIndexOfString.length
  } and Last Index Of String is ${lastIndexOfString.lastIndexOf("find")}`,
); // 18
console.log(
  `If there is no value is found in string ${lastIndexOfString.lastIndexOf(
    "sohail",
  )}`,
); // -1

// search() - returns index

let searchString = "Please find where find occurs";
console.log(`The value returns the index: ${searchString.search("find")}`); // 7
console.log(
  `The value returns the index with regex : ${searchString.search(/find/)}`,
); // 7
console.log(
  `The value returns the index with global regex: ${searchString.search(
    /find/g,
  )}`,
); // 7
console.log(
  `The value returns the index with global and case insensitive:${searchString.search(
    /find/gi,
  )}`,
); // 7

// Match() - returns exact value match

let matchString = "The rain in SPAIN stays mainly in the plain";
console.log(
  `Normal Match Search of ain (1 return only) : ${matchString.match("ain")}`,
);
console.log(
  `Regex Match Search of ain (1 return only) : ${matchString.match(/ain/)}`,
);
console.log(
  `Regex Global Match Search of ain (All match returns) : ${matchString.match(
    /ain/g,
  )}`,
);
console.log(
  `Regex Global and Case Insensitive Match Search of ain (All match returns) : ${matchString.match(
    /ain/gi,
  )}`,
);

// Includes() - Returns True or false
console.log('Includes::')
let includesString = 'Helllo World, Welcome to Javascript'
console.log(includesString.includes('World')) // true
console.log(includesString.includes('world')) // false
console.log(includesString.includes('World', 5)) // true
console.log(includesString.includes('World', 12)) // false

// startsWith() -  Returns True or false
console.log('Starts With::')
let startsWithString = 'Hello World, Welcome to Javascript';
console.log(startsWithString.startsWith('Hello')) // true
console.log(startsWithString.startsWith('hello')) // false
console.log(startsWithString.startsWith('World')) // false
console.log(startsWithString.startsWith('World', 6)) // true

// endsWith() -  Returns True or False
console.log('Ends With::')
let endsWithString = 'Hello World, Welcome to Javascript';
console.log(endsWithString.endsWith('Javascript')) // true
console.log(endsWithString.endsWith('javascript')) // false
console.log(endsWithString.endsWith('to')) // false
console.log(endsWithString.endsWith('to', 23)) // true