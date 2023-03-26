// ternary.js
/* Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else statements, ternary operators can be used for
conditions which evaluate to true or false. */

isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = "Hate That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");
