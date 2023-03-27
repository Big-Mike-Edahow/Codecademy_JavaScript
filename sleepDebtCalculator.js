// sleepDebtCalculator.js
/* The program will determine the actual and ideal
   hours of sleep for each night of the last week.
   Finally, it will calculate, in hours, how far
   you are from your weekly sleep goal. */

   function getSleepHours(day) {
    switch (day) {
      case "Monday":
        return 8;
        break;
      case "Tuesday":
        return 7;
        break;
      case "Wednesday":
        return 9;
        break;
      case "Thursday":
        return 6;
        break;
      case "Friday":
        return 8;
        break;
      case "Saturday":
        return 5;
        break;
      case "Sunday":
        return 9;
        break;
    }
  }
  
  function getActualSleepHours() {
    const actualSleepHours =
      getSleepHours("Monday") +
      getSleepHours("Tuesday") +
      getSleepHours("Wednesday") +
      getSleepHours("Thursday") +
      getSleepHours("Friday") +
      getSleepHours("Saturday") +
      getSleepHours("Sunday");
  
    return actualSleepHours;
  }
  
  function getIdealSleepHours() {
    const idealHours = 8 * 7;
    return idealHours;
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    console.log(`Your ideal sleep hours are: ${idealSleepHours}.\n`);
    console.log(`Your actual sleep hours are: ${actualSleepHours}.\n`);
  
    if (idealSleepHours === actualSleepHours) {
      console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You got more sleep than you needed.");
      console.log(
        `You slept an extra ${actualSleepHours - idealSleepHours} hours.`
      );
    } else {
      console.log("You should get some rest.");
      console.log(
        `You need to sleep an extra ${idealSleepHours - actualSleepHours} hours.`
      );
    }
  }
  
  calculateSleepDebt();
  