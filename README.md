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
* [Call Stack](#call-stack)
* [Values and Variables](#values-and-variables)
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

```js
var n = 2;
function square(num){
var ans = num \* num;
return ans;
}
var square2 = square(n);
var square4 = square(n);
```

🧪 🔍 Step 1: Global Execution Context (GEC)

When the JS engine starts, it creates the Global Execution Context, which has two phases:
📌 1️⃣ Memory Creation Phase (a.k.a. Creation Phase, Hoisting Phase)

The engine scans the whole code and allocates memory for:

Variables: initialized to <code>undefined</code>

Function declarations: allocated as actual function objects

Scope: created

At this point:

<code>n → undefined</code>

<code>square → <function object></code>

<code>square2 → undefined</code>

<code>square4 → undefined</code>

📌 2️⃣ Code Execution Phase

Now it actually runs the code line by line, replacing <code>undefined</code> with real values, and executing logic.
Line by line:

✅ <code>var n = 2;</code>

Assigns <code>2</code> to <code>n</code>.

✅ <code>function square(num) {...}</code>

Already allocated in memory; nothing happens here (function declarations are hoisted fully).

✅ <code>var square2 = square(n);</code>

Before assigning to <code>square2</code>, the engine calls <code>square(2)</code>, which creates a new Execution Context for <code>square</code>.

🧪 🔍 Step 2: Function Execution Context (FEC) for <code>square(2)</code>

Every function call creates a new Execution Context, which also has two phases:
📌 1️⃣ Memory Creation Phase

Allocates memory for:

<code>num → 2 (passed as argument)</code>

<code>ans → undefined</code>

📌 2️⃣ Code Execution Phase

Runs: <code>ans = num _ num; → ans = 2 _ 2 = 4</code>

Runs: <code>return ans; → returns 4</code>

This returned value <code>4</code> is assigned to <code>square2</code>.

🧪 🔍 Step 3: Another FEC for <code>square(2)</code>

Same as above. Another separate execution context is created for the second call.

Allocates memory

Assigns <code>num = 2</code>

Computes <code>ans = 4</code>

Returns <code>4</code> → assigned to <code>square4</code>

📝 Final Global Memory

| Identifier | Value    |
| ---------- | -------- |
| n          | 2        |
| square     | function |
| square2    | 4        |
| square4    | 4        |

🧠 🔍 The Call Stack

Every Execution Context is managed via the Call Stack:

When the script starts → GEC is pushed on the stack.

When <code>square()</code> is called → FEC is pushed.

When <code>square()</code> returns → FEC is popped.

Then next <code>square()</code> call happens → another FEC is pushed & popped.

At the end, only GEC remains in the stack.

## Call Stack

🔷 What is the Call Stack?

The Call Stack is a data structure used by the JavaScript engine to keep track of what function is currently running, and what functions to return to once the current one finishes.

It’s called a stack because it works like a stack of plates:

You add to the top (<code>push</code>) when calling a function.

You remove from the top (<code>pop</code>) when a function finishes.

Because JavaScript is **single-threaded** — it can only execute one thing at a time — so it needs to know:
✅ What code is currently running
✅ Where to go back to after a function call

When the script is done, the Global Execution Context also exits, and the stack is empty.

#### Event Listener Example

🔷 It might look like different event listeners have “different stacks” but there is only one call stack.

When you set up multiple event listeners, each one waits for its event to happen.
They don’t immediately execute — they just register **callbacks** in the browser’s Web APIs.
When an event occurs (e.g. click, timeout), its callback is sent to the **task queue** (or microtask queue).

Then, the **event loop** checks:

Is the stack empty?

If yes, it picks the next task from the queue and pushes it on the single stack.

🧪 Example:

```js
document.addEventListener("click", () => console.log("click 1"));
document.addEventListener("click", () => console.log("click 2"));

console.log("end");
```

What happens:

✅ JS starts running the global code:

```js
Call Stack: [Global]
```

✅ Sets up the event listeners → no stack activity here.

✅ Executes <code>console.log('end')</code> → prints <code>end</code>

```js
Call Stack: []
```

✅ Now, the JS engine is idle until an event fires.

When you click:

The browser pushes the first listener callback onto the call stack.

It runs, prints <code>click 1</code>, and the stack is empty again.

Then the browser pushes the second listener callback onto the same stack.

It runs, prints <code>click 2</code>, and the stack is empty again.

🔷 Key takeaway:

🟢 There is always just one single call stack.
🟢 Event listeners just register callbacks — the stack processes them one at a time when the event happens.
🟢 Even if multiple events fire quickly, they still execute one by one, as the event loop feeds them into the same stack.

## Values and Variables

<code>console.log("Hello");</code> - it's a value, the smallest unit which we store in variables.

```js
let firstName = "Jonas";
```

> let firstName - declaring a variable;
> '=' assign a value to a variable;
> 'Jonas' - value;

‼️ **var** is only for maintainig old code, it is not used in modern apps(see why).

🔷 1. What happens at runtime of this snippet of code?

```js
console.log(a);
let a = 10;
var b = 100;
```

When the engine executes this code:

<h3>Step 1: Hoisting</h3>

<code>let a</code> is <ins>hoisted</ins>, but it is placed in the TDZ — it is not initialized yet.

<code>var b</code> is also hoisted, but it’s initialized to <code>undefined</code> immediately.

So before the code executes, the environment looks like this:

```js
a: <uninitialized>  // TDZ
b: undefined
```

<h3>Step 2: Run <code>console.log(a)</code</h3>

At this point:

The variable <code>a</code> exists, because <code>let a</code> has been hoisted.

But it’s in the **Temporal Dead Zone (TDZ)**: from the start of the scope (here: the whole script) until its declaration is executed, any access to <code>a</code> is illegal.

So this line:

```js
console.log(a);
```

throws a <code>ReferenceError</code>:

```js
ReferenceError: Cannot access 'a' before initialization
```

<h3>Step 3: Execution halts</h3>

Because an uncaught error occurs at <code>console.log(a)</code>, the rest of the code (<code>let a = 10;</code> <code>var b = 100;</code>) is not executed.

🔷 2. Why does the TDZ happen?

✅ For <code>let</code> and <code>const</code>, the TDZ exists to prevent using a variable before it is explicitly declared.
✅ It encourages cleaner, more predictable code.
✅ Even though <code>let/const</code> are hoisted, they are not initialized to undefined — unlike <code>var</code>.

## Hoisting

It is a process whereby the interpreter appears to move the declaration of functions, vars, classes or imports to the top of their scope, prior to execution of the code;

Examples:

<table>
  <tr>
    <th>Example 1</th>
    <th>Example 2</th>
    <th>Example 3</th>
  </tr>
<tr>
<td><code>var x = 7;
function getName(){
conole.log("Hello");
}
getName();
console.log(x);
</code>
  </td>
  
<td><code>getName();
  console.log(x);
    var x = 7;
    function getName(){
    console.log("Hello");
    }
</code>
  </td>
  
   <td><code>getName();
    console.log(x);
      function getName(){
      console.log("Hello");
      }
   </code>
  </td>
  </tr>
  <tr>
    <td>Output: <code>Hello, 7</code></td>
    <td>Output: <code>Hello, undefined</code></td>
    <td>Output: <code>Hello</code> Error: 'x' is not defined</td>
  </tr>
</table>

In JS you can get result even before declaration, especially working with functions. Compiler will not show errors. Even before execution of code JS creates Call Stack with Memoty execution phase where variable allocated with undefined value; in case of functions, it stores in memory fully.

**Synopsis:**

- being able to use var's value in its scope before the line it is declared('value hoisting');
- being able to reference var in its scope before line it is declared, without Reference Error, but the value-always undefined;
- the declaration of var causes behavior changes in its scope before the line in which it is declared;
- the side effect of declaration is produced before evaluating; the rest of code that contains it;

## Data Types

A value in JS is <ins>always</ins>:

1. **Object**

```js
let me = { name: "Jonas" };
```

2. **Primitive**

```js
let firstName = "Jonas";
let age = 30;
```

> if a value is not an object, it's primitive

A priitive value is a value that has no properties or methods;
A primitive data type - has primitive value;

Primitive data types:

1. Number;
2. Sttring;
3. Boolean(logic type);
4. Undefined(variable that is not yet defined, empty);
5. Null;
6. Symbol(unique value);
7. BigInt(large number);

JS has dynamic typing: we don't have to define data types of value stored in variable; data types are determined automatically.

> value has type NOT variable;

|                     Undefined                     |                                       not defined                                       |
| :-----------------------------------------------: | :-------------------------------------------------------------------------------------: |
|               is not equal to empty               |   when variable is not ellocated in code eg.: <code>var a = 7; console.log(x);</code>   |
|    when variable is printed before declaration    | there is no 'x', program tries to find it but it was not declared, so it is not defined |
| variable is ellocated in global execution context |                                                                                         |

> Undefined is reserved word;
> Undefined - is a special placeholder, stores memory place for code;

## Naming Convention

## Object

## Functions

## Basics of JavaScript, Practical Examples

#### 👋 'Hello World'

To print a simple first JavaScript program in the console and understand how HTML and JavaScript work together, we start by creating an HTML file. First, we need to link the HTML file to a JavaScript file. This is done by adding a <script> tag inside the <body> of the HTML file.

Next, open a JavaScript file and write:

```js
console.log("Hello, World!");
```

An HTML file with the **.html** extension can be easily opened by clicking on it. The page will appear blank because our script only logs output to the console. To see the result, open the browser’s developer tools by pressing F12 and navigate to the Console tab.

#### ⚠️ Alert-dialog

To display the same result in a popup window, similar to an alert dialog, use the <code>alert()</code> function in your JavaScript file:

```js
alert("Hello World");
```

This will show the phrase as a browser notification-style popup.

#### Using Date(), Math()

**Date()** is a <ins>constructor</ins> function in JavaScript. You can use <code>new Date()</code> to create a new date object. It is useful for operating with time.

```js
console.log(Date()); // Outputs the current date as a string, not an object
```

> Note: Calling **Date()** without new returns the current date and time as a string instead of an object.

**Math()** is a built-in <insa>object</insa> in JavaScript. It provides mathematical constants and functions, such as **Math.PI**, **Math.sqrt()**, and **Math.random()**.

```js
console.log(Math.random()); // Outputs a random number between 0 and 1
```

> Note: Unlike many other objects, Math is not a ~~constructor~~, meaning you can't create instances of it using <code>new Math()</code>.

#### Manipulating DOM

First, what is DOM? The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">[More...]</a>

To manipulate the DOM (Document Object Model) using JavaScript, follow these steps:

<ins>1. Create an &lt;h1&gt; Element in HTML</ins>

First, create an &lt;h1&gt; tag with some text between the tags and assign it a unique id:

```js
&lt;h1&gt; id="text">Milky Way 🌌 &lt;h1&gt;
```

> Note: HTML file

<ins>2. Access the \*&lt;h1&gt; Element in JavaScript</ins>

In your JavaScript file, declare a variable and assign it to the content of the &lt;h1&gt; tag by referencing its id:

```js
let printingText = document.getElementById("text").innerHTML;
console.log(printingText);
```

> Note: JS file

<ins>3. Manipulate the Content of a Button</ins>

Similarly, you can manipulate the content of a button by using the &lt;input&gt; tag with **type="button"**.

```js
&lt;input type="button" id="btn-one" &gt;
```

> Note: html file

<ins>4. Assign Text to the Button</ins>

In your JavaScript file, you can set the button's text using its id. You don't need to add content directly in the HTML, as you can set the button's text through JavaScript:

```js
document.getElementById("your_id_for_input").value = "Click me";
```

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
A string must be enclosed in double **(")** or single **(')** quotes.

To display a variable in the console, use <code>console.log(variableName)</code>.

If we assign a **numeric** value to a variable, quotes are not ~~needed~~.

A **Boolean** variable has only two values: **true** or **false**. Boolean values should <ins>not be enclosed</ins> in quotes.
They are mostly used with logical operators in if statements to check conditions.

```js
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
console.log(`My name is ${firstName} ${lastName} and 
I am ${age} years old. At the moment I'm a student: ${isStudent}`);
```

**Modulus %**

The modulus operator **%** in JavaScript returns the <ins>remainder</ins> of a division. It’s useful for checking even/odd numbers, looping patterns, and cyclic behaviors. If the remainder is <code>0</code>, the dividend is perfectly divisible by the divisor.

```js
let studentsScore = 6;
let maxScore = 19;
let scoreResult = studentsScore % maxScore;
console.log(studentsScore + " % " + maxScore + " = " + Math.round(scoreResult));
```

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
