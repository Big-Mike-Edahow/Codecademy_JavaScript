// nested_objects.js
/* In application code, objects are often nested—
   an object might have another object as a property
   which in turn could have a property that’s an
   array of even more objects! */

let spaceship = {
  passengers: [{ name: "Space Dog" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

// Assign to variable capFave the Captain's favorite food
let capFave = spaceship.crew.captain["favorite foods"][0];
console.log(capFave);

/* Make at least one passenger object in the array that
   has at least one key-value pair in it. */
let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);
