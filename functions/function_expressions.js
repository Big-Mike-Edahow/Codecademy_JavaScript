// function_expressions.js
/* A function with no name is called an
   anonymous function. A function expression
   is often stored in a variable in order to
   refer to it. */

const plantNeedsWater = function(day)
{
  if (day === 'Wednesday')
  {
    return true;
  }
  else return false;
}

console.log(plantNeedsWater('Tuesday'));
