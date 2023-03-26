// switch.js
/* The switch keyword initiates the statement and is
followed by ( ... ), which contains the value that
each case will compare. Inside the block, { ... },
there are multiple cases. The case keyword checks if
the expression matches the specified value that comes
after it. */

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
