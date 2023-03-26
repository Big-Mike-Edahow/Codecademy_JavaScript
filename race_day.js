// race_day.js
/* Register runners for the race and give them
   instructions on race day. */

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;

if (registeredEarly && age >= 18)
{
  raceNumber += 1000;
}

if (registeredEarly && age >= 18)
{
  console.log(`Race number: ${raceNumber}, your race will start at 9:30am.`);
}
else if (!registeredEarly && age >= 18)
{
  console.log(`Race number: ${raceNumber}, Late adults run at 11:00 am`);
}

if (age < 18)
{
  console.log(`Race number: ${raceNumber}, Youth registrants run at 12:30 pm (regardless of registration).`);
}


