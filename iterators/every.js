// every.js
/* .every() executes a function for each array element.
   .every() returns true if the function returns true for all elements.
   .every() returns false if the function returns false for one element. */

   const interestingWords = [ 'unique', 'uncanny', 'oxymoron' ];

   console.log(interestingWords.every((word) => {
     return word.length > 5;
   } ));
   