Arrays are lists that store data in JavaScript.

Arrays are created with brackets [].

Each item inside of an array is at a numbered position, or index, starting at 0.

We can access one item in an array using its index, with syntax like: myArray[0].

We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';

Arrays have a length property (myArray.length), which allows you to see how many items are in an array.

Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.

Arrays have many methods that perform different tasks, such as:

.slice(). Use the .slice() method to return selected elements in an array, as a new array: myArray.slice(first, last+1).

.shift(). Use the .shift() method to remove the first item from an array: myArray.shift().

.unshift(). Use the .unshift() method to add an item to the beginning of an array: myArray.unshift('New Item').

.indexOf(). Use the .indexOf() method to find the index of an element in an array: myArray.indexOf('Item').

You can find additional documentation at the Mozilla Developer Network website.

Some built-in methods are mutating, meaning the method will change the array, while others are not mutating.
You can always check the documentation.

Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable.
However, a variable declared with const cannot be reassigned.

Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.

To access elements in nested arrays chain indices using bracket notation.
