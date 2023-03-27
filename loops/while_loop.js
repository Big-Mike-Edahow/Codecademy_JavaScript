// while_loop.js
/* Create a while loop with a condition that checks
   if the currentCard does not have that value 'spade'. */

const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
