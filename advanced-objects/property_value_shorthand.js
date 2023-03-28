// property_value_shorthand.js
/* we can use a destructuring technique,
   called Property Value Shorthand,
   to save ourselves some keystrokes. */

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);
