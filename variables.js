/* WORKING WITH VARIABLES */

/* DECLARE VARIABLES AND PRINT THEM IN CONSOLE: STRING, NUMERIC, BOOLEAN */

let firstName = "Sponge Bob";
console.log(firstName);

let lastName = "Squarepants";
console.log(lastName);

let age = 38;
console.log(age);

let year = 2025;
console.log(year);

let isStudent = true;
console.log(isStudent);

console.log(
  `My name is ${firstName} ${lastName} and I am ${age} years old. At the moment I'm a student: ${isStudent}`
);

/* USING ARITHMETIC OPERATORS */

let num_one = 5;
let num_two = 10;
let num_three = 15;
let result;

// addition
result = num_one + num_two + num_three;
console.log(num_one + " + " + num_two + " + " + num_three + " = " + result);

// subtraction
result = num_three - num_one - num_two;
console.log(num_three + " - " + num_one + " - " + num_two + " = " + result);

// multiplication
result = num_one * num_two * num_three;
console.log(num_one + " * " + num_two + " * " + num_three + " = " + result);

//division
result = num_three / num_one / num_two;
console.log(num_three + " / " + num_one + " / " + num_two + " = " + result);

/* Arithmetical operators in JS work similarly to opertors in math. "+" adds numeric values to each other, 
with "-" we substract one numeric value from another, "*" is used for multiplacation and "/" for division. 
In comparison  to, for example C programming, JS doesn't care about type of variable. 
If you need to divide digits knowing that the result will not be round, JS will take care of it and return 
float even if your numeric values were whole numbers. 

Modulus ....

*/

// USING MODULUS (REMINDER OF DIVISION) AND  MATH OBJECT Math.round

let studentsScore = 6;
let maxScore = 19;
let scoreResult = studentsScore % maxScore;
console.log(studentsScore + " % " + maxScore + " = " + Math.round(scoreResult));

/* USING MATH OBJECT Math.PI */

let diameter = 3;
let radius = diameter / 2;
let area = Math.PI * radius ** 2;
console.log("The area of a circle with diameter " + diameter + " is: " + area);

/* MORE EXAMPLES: CONVERTING TEMPERATURE USING FORMULA */

let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
console.log(
  "Temperature: " +
    celsiusTemperature +
    " °C is " +
    fahrenheitTemperature +
    " °F."
);
