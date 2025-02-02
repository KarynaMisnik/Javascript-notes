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

/*
CHECK THE TEXT

To create a variable with string value, first declare a variable.  
For now we will use let to do so. To assign a variable to a value the equation sign is used. 
String must be in double or single quatoes. 
console.log with a variable name in parentheses will display the variable in the console. 

If we assign a numeric value to a variable we don't need parentheses. 

Boolean varaiables have only two values: true and false, and they must not be in parentheses. 
Boolean values are used mostly with logical operators in if-statements to check if a variable is true or false. 

*/

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

// modulo (remainder of division)
result = num_three / num_one;
console.log(num_two + " % " + num_one + " = " + result);

/*
Add variables a, b, c with values 5, 10 and 15. 


Use different arithmetic operators and print results into console
*/
