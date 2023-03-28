// map.js
// .map() creates a new array from calling a function for every array element.

const animals = [ "Hen", "elephant", "llama", "leopard", "ostrich", "Whale", "octopus", "rabbit", "lion", "dog", ];

// Map the first element of each item in animals to secretMessage
const secretMessage = animals.map((animal) => {
  return animal[0];
});

// Turn the secretMessage array into a string with no spaces
console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Map each item in bigNumbers and divide it by 100
const smallNumbers = bigNumbers.map((number) => {
  return number / 100;
})

// Log the new array smallNumbers to the console
console.log(smallNumbers);
