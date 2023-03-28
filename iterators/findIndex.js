// findIndex.js
/* .findIndex() executes a function for each array element.
   .findIndex() returns the index of the first element that passes a test.
   .findIndex() method returns -1 if no match is found. */

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

/* Invoke .findIndex() on the animals array to find the index of the
   element that has the value 'elephant' and save the returned value to a
   const variable named foundAnimal. */
const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
    });
console.log(foundAnimal);
   
const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's';
    });
console.log(startsWithS);
   