// kelvin.js
// Kelvin Weather

// The forecast today is 293 Kelvin
const kelvin = 293;

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

/* The .floor method from the Math object will
   round down the result of the Fahrenheit equation. */
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

