// filter.js
// .filter() creates a new array filled with elements

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

/* Call the .filter() method on randomNumbers to return values that
   are less than 250. Save them to a new array called smallNumbers. */
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

/* Invoke .filter() on the favoriteWords array to return elements that
   have more than 7 characters. Save them to longFavoriteWords. */
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

console.log(longFavoriteWords);
