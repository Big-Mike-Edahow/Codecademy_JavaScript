// object_property_assign.js

// Initialize the spaceship object
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Change the 'color' property to 'glorious gold'
spaceship.color = "glorious gold";

// Add a new property, 'numEngines', and assign it a value 1-10
spaceship.numEngines = Math.floor(Math.random() * 11);

// Delete the 'Secret Mission' property
delete spaceship["Secret Mission"];
