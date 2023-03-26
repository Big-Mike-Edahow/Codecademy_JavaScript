// short-circuit evaluation.js
/* If you combine your knowledge of logical operators,
you can use a short-hand referred to as short-circuit
evaluation. Because logical or statements || check the left-hand
boolean condition first, JavaScript assigns the truthy
value to a variable if the left-hand boolean condition evaluates
to true. */

let tool = "marker"; // tool has a truthy value

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

{
  console.log(`The ${writingUtensil} is mightier than the sword.`);
}
