// iterators.js

/* .forEach() calls a function for each element in an array.
   .forEach() is not executed for empty elements.

   .map() creates a new array from calling a function
    for every array element.
   .map() does not execute the function for empty elements.
   .map() does not change the original array.

   .filter() creates a new array filled with elements
   that pass a test provided by a function.
   .filter() does not execute the function for empty elements.
   .filter() does not change the original array. */

   const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

   artists.forEach((artist) => {
     console.log(artist + " is one of my favorite artists.");
   });
   
   const numbers = [1, 2, 3, 4, 5];
   
   const squareNumbers = numbers.map((number) => {
     return number * number;
   });
   
   console.log(squareNumbers);
   
   const things = ["desk", "chair", 5, "backpack", 3.14, 100];
   
   const onlyNumbers = things.filter((thing) => {
     return typeof thing === "number";
   });
   
   console.log(onlyNumbers);
   