// truthy-and-falsy.js
/* Truthy and Falsy
Let’s consider how non-boolean data types,
like strings or numbers, are evaluated when
checked inside a condition.

Sometimes, you’ll want to check if a variable
exists and you won’t necessarily want it to
equal a specific value — you’ll only check to
see if the variable has been assigned a value. */

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}
