// some.js
/* .some() checks if any array elements pass a test (provided as a callback function).
   .some() executes the callback function once for each array element.
   .some() returns true (and stops) if it returns true for one of the array elements. */

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

const foundWord = words.some((word) => {
  return word.length < 6;
});
console.log(foundWord);
