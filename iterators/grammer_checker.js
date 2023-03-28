// grammer_checker.js
// Improve the story using JavaScript iterator methods.

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Variable initializations
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Find the wordcount of our story
let count = 0;
storyWords.forEach((word) => {
  count += 1;
});

// Filter out the unnecessary words
storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
});

// Correct the misspelled words
storyWords = storyWords.map(word => {
  if (word === misspelledWord){
    return 'beautiful';
  }
  else {
    return word;
  }
});

// Find out the index of the bad word
const badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});

// Replace the bad word with 'really'
storyWords[badWordIndex] = 'really';

// Check to see if any words are longer than 10 chars
const lengthCheck = storyWords.every(word => {
     return word.length <= 10;
   });

// Find the index of the word that is longer than 10 chars
const longWordIndex = storyWords.findIndex(word => {
  return word.length > 10;
});

// Replace the word that is longer than 10 chars with 'stunning'
storyWords.splice(longWordIndex, 1, 'stunning');

// Log the grammer checked story to the console
console.log(storyWords.join(" "));