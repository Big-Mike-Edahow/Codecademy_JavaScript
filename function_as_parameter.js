// function_as_parameter.js
/* HIGHER-ORDER FUNCTIONS
  Functions as Parameters
  As you know, a parameter is a placeholder for the data that gets
  passed into a function. Since functions can behave like any
  other type of data in JavaScript, it might not surprise you to
  learn that functions can accept other functions as parameters.
  
  A higher-order function is a function that either accepts
  functions as parameters, returns a function, or both! We call
  functions that get passed in as parameters callback functions.

  Callback functions get invoked during the execution of the
  higher-order function.

  When we invoke a higher-order function, and pass another
  function in as an argument, we don’t invoke the argument
  function.
  
  Invoking it would evaluate to passing in the return value of
  that function call. With callback functions, we pass in the
  function itself by typing the function name without the
  parentheses: */

  const addTwo = (num) => {
    return num + 2;
  };
  
  const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
  
    if (checkA === checkB) {
      return checkB;
    } else {
      return "inconsistent results";
    }
  };
  
  console.log(checkConsistentOutput(addTwo, 8));
  