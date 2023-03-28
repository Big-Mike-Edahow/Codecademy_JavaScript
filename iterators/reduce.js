// reduce.js
/* .reduce() executes a reducer function for array element.
   .reduce() returns a single value: the function's accumulated result. */

   const newNumbers = [1, 3, 5, 7];

   /* Provide .reduce with an argument of a callback function. The callback
   function has two parameters. The first parameter is accumulator and the
   second parameter is currentValue. */
   const newSum = newNumbers.reduce((accumulator, currentValue) => {
     console.log("The value of accumulator: ", accumulator);
     console.log("The value of currentValue: ", currentValue);
     return accumulator + currentValue;
   }, 10); // Add a second argument of 10 to .reduce().
           // The second argument acts as an initial value for the accumulator.
           
   console.log(newSum);
   