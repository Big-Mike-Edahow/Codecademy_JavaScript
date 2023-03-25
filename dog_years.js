// dog_years.js
// Dog Years Project

// My age in human years
const myAge = 45;

// The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;

earlyYears *= 10.5;

/* Since we already accounted for the first two years, take
   the myAge variable, and subtract 2 from it. */
let laterYears = myAge - 2;

/* Multiply the laterYears variable by 4 to calculate the
   number of dog years accounted for by your later years. */
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;

/* Write your name as a string, call its built-in method
   .toLowerCase(), and store the result in a variable called myName. */
let myName = "Mike".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

