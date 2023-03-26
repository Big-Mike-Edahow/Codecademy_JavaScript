// magic_8.js
/* The user will be able to input a question,
   then our program will output a random fortune. */

// Variable initialization and declaration
let userName = "Mike";
let userQuestion = "Will I get a job soon?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName 
? console.log(`Hello ${userName}!\n`)
: console.log("Hello!");

console.log(`${userName} asks: ${userQuestion}\n`);

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log('Your future is uncertain.');
    break;
}

console.log(`The Magic 8-Ball says: ${eightBall}.`);
