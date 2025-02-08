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

/* array method: push()  */
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

/* array method: pop() */
let fruits_two = ["apple", "banana", "orange"];
let lastFruit = fruits_two.pop();
console.log(lastFruit); // 'orange'
console.log(fruits_two); // ['apple', 'banana']
