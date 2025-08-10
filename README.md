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
  - [How Asynchronous function runs in JS](#how-asynchronous-function-runs-in-JS)
* [Call Stack](#call-stack)
* [Values and Variables](#values-and-variables)
* [Why not var](#why-not-var)
* [Hoisting](#hoisting)
* [Temporal Dead Zone](#temporal-dead-zone)
* [Types of JavaScript Errors](#types-of-javaScript-errors)
* [Data Types](#data-types)
  - [Type Coercion](#type-coercion)
  - [undefined vs. not defined](#undefined-vs-not-defined)
* [Fun fact: the shortest JS program](#fun-fact-the-shortest-js-program)
* [Naming Convention](#naming-convention)
* [Lexical Environment](#lexical-environment)
* [Scope Chain](#scope-chain)
* [Closure](#closure)
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

#### How Asynchronous function runs in JS

<ins>The Global Execution Context</ins> runs synchronously — even with async functions!

What actually happens is:
JavaScript offloads async tasks to the environment (browser or Node.js), and lets them finish in the background — using <code>callbacks</code>, <code>Promises</code>, and the <code>event loop</code> to run the result later, after the current execution stack is clear.

🔍 What Happens with async/await or fetch?

Let’s use an example:

```js
console.log("1");
fetch("https://api.example.com/data").then(() => console.log("2"));
console.log("3");
```

🔧 Execution Context Breakdown
Phase 1: Global Memory Creation Phase

<code>console</code>, <code>fetch</code>, etc. are stored as references.

No function has run yet.

Phase 2: Global Code Execution Phase (line-by-line)

1. <code>console.log("1")</code> → prints <code>1</code>

2. <code>fetch(...)</code>:

<code>fetch</code> is passed to the Web API environment (in the browser)

JS continues immediately — doesn’t wait!

When fetch completes, the <code>.then()</code> callback is queued in the microtask queue

3. <code>console.log("3")</code> → prints <code>3</code>

4. The Call Stack is now empty

5. Event loop sees a microtask (<code>.then(...)</code>) waiting → moves it to the Call Stack

6. "2" is printed

✅ Output:

```js
1;
3;
2;
```

🔬 Internals of <code>async/await</code>

```js
async function getData() {
  console.log("A");
  await fetch(...); // suspends here
  console.log("B");
}

getData();
console.log("C");
```

What happens:

<code>getData()</code> enters the call stack, prints <code>"A"</code>, and hits <code>await fetch(...)</code>.

JavaScript suspends <code>getData</code> and exits it — doesn’t block.

Fetch runs in the Web API environment.

<code>"C"</code> is printed (main thread continues).

Later, fetch resolves → its continuation (code after await) is placed in the microtask queue.

<code>"B"</code> is printed when the task is resumed.

✅ Output:

```js
A;
C;
B;
```

🔁 Summary:

Asynchronous functions don't skip the execution context model — they just pause parts of code, hand off tasks to the browser environment, and use the event loop to run the results later, without blocking the synchronous execution.

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

<h3>Step 2: Run <code>console.log(a)</code> </h3>

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

🔷 3. Why doesn’t var behave the same?

✅ var declarations are hoisted and initialized to <code>undefined</code>.
✅ So if you did:

```js
console.log(b);
var b = 100;
```

You'd see:

```js
undefined;
```

Because <code>b</code> exists and is <code>undefined</code> before assignment.

🔷 4. Summary table

<table>
  <tr>
    <th>Declaration Type</th>
    <th>Hoisted?</th>
    <th>Initialized?</th>
    <th>TDZ?</th>
    <th>Access Before Declaration</th>
  </tr>
  <tr>
    <td>var</td>
    <td>Yes</td>
    <td>Yes (undefined)</td>
    <td>No</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>let</td>
    <td>Yes</td>
    <td>No</td>
    <td>Yes</td>
    <td>ReferenceError</td>
  </tr>
  <tr>
    <td>const</td>
    <td>Yes</td>
    <td>No</td>
    <td>Yes</td>
    <td>ReferenceError</td>
  </tr>
</table>

## Why not var

The key reasons <code>var</code> fell out of favor, and why <code>let/const</code> were introduced in **ES6 (2015)**, because <code>var</code> was problematic

🔷 1. <code>var</code> is hoisted and initialized to <code>undefined</code>

When you declare a variable with <code>var</code>, it is hoisted and already initialized to <code>undefined</code> before your code executes.

Example:

```js
console.log(foo); // undefined
var foo = 42;
console.log(foo); // 42
```

This often confused developers:

Why doesn’t <code>console.log(foo)</code> throw an error?

Why is <code>foo</code> undefined instead of throwing if I forgot to initialize?

🔷 2. Bugs from accidental <code>undefined</code>

Since <code>var</code> silently initializes to undefined, forgetting to actually assign a value can lead to subtle bugs later:

```js
var user;
if (user) {
  doSomething();
}
```

This condition fails because <code>user</code> is <code>undefined</code>, but the developer might have assumed they hadn’t declared it yet.

## Hoisting

Hoisting is a behavior of the JavaScript engine during the Creation Phase of an execution context, where:

<ul><li>variable and function declarations are moved to the top of their scope (in memory)</li>

<li>before any code actually executes</li>
</ul>

```js
console.log(foo); // undefined
var foo = 42;
```

Here, <code>var foo</code> is hoisted to the top of the scope and initialized to <code>undefined</code>. Then later it’s assigned <code>42</code>.

```js
bar(); // works!
function bar() {
  console.log("Hello");
}
```

Here, the entire function declaration is hoisted.

🪄 Analogy:

Think of hoisting like reserving seats in a theater before the show starts.
Even though you walk in later, your seat was already marked with your name — the engine just hasn’t filled it yet (<code>undefined</code> for <code>var</code>, <code>uninitialized</code> for <code>let/const</code>).

🔷 How the JS engine works

When JS runs, it does two passes over your code:
✅ Pass 1: Creation Phase (set up memory, hoist declarations)
✅ Pass 2: Execution Phase (run your code line by line)

Why two passes? Because JS is interpreted and single-threaded — it needs to know what variables exist before it can start executing.
So it allocates memory for all declared variables and functions upfront.

🧠 Why keep hoisting today?

Even though it can be confusing, hoisting is still part of the language because:

It’s deeply baked into how the engine parses & executes code

It allows for features like function declarations being callable anywhere in scope

Breaking backward compatibility would break a lot of old code

## Temporal Dead Zone

The TDZ is the time (or “zone”) between:

when a <code>let</code> or <code>const</code> variable is hoisted into scope

and when it is actually initialized with a value

Any attempt to access the variable in this zone results in a <code>ReferenceError</code>: **Cannot access ‘x’ before initialization**.

🔷 How is it implemented?

When the JavaScript engine creates the scope:

It hoists the variable name into the scope’s environment record.

It marks the variable as “uninitialized”.

Until the <code>let</code> or <code>const</code> line executes and assigns a value, that binding remains uninitialized.

During this time, any get access to that variable fails.

🔷 Memory model:
During scope creation:

```js
Scope:
  foo → uninitialized
```

TDZ lasts:

✅ From the start of the scope
✅ Until the line where you declare & initialize with let or const

After:

```js
Scope:
  foo → 42
```

🪄 Why is it called temporal dead zone?

Temporal: it’s about time, not space — the time between entering scope and variable initialization

Dead: the variable “exists” in memory but cannot be used

Zone: it’s a specific range of execution

🌟 Summary:

✅ TDZ is the phase when a <code>let</code> or <code>const</code> variable exists in scope but is not initialized yet.
✅ Accessing it then throws a <code>ReferenceError</code>.
✅ It exists to help catch bugs and enforce cleaner scoping rules.

## Types of JavaScript Errors

1️⃣ ReferenceError

➡️ When you try to access a variable that doesn’t exist, or a variable in the TDZ.

Example: accessing undeclared variable

```js
console.log(x); // ❌ ReferenceError: x is not defined
```

Example: accessing <code>let</code> in TDZ

```js
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

Why?
✅ Scope exists, but binding is uninitialized (let TDZ).
✅ Or binding doesn’t exist at all (<code>var x</code> never declared).

2️⃣ SyntaxError

➡️ When your code violates the JavaScript grammar rules — it cannot even parse, so the engine throws before running anything.

Example: invalid syntax

```js
let a = ;  // ❌ SyntaxError: Unexpected token ';'
```

Example: <code>const</code> without initializer

```js
const b; // ❌ SyntaxError: Missing initializer in const declaration
```

Example: redeclaring let in same scope

```js
let a = 10;
let a = 100;
// ❌ SyntaxError: Identifier 'a' has already been declared
```

Why?
✅ The parser sees two let declarations of the same identifier a in the same scope, which is explicitly forbidden by the ECMAScript spec.

Why?
✅ These are errors the parser can detect at parse time — code is malformed.

3️⃣ TypeError

➡️ When you perform an operation on a value of the wrong type.

Example: calling something that’s not a function

```js
const num = 42;
num(); // ❌ TypeError: num is not a function
```

Example: assigning to a constant

```js
const x = 10;
x = 20; // ❌ TypeError: Assignment to constant variable
```

Why?
✅ Here the code is syntactically correct, but at runtime the type of the value doesn’t support the operation.

🌟 Takeaway

✅ TDZ specifically results in a ReferenceError.
✅ SyntaxErrors happen before execution.
✅ TypeErrors happen at runtime, when the value’s type is wrong for the operation.

## Data Types

JavaScript is a dynamically typed, loosely typed language, where the type of a variable is determined at runtime and can change.

JavaScript has two main categories of types:

📦 Primitive types (immutable, stored by value)
📦 Objects (mutable, stored by reference)

📚 1️⃣ Primitive Types

Primitives are simple, immutable values, not objects.
✅ They are compared by value, not reference.
✅ When you assign a primitive to another variable, you copy its value.
List of primitives:

| Type      | Example      | Description                               |
| --------- | ------------ | ----------------------------------------- |
| string    | "hello"      | Sequence of characters                    |
| number    | 42, 3.14     | Numeric values (int/float)                |
| bigint    | 123n         | Large integers                            |
| boolean   | true, false  | Logical values                            |
| undefined | undefined    | Default value for uninitialized variables |
| null      | null         | Explicitly no value                       |
| symbol    | Symbol("id") | Unique identifiers                        |

> Note! Since ES6, bigint and symbol are newer additions.

🔷 Notes on primitives:

<code>typeof null</code> is "object" (historical bug — but <code>null</code> is still a primitive)

<code>undefined</code> and <code>null</code> are falsy and loosely equal:

```js
undefined == null; // true
undefined === null; // false
```

<code>bigint</code> is useful when integers exceed <code>Number.MAX_SAFE_INTEGER</code>

📚 2️⃣ Object Types

Objects are collections of key-value pairs (mutable).
✅ Compared by reference — even two identical-looking objects are different:

```js
{} === {} // false
```

Examples of object types:

| Object Type    | Example             | Description               |
| -------------- | ------------------- | ------------------------- |
| Object literal | `{ name: "Jonas" }` | Key-value pairs           |
| Array          | `[1, 2, 3]`         | Ordered list of values    |
| Function       | `function() {}`     | Callable object           |
| Date           | `new Date()`        | Date and time object      |
| RegExp         | `/abc/`             | Regular expression object |
| Error          | `new Error("msg")`  | Error object              |

✅ Even functions are objects in JavaScript:

```js
typeof function () {} === "function";
typeof (() => {}) === "function";
```

✅ Arrays are specialized objects with numeric keys:

```js
typeof [] === "object";
Array.isArray([]) === true;
```

🔷 Special notes:

Dynamic typing:
A variable’s type is determined at runtime and can change:

```js
let x = 42;
x = "hello"; // fine
```

Type coercion:
JS often converts between types automatically:

```js
"5" + 1; // "51" (string)
"5" - 1; // 4 (number)
```

#### Type Coercion

🧠 Is JavaScript’s type coercion a bug?

No — it’s not a bug, it’s a design decision of the language.

JavaScript was designed in **1995** as a lightweight scripting language for the web. At the time, its designer (**Brendan Eich**) deliberately made it loosely typed and forgiving, so even beginners could write simple scripts that “just work.”

This is why JS allows things like:

```js
"5" + 1; // "51"
"5" - 1; // 4
false + 1; // 1
null == undefined; // true
```

This behavior is called type coercion:
➡️ JS implicitly converts one type into another in some operations, depending on the context (string context, numeric context, etc).

It’s written into the ECMAScript specification — it’s part of the language, not a bug.

🚨 Why does it feel like a “bug” sometimes?

Because it often leads to surprising results and subtle bugs, e.g.:

```js
[] + {}; // "[object Object]"
{
}
+[]; // 0
NaN == NaN; // false
```

Many developers consider it a design flaw in hindsight, but it was intended to make the language forgiving and flexible. However, this flexibility comes at the cost of predictability and safety.

📜 typeof operator

✅ You can inspect the type of a value:

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof undefined; // "undefined"
typeof null; // "object" (bug)
typeof Symbol(); // "symbol"
typeof {}; // "object"
typeof []; // "object"
typeof (() => {}); // "function"
```

✅ typeof null === "object" is a long-standing quirk of JavaScript.

🔷 Summary Table

| Type      | Category  | Example            | Description            |
| --------- | --------- | ------------------ | ---------------------- |
| string    | Primitive | `"hello"`          | Textual data           |
| number    | Primitive | `42`, `3.14`       | Numeric values         |
| bigint    | Primitive | `123n`             | Large integers         |
| boolean   | Primitive | `true`, `false`    | Logical values         |
| undefined | Primitive | `undefined`        | Uninitialized variable |
| null      | Primitive | `null`             | Explicitly no value    |
| symbol    | Primitive | `Symbol("id")`     | Unique identifier      |
| object    | Object    | `{ key: "value" }` | Key-value pairs        |
| array     | Object    | `[1, 2, 3]`        | Ordered list           |
| function  | Object    | `function() {}`    | Callable object        |
| date      | Object    | `new Date()`       | Date and time          |
| regexp    | Object    | `/abc/`            | Regular expression     |
| error     | Object    | `new Error("msg")` | Error object           |

✅ All primitive types are immutable and copied by value.
✅ All objects are mutable and assigned/copied by reference.

#### undefined vs. not defined

These are two very different situations in JavaScript — though at first glance they seem similar.

🧠 1️⃣ What is undefined?

✅ undefined is a value.
✅ It means: “this variable exists, but it hasn’t been assigned a value yet.”

In other words:

The variable has been declared in scope, but not yet initialized.

```js
let a;
console.log(a); // 👉 undefined
```

Why?
Because <code>a</code> was declared, but you never assigned it a value — so JavaScript automatically assigns it the default value <code>undefined</code>

```js
function foo() {}
console.log(foo()); // 👉 undefined
```

Why?
Because <code>foo()</code> doesn’t explicitly return anything — and by default, functions return <code>undefined</code> if no value is returned.

Key properties of _undefined_:

It’s a primitive value.

It’s the default value of uninitialized declared variables.

It exists in memory because the variable is declared.

🚨 2️⃣ What is **“not defined”**?

✅ “Not defined” is not a value — it’s an error.
✅ It means: “this variable does not exist in the current scope.”

In other words:

The JavaScript engine looked for the variable name, but couldn’t find a binding for it in scope.

```js
console.log(b); // ❌ ReferenceError: b is not defined
```

Why?
Because there is no variable <code>b</code> anywhere in the accessible scope chain — you never declared it.

Key properties of <code>not defined</code>:

This is a <code>ReferenceError</code>, thrown when accessing a name that has no binding.

Nothing exists in memory for that name in scope.

The engine stops execution at this point if uncaught.

🔷 Side-by-side Comparison

| Aspect           | undefined                          | not defined             |
| ---------------- | ---------------------------------- | ----------------------- |
| What is it?      | A value                            | A ReferenceError        |
| Happens when?    | Variable declared but not assigned | Variable never declared |
| Exists in scope? | ✅ Yes                             | ❌ No                   |
| Type (typeof)    | "undefined"                        | N/A (error)             |

## Fun fact: the shortest JS program

The shortest valid JavaScript program is simply:

```js

```

Or even just nothing at all — an empty file is also a valid JavaScript program.

🧠 Why?

JavaScript syntax allows a program to consist of zero statements.

An empty file is parsed and executed by the JS engine without errors.

If you include just a semicolon (;), that’s an empty statement — also valid.

When you run an empty file <code>Call Stack</code> and <code>Global execution context</code> are created.

## Naming Convention

A naming convention is a set of agreed-upon rules for how to name variables, functions, classes, constants, etc.
JavaScript itself doesn’t enforce any naming rules beyond what’s valid syntax — but following conventions makes your code readable & predictable for others (and yourself).

🔷 1️⃣ camelCase

✅ Most common convention in JS.
✅ First word lowercase, subsequent words capitalized.
✅ Used for:

Variables

Function names

Object properties

```js
let userName = "Alice";
function calculateArea(radius) {}
const userProfile = {
  firstName: "Alice",
  lastName: "Smith",
};
```

Why?
➡️ This is the idiomatic style in JavaScript for identifiers (borrowed from Java).

🔷 2️⃣ PascalCase (UpperCamelCase)

✅ Every word capitalized, including the first.
✅ Commonly used for:

Constructor functions

Classes

React components

```js
class UserProfile {}
function User(name) {
  this.name = name;
}
const MyComponent = () => {};
```

Why?
➡️ Distinguishes classes/types from regular variables/functions.

🔷 3️⃣ UPPER_CASE (SNAKE_CASE)

✅ All uppercase letters, with underscores between words.
✅ Used for:

Constants (that don’t change)

Enum-like values

```js
const MAX_RETRIES = 5;
const API_KEY = "abc123";
```

Why?
➡️ Makes it obvious that these are fixed “constants” — a long tradition from C/C++.

🔷 4️⃣ kebab-case

✅ Lowercase with hyphens between words.
✅ ⚠️ Not valid for variable names in JavaScript, because - is a subtraction operator.
✅ Common in:

File names

CSS class names

Example:

```js
user - profile.js;
main - header.css;
```

🌟 Other good practices

✅ Be descriptive but concise:

```js
let a = 5; // ❌ Bad
let userAge = 5; // ✅ Good
```

✅ Avoid reserved words:

```js
let class = 10; // ❌ SyntaxError
```

✅ Use meaningful names instead of one-letter variables (unless in small scopes like loops).

✅ Boolean variables often start with <code>is</code>, <code>has</code>, <code>can</code>, etc.:

```js
let isActive = true;
let hasPermission = false;
```

✅ Don’t mix conventions in the same project.

## Lexical Environment

A **Lexical Environment** (LE) is an internal JavaScript structure (a low-level concept in the JS engine) that stores:

<ul>
<li>Variable bindings (name → value pairs)</li>
<li>A reference to its outer lexical environment (used to form the scope chain)</li>
</ul>

Every time JavaScript executes a function, block, or script, it creates a new Lexical Environment.

🔍 Structure of a Lexical Environment

Think of each Lexical Environment as a box:

```js
LexicalEnvironment = {
  environmentRecord: { // where variables live
    a: 10,
    b: function() {},
  },
  outer: [reference to outer environment]
}
```

🔁 When and Where is it Created?

Lexical Environments are created:

<ul>
<li>When your script starts (→ Global LE)</li>
<li>When a function is invoked (→ Function LE)</li>
<li>When a block is entered (→ Block LE for <code>let / const</code>)</li>
<li>When <code>eval()</code> is used (rare, creates its own LE)</li>
</ul>

📦 Types of Lexical Environments

1️⃣ Global Lexical Environment

Created when your program runs.

```js
let x = 10;
function greet() {
  console.log("Hello");
}
```

LE looks like:

```js
GlobalLexicalEnvironment = {
  environmentRecord: {
    x: 10,
    greet: function
  },
  outer: null
}
```

2️⃣ Function Lexical Environment

Each time a function is called, a new LE is created for that call.

```js
function outer() {
  let a = 1;
  function inner() {
    let b = 2;
    console.log(a + b);
  }
  inner();
}
```

Here’s what happens:

<code>outer()</code> creates a Lexical Environment with <code>a</code>: <code>1</code> and reference to Global

<code>inner()</code> creates another LE with <code>b</code>: <code>2</code> and reference to outer’s LE

So <code>inner()</code> can access a because of the outer reference.

3️⃣ Block Lexical Environment

Created for each block <code>({ ... })</code> when using <code>let</code> or <code>const</code>

```js
{
  let x = 5;
  const y = 10;
}
```

A new block LE is created for the <code>{...}</code>

After the block finishes, that environment is destroyed

🔗 How It Helps: Scope & Closures

Because each environment has a reference to its outer one:

JS looks up variables through these nested environments

That lookup chain = the scope chain

✅ Closures are functions that "remember" the lexical environment they were created in — even after the outer function has returned.

Example:

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const inc = counter();
console.log(inc()); // 1
console.log(inc()); // 2
```

Even though <code>counter()</code> has finished, the inner function still accesses count — because its Lexical Environment is preserved!

🗂 Summary

| Concept              | Description                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| Lexical Environment  | Internal structure storing variable bindings and reference to outer environment (scope).    |
| Environment Record   | Object holding variable/function bindings for the current scope.                            |
| Outer Environment    | Reference to the parent (enclosing) lexical environment, forming the scope chain.           |
| Global Environment   | Created when the script starts; contains global variables and functions.                    |
| Function Environment | Created each time a function is invoked; contains local variables and arguments.            |
| Block Environment    | Created for each block (`{}`) with `let`/`const` declarations; destroyed after block ends.  |
| Scope Chain          | Chain of lexical environments used for variable lookup.                                     |
| Closure              | Function that retains access to its lexical environment even after the outer function ends. |

> A Lexical Environment is the hidden structure behind variable scope in JavaScript.
> It tracks what variables are available at any point in the code, and where to find them.

## Scope Chain

❓ What is the Scope Chain?

The Scope Chain is the process JavaScript uses to **find the value of a variable**.
It’s literally <ins>a chain of references</ins> to Lexical Environments.

When your code tries to access a variable, the engine:

Looks in the current Lexical Environment (where the code is running).

If not found, follows the outer reference to the next outer environment.

Repeats until:

The variable is found, or

It reaches the Global Lexical Environment (top of the chain).

If it’s not there → <code>ReferenceError</code>.

**Example:**

```js
let x = 1; // Global

function outer() {
  let y = 2;

  function inner() {
    let z = 3;
    console.log(x, y, z);
  }

  inner();
}

outer();
```

Step-by-step resolution for <code>console.log(x, y, z)</code>:

Look in <code>inner</code> LE → finds <code>z = 3</code>, but no <code>x</code> or <code>y</code>

Follow <code>outer</code> reference → in outer LE finds <code>y = 2</code>

Keep going out → in Global LE finds <code>x = 1</code>

Done — values are <code>1 2 3</code>.

**What Happens if Variable Isn’t Found?**

```js
function test() {
  console.log(a);
}
test(); // ReferenceError
```

✔️ JS checks test LE → not found

✔️ Checks Global LE → not found

✔️ Throws ReferenceError: a is not defined

**Key Points**

Scope Chain is static (lexical): based on where functions are written, not how they are called.

Each function/block has its own Lexical Environment, connected to its parent.

Variable lookup always starts local and climbs up.

**Real-world Use**

Closures and nested functions rely on this mechanism:

Functions “remember” variables because the Scope Chain preserves the path to where they were defined.

❓ Does the Scope Chain make code more error-prone by letting us access variables declared “in the wrong place”?

The short answer: It <ins>can</ins> — **if misused**. But the problem isn’t the Scope Chain itself; it’s how variables are declared and managed.

## Closure

**A closure** is a function that "remembers" the variables from the scope where it was created, even after that scope has finished executing.

This is possible because the inner function keeps a reference to the Lexical Environment where it was defined.

```js
function outer() {
  let secret = "shh...";

  function inner() {
    console.log(secret);
  }

  return inner;
}

const fn = outer(); // outer() finishes here
fn(); // logs: shh...
```

When <code>outer()</code> finishes, its Lexical Environment should normally disappear.

But <code>inner</code> is returned, and it closes over (captures) the variable <code>secret</code>.

Calling <code>fn()</code> later still has access to secret.

Closures are not just a concept — they are everywhere in real JS code.

a) Data Privacy / Encapsulation

```js
function createCounter() {
  let count = 0; // private

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
```

<code>count</code> is not accessible directly — only via the returned methods.

This simulates private variables.

b) Event Handlers

```js
function setupButton(id) {
  let clicks = 0;
  document.querySelector(id).addEventListener("click", () => {
    clicks++;
    console.log(`Button clicked ${clicks} times`);
  });
}

setupButton("#myBtn");
```

Each button can keep its own independent counter — thanks to closure.

c) Function Factories

```js
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

Closures allow you to create customized functions dynamically.

❓ Why Closures Keep Memory Alive

When a function creates a closure, the JS engine does not garbage collect that Lexical Environment.

It keeps it alive in memory as long as any inner function still references it.

```js
function remember() {
  let data = new Array(1000000).fill("big"); // big memory
  return () => console.log(data.length);
}

const fn = remember();
// memory stays allocated because fn() still references `data`
```

When you remove all references (<code>fn = null</code>), then the Lexical Environment can finally be garbage collected.

🗝️ Key Takeaways

Closure = function + preserved lexical environment.

It allows:

📌 Data hiding (private variables)

📌 Custom behavior per function instance

📌 Asynchronous callbacks to access "old" variables

📌 It can cause memory leaks if you keep unused closures around.

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
