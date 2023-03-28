// access_object_properties.js

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

const crewCount = spaceship.numCrew;
console.log(crewCount);

const planetArray = spaceship.flightPath;
console.log(planetArray);
