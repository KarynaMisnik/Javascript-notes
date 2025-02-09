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

/* array method: unshift() */
let fruits_four = ["banana", "orange"];
fruits_four.unshift("apple");
console.log(fruits_four); // ['apple', 'banana', 'orange']

/* array method: splice() */
let fruits_five = ["apple", "banana", "orange"];
fruits_five.splice(1, 0, "grape", "kiwi");
console.log(fruits_five); // ['apple', 'grape', 'kiwi', 'banana', 'orange']

/* array method: slice() */
let fruits_six = ["apple", "banana", "orange"];
let citrus = fruits_six.slice(1);
console.log(citrus); // ['banana', 'orange']

/* array method: concat() */
let fruits_seven = ["apple", "banana"];
let vegetables = ["carrot", "potato"];
let fruitsAndVegetables = fruits_seven.concat(vegetables);
console.log(fruitsAndVegetables); // ['apple', 'banana', 'carrot', 'potato']

/* array method: indexOf() */
let fruits_eight = ["apple", "banana", "orange"];
console.log(fruits_eight.indexOf("banana")); // 1

/* array method: lastIndexOf() */
let fruits_nine = ["apple", "banana", "pear", "orange"];
console.log(fruits_nine.lastIndexOf("banana")); // 2

/* array method: forEach() */
let fruits_ten = ["apple", "banana", "orange"];
fruits_ten.forEach(function (fruit) {
  console.log(fruit);
});
