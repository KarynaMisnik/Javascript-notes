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

/* Arithmetical operators in JS work similarly to opertors in math. "+" adds numeric values to each other, 
with "-" we substract one numeric value from another, "*" is used for multiplacation and "/" for division. 
In comparison  to, for example C programming, JS doesn't care about type of variable. 
If you need to divide digits knowing that the result will not be round, JS will take care of it and return 
float even if your numeric values were whole numbers. 

Modulus ....

*/

/* USING MATH OBJECT Math.PI */

let diameter = 3;
let radius = diameter / 2;
let area = Math.PI * radius ** 2;
console.log("The area of a circle with diameter " + diameter + " is: " + area);
