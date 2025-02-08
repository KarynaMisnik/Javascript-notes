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

/* array method: shift() */
let fruits_three = ["apple", "banana", "orange"];
let firstFruit = fruits_three.shift();
console.log(firstFruit); // 'apple'
console.log(fruits_three); // ['banana', 'orange']
