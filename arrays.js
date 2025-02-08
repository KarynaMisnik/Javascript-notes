/* WORKING WITH ARRAY */

let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
console.log(planets);
console.log(planets.length);
//Print into console first value from the array
console.log("First value from the array: " + planets[0]);
// Print into console third value from the array
console.log("Third value from the array: " + planets[2]);

/* DIFFERENT ARRAY METHODS */

/*Adds one or more elements 
to the end of an array and returns t
he new length of the array.  */
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);
