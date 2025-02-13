<div id="user-content-toc"><ul><summary list-style-type: none;>

## Javascript Study Notes 📓

</ul></summary>
</div>

## Intro

This repository contains my personal notes and code snippets about JavaScript, compiled as I study and explore the language. It covers various aspects of JavaScript, from basic syntax and data structures to more advanced topics like asynchronous programming, object-oriented principles, and modern ES6+ features.

During my study path, I used several sources of knowledge, including online tutorials, documentation, books, and coding exercises. These notes are a reflection of the information I gathered and the insights I gained from these resources. Such as:

<div>
<img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black' />
<img src='https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white' />
<img src='https://img.shields.io/static/v1?style=for-the-badge&message=Wikipedia&color=000000&logo=Wikipedia&logoColor=FFFFFF&label=' />
<img src='https://img.shields.io/static/v1?style=for-the-badge&message=Mozilla&color=000000&logo=Mozilla&logoColor=FFFFFF&label=' />
<img src='https://img.shields.io/static/v1?style=for-the-badge&message=W3Schools&color=04AA6D&logo=W3Schools&logoColor=FFFFFF&label=' />
<img src='https://img.shields.io/static/v1?style=for-the-badge&message=YouTube&color=FF0000&logo=YouTube&logoColor=FFFFFF&label=' />
</div>

<h4>👀To see Practical Examples go to: <a href="https://karynamisnik.github.io/Javascript-notes/index.html">here</a></h4>

## Menu

- [Intro](#intro)

* [JS Definition](#js-definition)
* [Javascript Versions](#javascript-versions)
* [How to run JavaScript](#how-to-run-javascript)
* [Hoisting](#hoisting)
* [Data Types](#data-types)
  - [string](#string)
  - [undefined](#undefined)
  - [number](#number)
  - [bigint](#bigint)
  - [boolean](#boolean)
  - [null](#null)
  - [symbol](#symbol)
* [Naming Convention](#naming-convention)
* [Object](#object)
* [Basics of JavaScript, Practical Examples](#basics-of-javascript-practical-examples)

- [Hello World](#hello-world)
- [Alert-dialog](#alert-dialog)
- [Using Date(), Math()](#using-date-math)
- [Manipulating DOM](#manipulating-dom)
- [Variables](#variables)

## JS Definition

JavaScript has various definitions that can provide a better understanding of its usage and execution. Here are some of them.

**Javascript** - a high-level, object oriented, multi-paradigm programming language.

<p>Let's look closely at each part of this definition.</p>

- high-level: we don't really worry about any complex things behind the scenes (eg.: memory management);
- object-oriented: based on objects, helps to store and manipulate data;
- multi-paradigm: means here more flexiable, allows to use different styles of programming;
- programming language: gives instructions to computer to do different things;

**Javascript** - a lightweight, interpreted, object-oriented language with first class functions; a scripting language for web pages.

- lightweight: easy to implement, has a small memory footprint;
- interpreted: no compilation instruction, it is executed directly;
- object-oriented: based on objects, helps to store and manipulate data;
- first-class: functions can be assigned to variables, returned from other functions, etc., offering more flexibility;
- scripting language: instructions are written for a runtime environment (e.g., web browsers);

**Javascript** - synchronous, single-threaded programming language.

- synchronous: executes one command at a time;
- single-threaded: means when one line finishes, it executes the next one.

> **Names:** <a href='https://en.wikipedia.org/wiki/Brendan_Eich'>Brendan Eich</a> is an American computer programmer and technology executive, created the JavaScript programming language. He is a co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.

**JavaScript** (previously Mocha and LiveScript) - was created roughly in 10 days(in **1995**) as a response to the competitive <a href='https://en.wikipedia.org/wiki/Browser_wars'>"Browser wars"</a>. Its development aimed to enable client-side scripting in web browsers, thus enhancing web functionality and user interaction.

###### Why "Java" in Javascript?

Java was extremely popular at that time, and <a href='https://en.wikipedia.org/wiki/Netscape'>**Netscape**</a>, the company behind JavaScript, wanted to capitalize on Java's popularity. Despite the name, JavaScript and Java are two distinct languages with different syntax, semantics and purposes. The inclusion of "Java" in the name was primarily a marketing decision and does not imply a direct relationship between the two languages.

## JavaScript versions

ECMAScript is the official name of the language. Since 2016, versions are named by year (ECMAScript 2016, 2017, 2018, 2019, 2020).

| Version |                               Official Name                               | Description                                                                                                                                                                                   |
| :-----: | :-----------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ES1   |                            ECMAScript 1 (1997)                            | The first standardized version of JavaScript, published as ECMA-262.                                                                                                                          |
|   ES2   |                            ECMAScript 2 (1998)                            | Minor revision to align with ISO/IEC standards.                                                                                                                                               |
|   ES3   |                            ECMAScript 3 (1999)                            | Added: <ul><li>regular expressions</li><li>try/catch</li><li>switch</li><li>do-while</li></ul>                                                                                                |
|   ES4   |                               ECMAScript 4                                | Never released                                                                                                                                                                                |
|   ES5   | <a href='https://www.w3schools.com/js/js_es5.asp'>ECMAScript 5 (2009)</a> | Added: <ul><li> "strict mode"</li><li>JSON support</li><li>String.trim()</li><li>Array.isArray()</li><li>Array iteration methods</li></ul> Allows trailing commas for object literals         |
|   ES6   |   <a href='https://www.w3schools.com/js/js_es6.asp'>ECMAScript 2015</a>   | Added: <ul><li>let and const</li><li>default parameter values</li><li>Array.find()</li><li>Array.findIndex()</li><li>classes</li><li>modules</li><li>destructuring</li><li>promises</li></ul> |
|    -    |  <a href='https://www.w3schools.com/js/js_2016.asp'>ECMAScript 2016</a>   | Added: <ul><li>exponential operator (\*\*)</li><li>Array.includes() </li></ul>                                                                                                                |
|    -    |  <a href='https://www.w3schools.com/js/js_2017.asp'>ECMAScript 2017</a>   | Added: <ul><li>string padding</li><li>Object.entries()</li><li>Object.values()</li><li>async functions</li><li>shared memory</li></ul> Allows trailing commas for function parameters         |
|    -    |  <a href='https://www.w3schools.com/js/js_2018.asp'>ECMAScript 2018</a>   | Added: <ul><li>rest / spread properties</li><li> asynchronous iteration</li><li>Promise.finally()</li><li>more RegExp </li></ul>                                                              |
|    -    |  <a href='https://www.w3schools.com/js/js_2019.asp'>ECMAScript 2019</a>   | Introduced: <ul><li>String.trimStart()</li><li>String.trimEnd()</li><li>Array.flat()</li><li>Object.fromEntries</li><li>Optional catch binding </li></ul>                                     |
|    -    |  <a href='https://www.w3schools.com/js/js_2020.asp'>ECMAScript 2020</a>   | Included: <ul><li>BigInt</li><li>dynamic import</li><li>Promise.allSettled()</li><li>globalThis</li><li> nullish coalescing operator (??)</li></ul>                                           |
|    -    |                              ECMAScript 2021                              | Added: <ul><li>logical assignment operators</li><li>String.prototype.replaceAll()</li><li>weak references</li></ul>                                                                           |
|    -    |                              ECMAScript 2022                              | Introduced: <ul><li>top-level awai</li><li>Array.prototype.at()</li><li>Object.hasOwn()</li></ul>                                                                                             |
|    -    |                              ECMAScript 2023                              | Added: <ul><li>Array.prototype.findLast()</li><li>Array.prototype.findLastIndex()</li><li>Symbol.prototype.description</li></ul>                                                              |

## How to run JavaScript

Shortly, while code is being executed the whole process is held inside **global execution context** which is divided into two phases: **memory phase** and **code execution phase**. Let's dive deeper in these terms.

Code example:<br>

<code>var n = 2;
function square(num){
var ans = num \* num;
return ans;
}
var square2 = square(n);
var square4 = square(n);</code>

In first phase (memory phase) <code>n</code>
is just allocated and <code>n</code> will be undefined, while in the second phase(code execution phase) <code>n</code> will be equal to <code>2</code>

Code execution phase goes line by line but if it faces a function, it ignores it and goes to the next line because a function is fully allocated in the first phase

**Code execution phase** - it executes after a variable allocation made in memory creation phase.

Code execution phase while running the code and its functions, creates two components: memory and code components.
Inside these components there will be also two phases: memory creation phase and code execution phase.

## Hoisting

## Data Types

## Naming Convention

## Object

## Functions

## Basics of JavaScript, Practical Examples

#### 'Hello World'

To print a simple first JavaScript program in the console and understand how HTML and JavaScript work together, we start by creating an HTML file. First, we need to link the HTML file to a JavaScript file. This is done by adding a **<script>** tag inside the **<body>** of the HTML file.

Next, open a JavaScript file and write:

<code>console.log("Hello, World!");</code>

An HTML file with the **.html** extension can be easily opened by clicking on it. The page will appear blank because our script only logs output to the console. To see the result, open the browser’s developer tools by pressing F12 and navigate to the Console tab.

#### Alert-dialog

To display the same result in a popup window, similar to an alert dialog, use the <code>alert()</code> function in your JavaScript file:

<code>alert("Hello World");</code>

This will show the phrase as a browser notification-style popup.

#### Using Date(), Math()

**Date()** is a <ins>constructor</ins> function in JavaScript. You can use <code>new Date()</code> to create a new date object. It is useful for operating with time.

<code>console.log(Date()); // Outputs the current date as a string, not an object</code>

> Note: Calling **Date()** without new returns the current date and time as a string instead of an object.

**Math()** is a built-in <insa>object</insa> in JavaScript. It provides mathematical constants and functions, such as **Math.PI**, **Math.sqrt()**, and **Math.random()**.

<code>console.log(Math.random()); // Outputs a random number between 0 and 1</code>

> Note: Unlike many other objects, Math is not a ~~constructor~~, meaning you can't create instances of it using <code>new Math()</code>.

#### Manipulating DOM

First, what is DOM? The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">[More...]</a>

To manipulate the DOM (Document Object Model) using JavaScript, follow these steps:

<ins>1. Create an &lt;h1&gt; Element in HTML</ins>

First, create an &lt;h1&gt; tag with some text between the tags and assign it a unique id:

<code>&lt;h1&gt; id="text">Milky Way 🌌 &lt;h1&gt;</code>

> Note: HTML file

<ins>2. Access the \*&lt;h1&gt; Element in JavaScript</ins>

In your JavaScript file, declare a variable and assign it to the content of the &lt;h1&gt; tag by referencing its id:

<code>let printingText = document.getElementById("text").innerHTML;
console.log(printingText);
</code>

> Note: JS file

<ins>3. Manipulate the Content of a Button</ins>

Similarly, you can manipulate the content of a button by using the &lt;input&gt; tag with **type="button"**.

<code>&lt;input type="button" id="btn-one" &gt;</code>

> Note: html file

<ins>4. Assign Text to the Button</ins>

In your JavaScript file, you can set the button's text using its id. You don't need to add content directly in the HTML, as you can set the button's text through JavaScript:

<code>document.getElementById("your_id_for_input").value = "Click me";</code>

> Note: JS file

#### Variables

Before working with variables, there are important things to remember.

Always declare variables using **let** or **const**. The **var** keyword is mostly used for supporting old code and is generally <ins>avoided</ins> today. To understand why var is no longer recommended, check out hoisting.
[Hoisting](#hoisting)

> Reminder: Variables declared with **let** can be <ins>reassigned</ins>, while **const** cannot (it remains constant).

Always assign a value when declaring a variable; otherwise, it will be **undefined**.

Use meaningful variable names. Variable names should be short but informative, giving a clear hint about their purpose. Following the JavaScript Naming Conventions[Naming Convention](#naming-convention) is essential. Otherwise, the program might not recognize the variable, leading to errors or unexpected behavior.

To create a variable with a string value, first declare a variable.

For now, we will use let to do so. To assign a value to a variable, use the equals sign **=**.
A string must be enclosed in double (") or single (') quotes.

To display a variable in the console, use <code>console.log(variableName)</code>.

If we assign a **numeric** value to a variable, quotes are not ~~needed~~.

A **Boolean** variable has only two values: **true** or **false**. Boolean values should <ins>not be enclosed</ins> in quotes.
They are mostly used with logical operators in if statements to check conditions.<br>

<code>let firstName = "Sponge Bob";
console.log(firstName);
let lastName = "Squarepants";
console.log(lastName);
let age = 38;
console.log(age);
let year = 2025;
console.log(year);
let isStudent = true;
console.log(isStudent);
console.log(`My name is ${firstName} ${lastName} and 
I am ${age} years old. At the moment I'm a student: ${isStudent}`);
</code>

**Modulus %**

The modulus operator **%** in JavaScript returns the <ins>remainder</ins> of a division. It’s useful for checking even/odd numbers, looping patterns, and cyclic behaviors. If the remainder is <code>0</code>, the dividend is perfectly divisible by the divisor.<br>

<code>let studentsScore = 6;
let maxScore = 19;
let scoreResult = studentsScore % maxScore;
console.log(studentsScore + " % " + maxScore + " = " + Math.round(scoreResult));</code>

**➗ Arithmetic operators**

Arithmetic operators in JavaScript work similarly to those in mathematics.

| operator | function                                 |
| -------- | ---------------------------------------- |
| +        | adds numeric values                      |
| -        | subtracts one numeric value from another |
| \*       | multiplies values                        |
| /        | divides values                           |

Unlike languages like C, JavaScript does not require explicit type declarations for variables.
If you divide two whole numbers and the result is not a whole number, JavaScript automatically returns a float instead of rounding the result.
