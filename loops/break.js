// break.js
/* The break keyword allows programs to “break”
   out of the loop from within the loop’s block. */

   const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

   for (let i = 0; i < rapperArray.length; i++) {
     console.log(rapperArray[i]);
     if (rapperArray[i] === "Notorious B.I.G.") {
       break;
     }
   }
   
   console.log("And if you don't know, now you know.");
   