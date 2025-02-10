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

/* Adds one or more elements to the end of an array 
and returns the new length of the array. */
/* array method: push()  */
let fruits = ["apple", "banana"];
console.log("Before push", fruits);
fruits.push("orange");
console.log("After push", fruits);

/* Removes the last element from an array and returns that element. */
/* array method: pop() */
let fruits_two = ["apple", "banana", "orange"];
let lastFruit = fruits_two.pop();
console.log("Original array: ", fruits_two);
console.log("Pop() method, removes last element: ", lastFruit); // 'orange'
console.log("Array after pop(): ", fruits_two); // ['apple', 'banana']

/* Removes the first element from an array and returns that element. */
/* array method: shift() */
let fruits_three = ["apple", "banana", "orange"];
let firstFruit = fruits_three.shift();
console.log(firstFruit); // 'apple'
console.log(fruits_three); // ['banana', 'orange']

/* Adds one or more elements to the beginning 
of an array and returns the new length of the array. */
/* array method: unshift() */
let fruits_four = ["banana", "orange"];
fruits_four.unshift("apple");
console.log(fruits_four); // ['apple', 'banana', 'orange']

/* Changes the contents of an array by removing or 
replacing existing elements and/or adding new elements in place. *
/* array method: splice() */
let fruits_five = ["apple", "banana", "orange"];
fruits_five.splice(1, 0, "grape", "kiwi");
console.log(fruits_five); // ['apple', 'grape', 'kiwi', 'banana', 'orange']

/* Returns a shallow copy of a portion of an array 
into a new array object selected from start to end */
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

/* array method: map() */
let numbers = [1, 2, 3];
let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6]

/* array method: filter() */
let numbers_two = [1, 2, 3, 4, 5];
let evenNumbers = numbers_two.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
