// secretMessage.js
/* "Programming is not about what you know,
   it is about what you can figure out.
   -2015, Chris Pine, Learn to Program" */

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Remove the last string of the array.
secretMessage.pop();

// Log the length of the array.
console.log(secretMessage.length);

// Add the words 'to' and 'Program' to the end of the array.
secretMessage.push("to", "Program");

// Change the word 'easily' to 'right' by accessing the index and replacing it.
secretMessage[7] = "right";

// Remove the first string of the array.
secretMessage.shift();

// Add the string 'Programming' to the beginning of the array.
secretMessage.unshift("Programming");

// Use .splice() to remove the strings 'get', 'right', 'the', 'first', 'time,', 
// and replace them with the single string 'know,'.
secretMessage.splice(6, 5, "know,");

// Use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));
